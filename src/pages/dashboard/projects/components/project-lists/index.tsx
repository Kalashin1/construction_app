import { useState } from "react";
import { Button } from "../../../components/current-projects";
import { TableSearch, SelectBox } from "../../../components/project-summary";
import ProjectListTable from "./components/project-list-table";

const ProjectLists = () => {
  const [numRows, setNumRows] = useState(0)
  return (
    <div className="bg-white shadow-md rounded-md my-4 py-6">
      <div className="flex flex-col sm:flex-row justify-between my-4 px-6 ">
        <h3 className="text-xl font-semibold">Projects</h3>

        <div className="mt-3 sm:my-0">
          <Button
            action={() => { }}
            label="timeline"
          />
          <Button
            action={() => { }}
            label="Excel"
          />
          <Button
            action={() => { }}
            label="Filter"
          />
        </div>
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

      <div>
        <ProjectListTable />
      </div>
    </div>
  )
}

export default ProjectLists;