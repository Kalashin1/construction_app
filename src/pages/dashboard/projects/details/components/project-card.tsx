/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom";
import EuroIcon from "../../../bills/ops/svg/euro";
import { AdminIcon, CaretakerIcon, ContactPersonIcon, HouseIcon } from "../svgs";
import { IProject } from "../../../../../types";
import { Modal } from "../../../profie/components/account-settings";
import { Dispatch, SetStateAction, useCallback, useState, useContext } from "react";
import { TradeIcons } from "../helper";
import { formatter } from "../../../helper/tools";
import { UserAuthContext } from "../../../../../App";

const UserModal = ({
  showModal,
  title,
  name,
  email,
  phone
}: {
  showModal: Dispatch<SetStateAction<boolean>>,
  title: string;
  name: string;
  email: string;
  phone: string;
}) => {
  return (
    <Modal
      closeModal={() => showModal(false)}
      title={title}

    >
      <div className="grid grid-cols-4 gap-x-2 gap-y-4 my-4">
        <h3>Name: </h3> <h3 className="col-span-3">{name}</h3>
        <h3>Email: </h3> <h3 className="col-span-3">{email.slice(1)}</h3>
        <h3>Phone: </h3> <h3 className="col-span-3">{phone}</h3>
      </div>
    </Modal>
  )
}

const ProjectCard = ({ project }: {
  project: IProject
}) => {
  const { user } = useContext(UserAuthContext);
  const getSubTotals = useCallback(() => {
    const keys = Object.keys(project.positions);
    const subTotals: { [key: string]: string, price: string }[] = [];
    for (const key of keys) {
      if (project.positions[key].executor) {
        const positions = project.positions[key].positions;
        const mappedPositions = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)))
        if (mappedPositions[0] && (user?._id === project.positions[key].executor || user?._id === project.contractor)) {
          const subTotal = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)))?.reduce((prev, current) => prev + current);
          subTotals.push({ key, price: formatter.format(subTotal) ?? '0.00' })
        }
      }
    }
    project.extraPositions?.forEach((extraPos, index) => {
      for (const key in extraPos?.positions) {
        if (extraPos.positions[key].executor) {
          const positions = extraPos.positions[key].positions
          const mappedPositions = positions.map((position) => Math.ceil(Number(position?.price)) * Number(position.crowd));
          if (mappedPositions[0] && (user?._id === extraPos.positions[key].executor || user?._id === project.contractor)) {
            const subTotal = positions.map((position) => Math.ceil(Number(position?.price) * Number(position?.crowd)))?.reduce((prev, current) => prev + current);
            if (subTotals[key]) {
              subTotals[key] += subTotal
            } else {
              subTotals.push({ key: `${key} - Addendum-${index}`, price: formatter.format(subTotal) ?? '0.00' })
            }
          }
        }
      }
    })
    return subTotals;
  }, [project.contractor, project.extraPositions, project.positions, user?._id])


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

  const [showConstructionManager, updateShowConstructionManager] = useState(false);
  const [showCareTakerModal, updateShowCareTaker] = useState(false);
  console.log('subtotals', getSubTotals())
  return (
    <div className="bg-white rounded-md py-6 shadow dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="flex flex-col md:flex-row md:justify-between px-6 mb-4">
        <h2>{project.external_id} ({project.status})</h2>

        <div className="md:w-1/2 my-4 md:my-0">
          <div className="progress h-6 bg-slate-150 dark:bg-navy-500">
            <div
              className=" py-1 text-white rounded-full bg-success dark:bg-accent text-right px-4"
              style={{ width: `${getProjectPercentage()}%` }}
            ><p>{getProjectPercentage()}%</p></div>
          </div>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-2/6 p-6">
          <Link to={`https://maps.google.com/?q=${project?.building?.address}`} className="text-blue-400 text-lg font-bold cursor-pointer" target="blank">
            {project?.building.address}
          </Link>
          <h3>Location: {project.building.location}</h3>
          <h3>Rental Status: {project.rentalStatus}</h3>
          <h3 className="font-bold">5270.9035.049.00211</h3>
        </div>
        <div className="p-6 grid grid-cols-2 gap-x-8">
          <span>Stared At</span><span className="font-bold">
            {project.construction_started ? new Date(project.construction_started).toDateString() : ''}
          </span>
          <span>Completion HA</span><span className="font-bold">
            {project.completed_at ? new Date(project.completed_at).toDateString() : ''}
          </span>
          <span>Published</span><span className="font-bold">
            {project.createdAt ? new Date(project.createdAt).toDateString() : ''}
          </span>
          <span>Completed</span><span className="font-bold">
            {project.completed_at ? new Date(project.completed_at).toDateString() : ''}
          </span>
          {/* <span>Vacant since</span><span className="font-bold">August 1, 2022</span> */}
          <span>Rented</span><span className="font-bold">
            {project.rentalStatus}
          </span>
        </div>
        <div className="p-6">
          {/* // TODO: OPEN A MODAL TO SHOW THE USER DETAILS */}
          <div>
            <span className="cursor-pointer flex text-blue-500 flex-row my-2" onClick={() => updateShowConstructionManager(true)}>
              <AdminIcon width={15} color="#000" />
              <h3 className="ml-4 text-blue-500">Construction Manager</h3>
            </span>
            {showConstructionManager && (
              <UserModal
                showModal={updateShowConstructionManager}
                title="Construction Manager"
                email={project?.commissioned_by?.email}
                name={project?.commissioned_by?.name}
                phone={project?.commissioned_by?.phone}
              />)}
          </div >
          <div className="flex flex-row my-2">
            <HouseIcon width={15} color="#000" />
            <h3 className="ml-4 text-blue-500">Inside Sales</h3>
          </div>
          <div className="flex flex-row my-2">
            <span className="cursor-pointer text-blue-500 flex flex-row my-2" onClick={() => updateShowCareTaker(true)}>
              <CaretakerIcon width={15} color="#000" />
              <h3 className="ml-4">Caretaker</h3>
            </span>
            {showCareTakerModal && (
              <UserModal
                showModal={updateShowCareTaker}
                title="Care Taker"
                email={project?.careTaker?.email}
                name={project?.careTaker?.name}
                phone={project?.careTaker?.phone}
              />)}
          </div>
          <div className="flex flex-row my-2">
            <ContactPersonIcon width={15} color="#000" />
            <h3 className="ml-4 text-blue-500">Contact Person</h3>
          </div>
        </div>
      </div>
      <div className="md:w-2/6 p-6">
        <span className="py-1 px-4 bg-gray-950 text-white rounded shadow">MAGGA-{project._id.slice(0, 6)}</span>
        <p className="text-md my-4">MAGGA LV - (as of January 1st, 2023)</p>


        <div className="flex flex-row">
          {project && Object.keys(project.positions).map((position) => {
            if (project?.positions[position]?.positions?.length > 0) return (
              <a href={`#${position}`} className={`${TradeIcons[position]?.bg} ${TradeIcons[position]?.textColor} py-1 px-2 text-black text-center rounded mx-1`}>{project?.positions[position]?.positions?.length}</a>
            )
          })}
        </div>
        {project.extraPositions && (<div className="flex flex-col my-2">
          {project && project.extraPositions.map((extraPosition) => {
            const keys = Object.keys(extraPosition.positions);
            return (
              <div className="flex flex-row my-2">
                {keys.map((key) => (
                  <a href={`#`} className={`${TradeIcons[key]?.bg} ${TradeIcons[key]?.textColor} py-1 px-2 text-black text-center rounded mx-1`}>{extraPosition?.positions[key]?.positions?.length}</a>
                ))}
              </div>
            )
          })}
        </div>)}
      </div>

      <div className="w-full p-6">
        <div className="flex fex-row w-full">
          <div className="bg-gray-950 py-2 px-6 md:px-4 w-1/12">
            <EuroIcon width={20} color="gray" />
          </div>
          <div className="bg-gray-300 w-11/12 grid grid-cols-2 items-center flex-row content-between py-1 px-4">
            {getSubTotals().map((subTotal) => (
              <>
                <h3 className="text-gray-600">{subTotal.key}</h3>
                <h3 className="text-gray-600">{subTotal.price}</h3>
              </>
            ))}
            <h3 className="text-black font-bold">Order Value:</h3>
            <h3 className="text-black font-bold">{getOrderVolume() ?? '0.00'}</h3>
          </div>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="px-4 py-6 flex flex-col">
        {
          project.extraPositions && project.extraPositions.map((extraPos, index) => {
            return (
              <Link key={index} className="text-blue-500 underline font-bold" to={`/addendum-detail/${project._id}/${extraPos.id}`}>
                Addendum - {index + 1}
              </Link>
            )
          })
        }
      </div>

      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <h3>
          <span className="text-black mr-2 dark:text-white">Details:</span>
          <span>{project?.building?.description}</span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <h3>
          <span className="text-black mr-2 dark:text-white">Notes:</span>
          {project?.building.notes.split("\n").map((note, index) => (
            <span key={index}>{note}</span>
          ))}
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <button className="border-2 rounded-md border-gray-800 py-2 px-4 flex flex-row dark:border-gray-50 dark:border-2">
          <i className="fas fa-file-pdf" />
          <span className="ml-4">Download PDF</span>
        </button>
      </div>
    </div >
  );
};

export default ProjectCard;