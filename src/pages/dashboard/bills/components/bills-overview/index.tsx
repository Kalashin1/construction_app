/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components/current-projects";
import Pagination from "../../../components/pagination";
import { SelectBox, TableSearch } from "../../../components/project-summary";
import { Draft } from "../../../../../types";
import { UserAuthContext } from "../../../../../App";
import { getUserDrafts } from "../../helper";
import { notify, NotificationComponent } from "../../../components/notification/toast";
import { formatter } from "../../../helper/tools";
import { useNavigate } from "react-router-dom";

const BillsTable = ({
  drafts
}: {
  drafts: Draft[]
}) => {
  const dataTitles = ['The Invoice', 'Project', 'Recipient', 'Created At', 'Amount', 'Status'];
  const navigate = useNavigate();
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
            <tr key={index} className="border border-transparent border-b-slate-200 dark:border-b-navy-500 cursor-pointer" onClick={() => navigate(`/draft/${draft._id}`)}>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{draft?.project?.external_id}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {draft.reciepient.first_name}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{new Date(draft.createdAt).toDateString()}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{formatter.format(draft.amount)}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <span className="bg-green-700 py-1 px-4 rounded text-white">{draft.status}</span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};


const BillsOverview = () => {
  const [numRows, setNumRows] = useState(0)
  const [bills, setBills] = useState<Draft[] | null>(null);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      const [error, data] = await getUserDrafts(user?._id!)
      if (error) {
        notify(
          (<NotificationComponent message={'error fetching bills!'} />),
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
  }, [user?._id])
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