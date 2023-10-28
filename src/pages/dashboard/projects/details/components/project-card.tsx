import { Link } from "react-router-dom";
import EuroIcon from "../../../bills/ops/svg/euro";
import { AdminIcon, CaretakerIcon, ContactPersonIcon, HouseIcon } from "../svgs";
import { IProject } from "../../../../../types";
import { Modal } from "../../../profie/components/account-settings";
import { Dispatch, SetStateAction, useState } from "react";

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
  console.log(project)
  const [showConstructionManager, updateShowConstructionManager] = useState(false);
  const [showCareTakerModal, updateShowCareTaker] = useState(false);
  return (
    <div className="bg-white rounded-md py-6 shadow dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="flex flex-col md:flex-row md:justify-between px-6 mb-4">
        <h2>MAGGA-{project._id.slice(0, 6)} ({project.status})</h2>

        <div className="md:w-1/2 my-4 md:my-0">
          <div className="progress h-6 bg-slate-150 dark:bg-navy-500">
            <div
              className="w-full py-1 text-white rounded-full bg-success dark:bg-accent text-right px-4"
            ><p>100%</p></div>
          </div>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-2/6 p-6">
          { /* // TODO: This should link to the house address https://maps.google.com/?q=address */}
          <Link to={`https://maps.google.com/?q=${project?.building?.address}`} className="text-blue-400 text-xs cursor-pointer" target="blank">
            {project.client.split('.').join(', ')}
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
            <span className="cursor-pointer flex flex-row my-2" onClick={() => updateShowConstructionManager(true)}>
              <AdminIcon width={15} color="#000" />
              <h3 className="ml-4">Construction Manager</h3>
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
            <h3 className="ml-4">Inside Sales</h3>
          </div>
          <div className="flex flex-row my-2">
            <span className="cursor-pointer flex flex-row my-2" onClick={() => updateShowCareTaker(true)}>
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
            <h3 className="ml-4">Contact Person</h3>
          </div>
        </div>
      </div>
      <div className="md:w-2/6 p-6">
        <span className="py-1 px-4 bg-gray-950 text-white rounded shadow">MAGGA-97666-0</span>
        <p className="text-md my-4">MAGGA LV - (as of January 1st, 2023)</p>

        <div className="flex flex-row">
          <span className="bg-gray-200 py-1 px-2 text-black text-center rounded mx-1">5</span>
          <span className="bg-warning py-1 px-2 text-white text-center rounded mx-1">0</span>
          <span className="bg-success py-1 px-2 text-white text-center rounded mx-1">0</span>
          <span className="bg-red-500 py-1 px-2 text-white text-center rounded mx-1">1</span>
          <span className="bg-black py-1 px-2 text-white text-center rounded mx-1">50</span>
        </div>
      </div>

      <div className="w-full p-6">
        <div className="flex fex-row w-full">
          <div className="bg-gray-950 py-2 px-6 md:px-4 w-1/12">
            <EuroIcon width={20} color="gray" />
          </div>
          <div className="bg-gray-300 w-11/12 flex items-center flex-row justify-between py-1 px-4">
            <h3 className="text-black">Order Value:</h3>
            <h3 className="text-black">&euro;00.00</h3>
          </div>
        </div>
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
          <span className="text-black mr-2 dark:text-white">Noted:</span>
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
    </div>
  );
};

export default ProjectCard;