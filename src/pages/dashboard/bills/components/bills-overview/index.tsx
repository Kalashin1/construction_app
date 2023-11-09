/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components/current-projects";
import Pagination from "../../../components/pagination";
import { SelectBox, TableSearch } from "../../../components/project-summary";
import { Draft, INVOICE_STATUS } from "../../../../../types";
import { UserAuthContext } from "../../../../../App";
import { getReciepientDraft, getUserDrafts, updateDraftStatus } from "../../helper";
import { notify, NotificationComponent } from "../../../components/notification/toast";
import { formatter } from "../../../helper/tools";
import { Link } from "react-router-dom";
import AssignInvoiceIdModal from "./assign-invoice-id";

const BillsTable = ({
  drafts
}: {
  drafts: Draft[]
}) => {

  const { user } = useContext(UserAuthContext);
  const dataTitles = ['The Invoice', 'Project', user?.role === 'executor' ? 'Recipient' : 'Creator', 'Created At', 'Amount', 'Status', 'Action'];
  const [showInvoiceID, updateShowInvoiceID] = useState(false);
  const updateDraft = async (draft_id: string, updateType: 'accept' | 'reject') => {
    let error, payload
    if (updateType === 'accept') {
      [error, payload] = await updateDraftStatus(draft_id, 1)
    }

    if (updateType === 'reject') {
      [error, payload] = await updateDraftStatus(draft_id, 2)
    }

    if (error) {
      notify(
        (<NotificationComponent message={'error updating status!'} />),
        {
          className: `bg-red-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (payload) {
      notify(
        (<NotificationComponent message={`Status updated successfully, Draft ${updateType}ed`} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(payload);
      window.location.reload();
    }
  }
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto my-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">

            {dataTitles.map((dt, i) => (
              <th
                className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                key={i}
              >
                {dt}
              </th>
            ))}

          </tr>
        </thead>
        <tbody>
          {drafts && drafts.map((draft, index) => (
            <tr key={index} className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5 underline text-primary">
                <Link to={`/draft/${draft._id}`}>
                  {draft?.project?.external_id}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {user?.role === 'executor' && (draft.reciepient.first_name)}
                {user?.role === 'contractor' && (draft.owner.first_name)}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{new Date(draft.createdAt).toDateString()}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{formatter.format(draft.amount)}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <span className={`${draft.status === INVOICE_STATUS[0] && 'bg-yellow-500'} ${draft.status === INVOICE_STATUS[1] && 'bg-green-500'} ${draft.status === INVOICE_STATUS[2] && 'bg-red-500'} py-1 px-4 rounded text-white`}>{draft.status}</span>
              </td>
              {draft?.reciepient._id === user?._id && (
                <td>
                  {draft.status === INVOICE_STATUS[0] && (<button
                    className="btn h-9 w-9 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25 mr-2"
                    onClick={() => updateDraft(draft._id, 'accept')}
                  >
                    <i className="fas fa-check" />
                  </button>)}
                  {draft.status === INVOICE_STATUS[0] && (<button
                    className="btn h-9 w-9 rounded-full bg-red-300 p-0 font-medium text-white hover:bg-red-600 focus:bg-info/20 active:bg-info/25"
                    onClick={() => updateDraft(draft._id, 'reject')}
                  >
                    <i className="fas fa-times" />
                  </button>)}
                </td>
              )}
              {draft.owner._id === user?._id && (
                <td>
                  {draft.status === INVOICE_STATUS[1] && (<button
                    className="btn h-9 w-9 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25 mr-2"
                    onClick={() => updateShowInvoiceID(true)}
                  >
                    <i className="fas fa-edit" />
                  </button>)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showInvoiceID && (<AssignInvoiceIdModal closeModal={() => updateShowInvoiceID(false)} />)}
    </div >
  );
};


const BillsOverview = () => {
  const [numRows, setNumRows] = useState(0)
  const [bills, setBills] = useState<Draft[] | null>(null);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      let error, data;
      if (user?.role === 'executor') {
        [error, data] = await getUserDrafts(user?._id!);
      } else if (user?.role === 'contractor') {
        [error, data] = await getReciepientDraft(user?._id!);
      }
      if (error) {
        notify(
          (<NotificationComponent message={'error fetching drafts!'} />),
          {
            className: `bg-red-700 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(error);
      }

      if (data) {
        setBills(data);
        console.log(data);
      }
    }

    setUp();
  }, [user?._id, user?.role])
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        <h3 className="text-md font-bold underline">System Tasks(0)</h3>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/4 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 w-4/5">
          <TableSearch />
        </div>

        <div className="ml-4 hidden md:block">
          <Button
            action={() => { }}
            label="Excel"
          />
        </div>
      </div>
      <div>
        {bills && (<BillsTable drafts={bills} />)}
        <Pagination />
      </div>
    </div>
  )
}

export default BillsOverview;