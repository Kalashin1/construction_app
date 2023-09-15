import { useState } from "react";
import { Button } from "../../../../components/current-projects";
import Pagination from "../../../../components/pagination";
import { SelectBox, TableSearch } from "../../../../components/project-summary";

const EmployeesTable = () => {
  const dataTitles = ['First Name', 'Last Name', 'e-mail', 'phone', 'Mobile', 'Position']
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
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500 dark:border-navy-700 dark:bg-navy-800">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Balde</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Ibrahim</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              info@ibrahim.de
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">12-345-678</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">$1,0000</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              construction project
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};


const EmployeesOverview = () => {
  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        <h3 className="text-md font-bold">
          <span className="mr-4">
            <i className="fas fa-users" />  
          </span>  
          Employees
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
        <EmployeesTable />
        <Pagination />
      </div>
    </div>
  )
}

export default EmployeesOverview;