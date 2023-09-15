import { useState } from "react";
import { Button } from "../../../../components/current-projects";
import Pagination from "../../../../components/pagination";
import { SelectBox, TableSearch } from "../../../../components/project-summary";
import DownloadIcon from "../../svg/donwload";

const BillsTable = () => {
  const dataTitles = ['Customer Name', 'Project Status', 'Project Number', 'Bill Number', 'Invoice Type', 'Invoice Date', 'Due Date', 'Invoice Amount', 'Payment Amount', 'Open', ' ']
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
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Ibrahim Balde</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Completed</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              MAGGA-101
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">type</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Nov 20, 2023</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Nov 20, 2023</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">$3,0000</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">$1,7000</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">$900</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <span className="bg-green-700 py-1 px-2 rounded text-white mr-2">x</span>
              <span className="bg-green-700 py-1 px-2 rounded text-white mr-2">+</span>
              <span className="bg-green-700 py-1 px-2 rounded text-white">?</span>
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
    <div className="bg-white p-6 rounded-lg shadow-md my-12 dark:border-navy-700 dark:bg-navy-800 dark:text-accent">
      <div className="my-4 mb-12 flex flex-col md:flex-row justify-between md:items-center">
        <div className=" flex flex-row items-center my-2 md:my-0">
          <DownloadIcon width={20} color="gray" />
          <h3 className="ml-4 text-md font-bold">Open items (receipt)</h3>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-2">
          <Button
            label="Payment Management"
            action={() => {}}
            color="bg-blue-900"
            textColor="text-white"
          />
          <Button
            label="Excel"
            action={() => {}}
          />
        </div>
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

        
      </div>
      <div>
        <BillsTable />
        <Pagination />
      </div>
    </div>
  )
}

export default BillsOverview;