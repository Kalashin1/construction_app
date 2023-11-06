/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Dispatch, SetStateAction, useState, useContext, useEffect } from "react";
import { Button } from "../../../components/current-projects";
import { TableSearch, SelectBox } from "../../../components/project-summary";
import ProjectListTable from "./components/project-list-table";
import { UserAuthContext } from "../../../../../App";
import { getAllContractorProjects, getAllExecutorProjects, getAllProjects } from "../../../helper/project";
import { IProject } from "../../../../../types";

const ProjectLists = ({
  updateShowFilter,
  showFilter
}: {
  updateShowFilter: Dispatch<SetStateAction<boolean>>;
  showFilter: boolean
}) => {
  const [numRows, setNumRows] = useState(0);
  const {user} = useContext(UserAuthContext);
  const [projects, setProjects] = useState<IProject[]|null>(null)

  useEffect(() => {
    const setUp = async () => {
      let error, _projects;

      switch (user?.role) {
        case 'admin':
          [error, _projects] = await getAllProjects();
          break;
        case 'contractor': 
          [error, _projects] = await getAllContractorProjects(user._id?.toString()!);
          break;
        case 'executor':
          [error, _projects] =await getAllExecutorProjects(user._id?.toString()!);
          break;
        default:
          break;
      }

      if (error) {
        alert('error fetching projects');
        console.log(error)
      }

      if (_projects) {
        console.log(_projects);
        setProjects(_projects);
      }
    }

    setUp()
  }, [user?._id, user?.role])
  return (
    <div className="bg-white shadow-md rounded-md my-4 py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
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
          {showFilter ?
            (<Button
              action={() => {updateShowFilter(false)}}
              label="All Projects"
            />): (<Button
              action={() => {updateShowFilter(true)}}
              label="Filter"
            />)
          }
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
        { projects && (<ProjectListTable projects={projects.filter((pro) => pro !== null) as IProject[]} />)}
        <div>
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
      </div>
    </div>
  )
}

export default ProjectLists;