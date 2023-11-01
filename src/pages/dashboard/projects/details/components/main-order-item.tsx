/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ProjectPositions } from "../../../../../types";
import { Dropdown } from "./dropdown";
import { TradeIcons } from "../helper";
import { ChevronRightIcon, FileIcon, PlusIcon } from "../svgs";
import { useState } from "react";
import { updateProjectPosition } from "../../helper";
import { notify, NotificationComponent } from "../../../components/notification/toast";

const Button = () => (
  <button className="py-2 px-4 font-bold border border-gray-800 rounded-md shadow-md flex flex-row items-center justify-between">
    <span>
      <PlusIcon width={10} color="#000" />
    </span>
    <span className="ml-2">
      Add Adenum
    </span>
  </button>
)

export const ProjectDetailCard = ({ position, index }: {
  position: ProjectPositions;
  index: number;
}) => {
  const [showDropdown, updateShowDropDown] = useState(false);


  return (
    <div className={`${TradeIcons[position?.tradeName!]?.border} rounded-md border-2 m-4 py-6 grid grid-cols-4`} onClick={() => updateShowDropDown(false)}>
      <div className="flex flex-row items-center justify-between md:col-span-1 col-span-4 px-4 md:px-2">
        <span className="bg-gray-900 py-1 px-3 rounded-md text-white">
          {index}
        </span>
        <span className={`${TradeIcons[position?.tradeName!]?.bg} mx-2 px-2 py-1 text-small text-white rounded-md`}>
          {position?.external_id}
        </span>
        <span>
          <FileIcon width={15} color={`${TradeIcons[position?.tradeName!]?.fileColor}`} />
        </span>
        <h3 className="font-bold ml-2">{position?.status}</h3>
      </div>
      <div className="md:col-span-3 col-span-4 my-2 relative">
        <div className="flex flex-col md:flex-row justify-between md:ml-8 md:items-center px-4">
          <h3 className="mr-2 md:mr-0 mt-2 md:mt-0 font-bold">MAGGA</h3>
          <h3 className="font-bold">Apartment</h3>
          <div className="flex flex-row my-2 justify-between">
            <h3>{position?.units}&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{position?.crowd}&nbsp;|&nbsp;</h3>
            <h3>{position?.price ?? '0.00'} €&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{(Number(position?.crowd) * position?.price!).toFixed(2) ?? '0.00'} €</h3>
            <button className="px-2" onClick={(e) => {
              updateShowDropDown(!showDropdown)
              e.stopPropagation()
            }}>
              <i className="fas fa-ellipsis-vertical" />
            </button>
          </div>
        </div>
        {showDropdown && (<MainOrderDropdown />)}
      </div>
      <div className="p-4 col-span-4 md:col-span-1 my-4">
        <p className="font-bold">{position?.shortText}</p>
      </div>
      <div className="col-span-4 md:col-span-3 p-4">
        <p>{position?.longText ?? ''}</p>
      </div>
    </div>
  )
}

const updatePosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string
) => {
  const [error, payload] = await updateProjectPosition(
    project_id,
    position,
    trade_id
  );

  if (error) {
    notify(
      (<NotificationComponent message={'oops something happened!'} />),
      {
        className: `bg-red-700 font-bold text-white`,
        closeOnClick: true,
      }
    )
    console.log(error)
  }

  if (payload) {
    notify(
      (<NotificationComponent message={'Position updated successfully!'} />),
      {
        className: `bg-green-700 font-bold text-white`,
        closeOnClick: true,
      }
    );
    console.log(payload);
  }
}

const mainOrderLinks = [
  { text: 'Completed', action: updatePosition }, 
  { text: 'Not Feasible', action: updatePosition },
  { text: 'Upload Document', action: updatePosition }, 
  { text: 'Bill', action: updatePosition }
];

const MainOrderDropdown = () => (
  <div className="absolute right-6 top-8">
    <Dropdown>
      <ul>
        {mainOrderLinks.map((link) => (
          <li>
            <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">

              <span> {link.text}</span></a>
          </li>
        ))}

      </ul>
    </Dropdown>
  </div>
)

const MainOrderItem = ({ positions }: {
  positions: ProjectPositions[]
}) => {
  return (
    <div className="my-12">
      <div className="bg-white shadow-md rounded py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 px-4 md:px-6">
          <div className="flex flex-row items-center justify-evenly w-3/6 md:w-1/6 my-4">
            <ChevronRightIcon width={10} color="#000" />
            <h3 className="font-bold">Main order items</h3>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {positions && positions.map((position, index) => (
          <ProjectDetailCard position={position} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default MainOrderItem;