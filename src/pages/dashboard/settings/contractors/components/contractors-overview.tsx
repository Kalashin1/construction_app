import { useState } from "react";
import { Button } from "../../../components/current-projects";
import Pagination from "../../../components/pagination";
import { SelectBox, TableSearch } from "../../../components/project-summary";
import { UserIcon } from "../../../svg";
import { Link } from "react-router-dom";
import { SCREENS } from "../../../../../navigation/constants";

const ConstractorsTable = () => {
  const dataTitles = ['S/N', 'Surnaame', 'Street', 'Postcode', 'Location', 'additive', 'e-mail']
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
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <Link className="text-red-500" to={SCREENS.CONTRACTOR_DETAILS}>
                LWS Plus GmbH
              </Link>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Schnieringshof 10
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">45329</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Eat</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">&nbsp;</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              info@lwsplus.de
              {/* <span className="bg-green-700 py-1 px-4 rounded text-white">success</span> */}
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};


const ConstructorsOverview = () => {
  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white rounded-lg shadow-md">
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
          action={() => {}}
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
        <ConstractorsTable />
        <Pagination />
      </div>
    </div>
  );
};

export default ConstructorsOverview;