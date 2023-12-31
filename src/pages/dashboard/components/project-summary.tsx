import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Button } from "./current-projects";
import Pagination from "./pagination";
import { TASK_STATUS, Todo } from "../../../types";
import { Link } from "react-router-dom";
import { addDays } from "../helper/dashboard";
import { UserAuthContext } from "../../../App";

const ProjectSummaryTable = ({
  todos
}: {
  todos: Todo[]
}) => {
  const dataTitles = ['Task', 'Project', 'Status', 'Due']
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
          {todos && todos.map((todo, index) => (
            <tr key={index} className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{index + 1}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
               {todo.type === "PROJECT" &&(<Link className="text-blue-500 underline" to={`/detail/${todo.object_id}`}>
                  {todo.object_id.slice(0, 6)}
                </Link>)}
               {todo.type === "DRAFT" &&(<Link className="text-blue-500 underline" to={`/draft/${todo.object_id}`}>
                  {todo.object_id.slice(0, 6)}
                </Link>)}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{todo.status}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{addDays(todo.createdAt!, 3)}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export const SelectBox = <T extends ReactNode | number,>({
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

export const TableSearch = () => (
  <label className="flex flex-row justify-between items-center">
    <span className="mr-2">Search</span>
    <input
      className="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
      placeholder="Project"
      type="text"
    />
  </label>
)

const ProjectSummary = ({
  todos
}: {
  todos: Todo[]
}) => {
  const [numRows, setNumRows] = useState(0);
  const {user} = useContext(UserAuthContext);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        {user && (<Link to={`/todo/${user._id}`} className="text-md font-bold underline">
          System Tasks ({todos.filter((todo) => todo.status === TASK_STATUS[0]).length})
        </Link>)}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/4 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 md:w-2/5 w-4/5">
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
        <ProjectSummaryTable todos={todos.filter((todo) => todo.status === TASK_STATUS[0])} />
        <Pagination />
      </div>
    </div>
  )
}

export default ProjectSummary;