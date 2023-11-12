/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { IProject } from "../../../../../../types";
import { useCallback, useEffect, useState, useContext } from "react";
import AssignExecutorModal from "./assing-executor";
import { TradeIcons } from '../../../details/helper';
import { formatter } from "../../../../helper/tools";
import { UserAuthContext } from "../../../../../../App";


const ProjectListTable = ({
  projects
}: {
  projects: IProject[]
}) => {
  const dataTitles = ['Project', 'Status', 'Info', 'Completion', ' ']

  return (
    <div className="min-w-full overflow-x-auto my-4">
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
              <ProjectTableRow project={project} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProjectTableRow = ({ project }: {
  project: IProject
}) => {
  const [showModal, updateShowModal] = useState(false);
  const [showAssignButton, updateShowAssignButton] = useState(false);
  const {user} = useContext(UserAuthContext)
  useEffect(() => {
    const keys = Object.keys(project.positions);
    const notAssigned: string[] = [];
    for (const key of keys) {
      if ((!project?.positions[key]?.executor) || (project.positions[key].accepted = false))
          notAssigned.push(key)
      }
  if (notAssigned.length > 1) {
    updateShowAssignButton(true);
  }
  }, [project.positions])

  // const Subtotals = useMemo(() => {
  //   const keys = Object.keys(project.positions);
  //   const subTotals: { [key: string]: string, price: string }[] = [];
  //   for (const key of keys) {
  //     if (project.positions[key].executor) {
  //       const positions = project.positions[key].positions;
  //       const mappedPositions = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)))
  //       if (mappedPositions[0]) {
  //         const subTotal = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)))?.reduce((prev, current) => prev + current);
  //         subTotals.push({ key, price: formatter.format(subTotal) ?? '0.00' })
  //       }
  //     }
  //   }
  //   return subTotals;
  // }, [project.positions])
  
  const getOrderVolume = useCallback(() => {
    const keys = Object.keys(project.positions);
    let price = 0;
    for (const key of keys) {
      if (project.positions[key].executor) {
        const positions = project.positions[key].positions;
        // @ts-ignore
        const mappedTotal = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)));
        if (mappedTotal[0] && (user?._id === project.positions[key].executor || user?._id === project.contractor)) {
          price += mappedTotal.reduce((prev, current) => prev + current);
        }
      }
    }
    return formatter.format(price);
  }, [project.contractor, project.positions, user?._id])
  return (
    <>
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
          {project && Object.keys(project.positions).map((position) => {
            if (project?.positions[position]?.positions?.length > 0) return (
              <span className={`${TradeIcons[position]?.bg} ${TradeIcons[position]?.textColor} py-1 px-2 text-black text-center rounded mx-1`}>{project?.positions[position]?.positions?.length}</span>
            )
          })}
          {/* <span classsName="bg-black py-1 px-2 text-white text-center rounded mx-1">50</span> */}
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <p>Start of Execution: {project?.construction_started ? new Date(project?.construction_started).toDateString() : ''}</p>
        <p className="text-sm flex flex-row justify-between">
          <span>Published:&nbsp;</span>
          <span>{" " + new Date(project?.createdAt).toDateString()}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>Completed: </span>
          <span>{project?.completed_at ? new Date(project?.completed_at).toDateString() : ''}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>OrderVolume:</span>
          <span> {getOrderVolume() ?? '0.00'}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>Construction Manager:</span>
          <span> {project?.construction_manager?.name}</span>
        </p>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <p className="font-bold">vor 38 Tagen</p>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        {showAssignButton && user?.role === 'contractor' && (<button onClick={() => updateShowModal(true)} className="border rounded-lg px-4 py-1 border-black">
          Assign
        </button>)}

        {showModal && project && (<AssignExecutorModal positions={project.positions} project_id={project?._id} closeModal={() => updateShowModal(false)} />)}
      </td>
    </>
  )
}

export default ProjectListTable;