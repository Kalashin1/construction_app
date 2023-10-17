/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useState, useEffect, useContext } from "react";
import { Button } from "../../../components/current-projects";
import Pagination from "../../../components/pagination";
import { SelectBox, TableSearch } from "../../../components/project-summary";
import { UserIcon } from "../../../svg";
import { Link } from "react-router-dom";
import { User } from "../../../../../types";
import { getContractors } from "../../helper";
import { UserAuthContext } from "../../../../../App";
import AddTradeModal from "../../../profie/trades/components/trade-moda";

const ConstractorsTable = ({
  contractors
}: {
  contractors: User[] | null
}) => {
  const dataTitles = ['S/N', 'Name', 'Street', 'Postcode', 'Location', 'e-mail', 'action'];
  const { setCurrentUser, user } = useContext(UserAuthContext);
  const [showTradeModal, updateShowTradeModal] = useState(false)
  return (
    <div className="min-w-full overflow-x-auto my-4 relative">
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
          {contractors && contractors.map((con, index) => (
            <tr
              className="border border-transparent border-b-slate-200 dark:border-b-navy-500"
              key={index}
            >
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="text-red-500" to={`/contractor/${con._id}`}>
                  {con.first_name}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {con?.address?.street ? con.address.street : 'Musterstraße. XXXXX, Stadt'}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {con?.address?.zip ? con.address.zip : '45329'}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {con?.address?.province ? con.address.province : ''}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {con.email}
                {/* <span className="bg-green-700 py-1 px-4 rounded text-white">success</span> */}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <button className="border border-gray-700 px-4 py-1 rounded-lg" onClick={() => updateShowTradeModal(true)}>
                  Send Contract
                </button>
              </td>
              {showTradeModal && user?.role === "contractor" && (<AddTradeModal
                closeModal={() => updateShowTradeModal(false)}
                setUser={setCurrentUser!}
                _id={user?._id!}
                executor={con._id!}
              />)}
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};


const ConstructorsOverview = () => {
  const [numRows, setNumRows] = useState(0);
  const [contractors, setContractors] = useState<User[] | null>([]);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      if (user?.role === 'admin') {
        const [error, payload] = await getContractors();
        if (error) {
          alert('oops something happened!');
          console.log(error);
        } else {
          setContractors(payload);
          console.log(payload)
        }
      }
      if (user?.role === 'contractor') {
        console.log(user.executors)
        setContractors(user.executors)
      }

    }
    setUp()
  }, [user?.executors, user?.role])
  return (
    <div className="bg-white rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="flex flex-row justify-between items-center p-3">
        <h3 className="text-md font-bold flex flex-row">
          <UserIcon
            width={15}
            color="#fff"
          />
          <span className="ml-2">System Tasks</span>
        </h3>
        <Button
          label="Capacity Planning"
          color="bg-primary"
          textColor="text-white"
          action={() => { }}
        />
      </div>

      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="flex flex-col md:flex-row md:items-center p-3 justify-between">
        <div className="sm:w-1/6 w-1/4 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 w-2/5">
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
        <ConstractorsTable
          contractors={contractors}
        />
        <Pagination />
      </div>
    </div>
  );
};

export default ConstructorsOverview;