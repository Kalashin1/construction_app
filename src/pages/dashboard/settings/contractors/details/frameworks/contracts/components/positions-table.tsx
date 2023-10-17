import { useState } from "react";
import { SelectBox, TableSearch } from "../../../../../../components/project-summary";
import Pagination from "../../../../../../components/pagination";
import { PositionInterface } from "../../../../../../../../types";

export const PositionsOverview = ({ positions }: { positions: PositionInterface[] }) => {

  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white rounded-md shadow-sm my-8">
      <div className="p-4">
        Contract positions
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="flex flex-row justify-between items-center px-6 py-4">
        <div className="w-3/12 sm:w-1/12 mr-4">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>

        <TableSearch />
      </div>
      <PositionTable positions={positions} />
      <Pagination />
    </div>
  )
}

export default PositionsOverview;

const PositionTable = ({ positions }: { positions: PositionInterface[] }) => {
  const dataTitles = ['Position', 'Short Text', 'Crowd', 'Unit', 'Price']
  return (
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
        {positions && positions.map(({external_id, shortText, crowd, units, price}) => (

          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">{external_id}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">{shortText}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">{crowd}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">{units}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">{price}</p>
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
};