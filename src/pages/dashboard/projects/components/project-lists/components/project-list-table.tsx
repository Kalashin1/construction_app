/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { IProject, ProjectPositions } from "../../../../../../types";
import { useCallback, useEffect, useState, useContext } from "react";
import AssignExecutorModal from "./assing-executor";
import { TradeIcons } from '../../../details/helper';
import { formatter } from "../../../../helper/tools";
import { UserAuthContext } from "../../../../../../App";
import { getDaysDifference } from "../../../helper";


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
              <ProjectTableRow project={project} index={index} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProjectTableRow = ({ project, index }: {
  project: IProject,
  index: number
}) => {
  const [showModal, updateShowModal] = useState(false);
  const [showAssignButton, updateShowAssignButton] = useState(false);
  const { user } = useContext(UserAuthContext)
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
        const mappedTotal = positions.map((position) => Math.ceil(parseFloat(position?.price) * parseFloat(position?.crowd)));
        if (mappedTotal[0]) {
          price += Math.ceil(mappedTotal.reduce((prev, current) => prev + current));
        }
      }
    }

    project.extraPositions?.forEach((extraPos) => {
      for (const key in extraPos.positions) {
        if (extraPos?.positions[key]?.executor) {
          const positions = extraPos?.positions[key].positions;
          // @ts-ignore
          const mappedTotal = positions.map((position) => Math.ceil(position?.price) * parseFloat(position?.crowd));
          if (mappedTotal[0]) {
            price += Math.ceil(mappedTotal.reduce((prev, current) => prev + current));
          }
        }
      }
    })
    console.log('orderVolumePrice', price)
    return formatter.format(price);
  }, [project.extraPositions, project.positions])

  const getProjectPercentage = useCallback(() => {
    const keys = Object.keys(project.positions);
    let price = 0;
    let completedPrices = 0;
    for (const key of keys) {
      if (project.positions[key].executor) {
        const positions = project.positions[key].positions;

        // @ts-ignore
        const mappedTotal = positions.map((position) => {
          if (
            (project.positions[key].executor === user?._id || user?._id === project.contractor) &&
            position.price &&
            (
              position.status === "BILLED" ||
              position.billed ||
              position.status === "COMPLETED"
            )) {
            completedPrices += Math.ceil(Number(position?.price) * Number(position?.crowd));
          }
          if ((project.positions[key].executor === user?._id || user?._id === project.contractor) && position.price)
            return Math.ceil(Number(position?.price) * Number(position?.crowd))
        });
        if (mappedTotal[0] && (user?._id === project.positions[key].executor || user?._id === project.contractor)) {
          for (const _price of mappedTotal) {
            if (_price)
              price += _price;
          }
        }
        console.log(mappedTotal)
      }
    }
    project.extraPositions?.forEach((extraPos) => {
      for (const key in extraPos.positions) {
        if (extraPos?.positions[key]?.executor) {
          console.log(extraPos.positions)
          const positions = extraPos?.positions[key].positions;

          // @ts-ignore
          const mappedTotal = positions.map((position) => {
            if (
              (extraPos?.positions[key].executor === user?._id || user?._id === project.contractor) &&
              position.price &&
              (
                position.status === "BILLED" ||
                position.billed ||
                position.status === "COMPLETED"
              )) {
              completedPrices += Math.ceil(Number(position?.price) * Number(position?.crowd));
            }
            if ((extraPos?.positions[key].executor === user?._id || user?._id === project.contractor) && position.price)
              return Math.ceil(Number(position?.price) * Number(position?.crowd))
          });
          if (mappedTotal[0] && (user?._id === extraPos?.positions[key].executor || user?._id === project.contractor)) {
            for (const _price of mappedTotal) {
              if (_price)
                price += _price;
            }
          }
          console.log(mappedTotal)
        }
      }
    })
    console.log('completed prices', completedPrices)
    console.log('price', price);
    return (completedPrices / price * (100)).toFixed(0);
  }, [project.contractor, project.extraPositions, project.positions, user?._id])
  return (
    <>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <Link to={`/detail/${project?._id}`} className="text-red-600">
        MAGGA-{String(index + 1).length === 1 && `00${index + 1}`} {String(index + 1).length === 2 && `0${index + 1}`}
        </Link>
        <p className="text-xs my-2">({project?.status})</p>
        <p>{project?.building.address}</p>
        <p className="text-xs my-2">Location: {project?.building.location}</p>
        <p className="text-xs my-2">5270.9035.049.00211</p>
        <span className="text-white px-4 rounded bg-gray-700">{project?.external_id}</span>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <span>{getProjectPercentage()}% Completed</span>
        <div className="progress my-2 h-2 bg-slate-150 dark:bg-navy-500">
          <div className={`rounded-full ${Number(getProjectPercentage()) < 100 && 'bg-warning' }  ${Number(getProjectPercentage()) < 0 && 'bg-white'}  ${Number(getProjectPercentage()) === 100 && 'bg-success'}`} style={{ width: `${Number(getProjectPercentage())}%` }}></div>
        </div>
        <div className="my-4">
          {project && Object.keys(project.positions).map((position) => {
            if (project?.positions[position]?.positions?.length > 0) return (
              <span className={`${TradeIcons[position]?.bg} ${TradeIcons[position]?.textColor} py-1 px-2 text-black text-center rounded mx-1`}>{project?.positions[position]?.positions?.length}</span>
            )
          })}
        </div>
        {project.extraPositions && (
          <div className="flex flex-col my-2">
            {/* loop through the extra positions */}
            {project && project.extraPositions.map((extraPosition) => {
              // get all the trades on the addendum
              const keys = Object.keys(extraPosition.positions);
              // create a data structure to track the positions on the trade on the addendum
              const positions: { amount: number, positions: ProjectPositions[] }[] = [];
              // loop throgh all the keys (trades ) on the addendum
              keys.forEach((key) => {
                extraPosition.positions[key].positions.forEach((pos) => {
                  const filtered = extraPosition.positions[key].positions?.filter((_pos) => _pos.tradeName === pos.tradeName)
                  if (!(positions.find((pos) => pos.positions[0].tradeName === filtered[0].tradeName))) {
                    positions.push({ amount: filtered.length, positions: filtered })
                  }
                })
              })
              return (
                <div className="flex flex-row my-2">
                  {positions.map(({ amount, positions }) => {

                    return (
                      <a href={`#`} className={`${TradeIcons[positions[0].tradeName!]?.bg} ${TradeIcons[positions[0].tradeName!]?.textColor} py-1 px-2 text-black text-center rounded mx-1`}>
                        {amount}
                      </a>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <p>Start of Execution: {project?.construction_started ? new Date(project?.construction_started).toDateString() : ''}</p>
        <p className="text-sm flex flex-row justify-between">
          <span>End Of Execution:&nbsp;</span>
          <span>{" " + new Date(project?.dueDate).toDateString()}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>Completed: </span>
          <span>{new Date(project?.dueDate).toDateString()}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>OrderVolume:</span>
          <span> {getOrderVolume() ?? '0.00'}</span>
        </p>
        <p className="text-sm flex flex-row justify-between">
          <span>Construction Manager:</span>
          <span>{project?.commissioned_by?.name}</span>
        </p>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <p className="font-bold">
          {getDaysDifference(project.dueDate) > 1 ? `${getDaysDifference(project.dueDate)} Days Left` : `${String(getDaysDifference(project.dueDate)).slice(1)} Days Ago`}
        </p>
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