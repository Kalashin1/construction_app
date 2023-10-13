/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useState } from "react";
import { Button } from "../../../../../components/current-projects";
import Pagination from "../../../../../components/pagination";
import { SelectBox, TableSearch } from "../../../../../components/project-summary";
import { useParams } from "react-router-dom";
import { StandIn, User } from "../../../../../../../types";
import { getUserById } from "../../../../../helper/user";

const ContactDetailsTable = (
  { standIns }: { standIns: User[] }
) => {
  console.log(standIns)

  const dataTitles = ['First Name', 'Last Name', 'e-mail', 'phone', 'Position']
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-scroll my-4">
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
          {standIns && standIns.map((standIn) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{standIn.last_name}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{standIn.first_name}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {standIn.email}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {standIn?.phone ?? 'nil'}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {standIn?.position ?? 'Not assigned'}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};


const ContactDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [standIn, updateStandIn] = useState<User[]>([]);

  useEffect(() => {
    const getUserDetails = async (id: string) => {
      const [error, _user] = await getUserById(id)
      if (error) {
        alert('error getting user account');
        console.log(error);
      }

      if (_user) {
        console.log(_user);
        const standIns = _user.standIn;
        const _standIn = await Promise.all(standIns.map(async (standIn: StandIn) => {
          const [, user] = await getUserById(standIn._id)
          if (user) return user;
        })) as User[]
        updateStandIn(_standIn);
        setUser(_user)
      }
    }

    getUserDetails(id!)
  }, [id])
  const [numRows, setNumRows] = useState(0)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        <h3 className="text-md font-bold">
          <span className="mr-4">
            <i className="fas fa-users" />
          </span>
          Contact Person
        </h3>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/6 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 md:w-2/5">
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
        {user && (<ContactDetailsTable standIns={standIn} />)}
        <Pagination />
      </div>
    </div>
  )
}

export default ContactDetails;