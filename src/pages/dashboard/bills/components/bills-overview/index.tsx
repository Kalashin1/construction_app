import { useState } from "react";
import { Button } from "../../../components/current-projects";
import Pagination from "../../../components/pagination";
import { SelectBox, TableSearch } from "../../../components/project-summary";

const BillsTable = () => {
  const dataTitles = ['The Invoice', 'Project', 'Recipient', 'Created At', 'Amount', 'Status']
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
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Cy Ganderton</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Quality Control Specialist
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Nov 20, 2023</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">$1,0000</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <span className="bg-green-700 py-1 px-4 rounded text-white">success</span>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};


const BillsOverview = () => {
  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
        <BillsTable />
        <Pagination />
      </div>
    </div>
  )
}

export default BillsOverview;