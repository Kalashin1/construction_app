import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Button } from "./current-projects";

const ProjectSummaryTable = () => {
  const dataTitles = ['Task', 'Construction Projects', 'Project', 'Designation', 'Due']
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
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Blue</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Blue</td>
          </tr>
        </tbody>

      </table>
      <div className="flex flex-row justify-between px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
        <div className="text-xs+">Footer Note</div>
        <ol className="pagination space-x-1.5">
          <li>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
              </svg>
            </a>
          </li>

          <li>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-150 text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:bg-navy-500 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

const SelectBox = <T extends ReactNode | number,>({
  label,
  value,
  handleChange,
  values
}: {
  label?: string;
  value: number;
  handleChange: Dispatch<SetStateAction<number>>;
  values: T[]
}) => (
  <label className="block">
    <span>{label && label}</span>
    <select
      className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
      value={value}
      onChange={(e) => handleChange(parseFloat(e.target.value))}
    >
      {values.map((v, i) => (<option key={i} value={v as string}>{v}</option>))}
    </select>
  </label>
)

const TableSearch = () => (
  <label className="flex flex-row justify-between items-center">
    <span className="mr-2">Search</span>
    <input
      className="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
      placeholder="Username"
      type="text"
    />
  </label>
)

const ProjectSummary = () => {
  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-3/6 my-4">
        <h3 className="text-md font-bold underline">System Tasks(0)</h3>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="w-1/6">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4">
          <TableSearch />
        </div>

        <div className="ml-4">
          <Button
            action={() => { }}
            label="Excel"
          />
        </div>
      </div>

      <ProjectSummaryTable />
    </div>
  )
}

export default ProjectSummary;