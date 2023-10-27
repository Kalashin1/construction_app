/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Dropdown } from "../../dropdown";
import { useState } from "react";
import { IProject } from "../../../../../../types";

const ProjectListTable = ({
  projects
}: {
  projects: []
}) => {
  const dataTitles = ['Project', 'Status', 'Info', 'Completion', ' ']
  const [showDropdown, updateShowDropdown] = useState(false);
  return (
    <div className="min-w-full overflow-x-auto my-4" onClick={() => updateShowDropdown(false)}>
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
        <tbody className="relative">
          {projects && projects.map((project: IProject, index) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500" key={index}>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link to={`/detail/${project?._id}`} className="text-red-600">MAGGA-{project?._id}</Link>
                <p className="text-xs my-2">({project?.status})</p>
                <p>{project?.building.address}</p>
                <p className="text-xs my-2">Location: {project?.building.location}</p>
                <p className="text-xs my-2">5270.9035.049.00211</p>
                <span className="text-white px-4 rounded bg-gray-700">{project?.external_id}</span>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <span>100% Completed</span>
                <div className="progress my-2 h-2 bg-slate-150 dark:bg-navy-500">
                  <div className="w-9/12 rounded-full bg-warning"></div>
                </div>
                <div className="my-4">
                  <span className="bg-gray-200 py-1 px-2 text-black text-center rounded mx-1">5</span>
                  <span className="bg-warning py-1 px-2 text-white text-center rounded mx-1">0</span>
                  <span className="bg-success py-1 px-2 text-white text-center rounded mx-1">0</span>
                  <span className="bg-red-500 py-1 px-2 text-white text-center rounded mx-1">1</span>
                  <span className="bg-black py-1 px-2 text-white text-center rounded mx-1">50</span>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <p>Start of Execution: {project?.construction_started ? new Date(project?.construction_started).toDateString(): ''}</p>
                <p className="text-sm flex flex-row justify-between">
                  <span>Published:&nbsp;</span>
                  <span>{" "+new Date(project?.createdAt).toDateString()}</span>
                </p>
                <p className="text-sm flex flex-row justify-between">
                  <span>Completed: </span>
                  <span>{project?.completed_at ? new Date(project?.completed_at).toDateString(): ''}</span>
                </p>
                <p className="text-sm flex flex-row justify-between">
                  <span>OrderVolume:</span>
                  <span> 300</span>
                </p>
                <p className="text-sm flex flex-row justify-between">
                  <span>Construction Manager:</span>
                  <span> {project?.construction_manager?.name}</span>
                </p>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <p className="font-bold">vor 38 Tagen</p>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5" onClick={e => e.stopPropagation()}>
                <button
                  className="font-bold"
                  onClick={() => updateShowDropdown(true)}
                >
                  <i className="fas fa-ellipsis-vertical text-xl" />
                </button>
                {showDropdown && (<div className="absolute top-4 right-72" >
                  <Dropdown />
                </div>)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ProjectListTable;