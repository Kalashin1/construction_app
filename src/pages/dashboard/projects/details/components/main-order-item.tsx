/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ProjectPositions } from "../../../../../types";
import { Dropdown } from "./dropdown";
import { TradeIcons } from "../helper";
import { ChevronRightIcon, FileIcon, PlusIcon } from "../svgs";

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
}) => (
  <div className={`${TradeIcons[position?.tradeName!]?.border} rounded-md border-2 m-4 py-6 grid grid-cols-4`}>
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
          <button className="px-2">
            <i className="fas fa-ellipsis-vertical" />
          </button>
        </div>
      </div>
      <MainOrderDropdown />
    </div>
    <div className="p-4 col-span-4 md:col-span-1 my-4">
      <p className="font-bold">{position?.shortText}</p>
    </div>
    <div className="col-span-4 md:col-span-3 p-4">
      <p>{position?.longText ?? ''}</p>
    </div>
  </div>
)

const MainOrderDropdown = () => (
  <div className="absolute left-40 top-12">
    <Dropdown>
      <ul>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            </svg>

            <span> Assign Executor(s)</span></a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>

            <span>Pause Project</span></a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>

            <span>Archive Project</span></a>
        </li>
      </ul>
    </Dropdown>
  </div>
)

const MainOrderItem = ({ positions }: {
  positions: ProjectPositions[]
}) => {
  const requiredPositions = [
    //*Elektro*//
    '06.08.01.0050', 
    '06.08.01.0200',
    "06.08.01.0010",
    "06.08.01.0015",
    "06.08.01.0020",
    "06.08.01.0030",
    "06.08.01.0035",
    "06.08.01.0040",
    "06.08.01.0050",
    "06.08.01.0060",
    "06.08.01.0065",
    "06.08.01.0070",
    "06.08.01.0080",
    "06.08.01.0090",
    "06.08.01.0200",

    // Plumbing//
    "06.01.01.0010",
    "06.01.01.0015",
    "06.01.01.0020",
    "06.01.01.0025",
    "06.01.01.0050",
    "06.01.01.0060",
    "06.01.01.0090",
    "06.01.01.0100",
    "06.01.02.0010",
    "06.01.02.0185",
    "06.01.02.0190",
    "06.01.01.0140",

    //Tiles//
    "06.04.01.0010",
    "06.04.01.0020",
    "06.04.01.0030",
    "06.04.01.0040",
    "06.04.01.0050",
    "06.04.01.0060",
    "06.04.01.0070",
    "06.04.01.0080",
    "06.04.01.0090",
    "06.04.01.0100",
    "06.04.01.0110",
    "06.04.02.0020",
    "06.04.02.0030",
    "06.04.02.0040",
    "06.04.02.0050",
    "06.04.02.0060",
    "06.04.02.0070",
    "06.04.02.0080",
    "06.04.02.0090",
    "06.04.02.0100",
    "06.04.02.0110",

    //others//
    "06.09.01.0010", 
    //"06.09.01.0010", 




    
  ]
  console.log(requiredPositions)
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