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

export const ProjectDetailCard = () => (
  <div className="border-green-700 border-2 m-4 py-6 grid grid-cols-4">
    <div className="flex flex-row items-center justify-between md:col-span-1 col-span-4 px-4 md:px-2">
      <span className="bg-gray-900 py-1 px-3 rounded-md text-white">
        1
      </span>
      <span className="bg-green-700 px-2 py-1 text-small text-white rounded-md">
        06.08.01.0050
      </span>
      <span>
        <FileIcon width={15} color="green" />
      </span>
      <h3 className="font-bold">Billed</h3>
    </div>
    <div className="md:col-span-3 col-span-4 my-2">
      <div className="flex flex-col md:flex-row justify-between md:ml-8 md:items-center px-4">
        <h3 className="mr-2 md:mr-0 mt-2 font-bold">MAGGA</h3>
        <h3 className="font-bold">Apartment</h3>
        <div className="flex flex-row my-2 justify-between">
          <h3>psh&nbsp;|&nbsp;</h3>
          <h3>&nbsp;1.00&nbsp;|&nbsp;</h3>
          <h3>00.00 €&nbsp;|&nbsp;</h3>
          <h3>&nbsp;00.00 €</h3>
        </div>
      </div>
    </div>
    <div className="p-4 col-span-4 md:col-span-1 my-4">
      <p className="font-bold">3 room apartment with kitchen-hall-bathroom 60-70 m² / new installation (service cluster x8.1)</p>
    </div>
    <div className="col-span-4 md:col-span-3 p-4">
      <p>3-room apartment with kitchen-hall-bathroom 60-70 m² / new installation / new electrical installation of all rooms including UV uP/aP with machines and surge protection. Delivery and functional installation of all installations and installation devices for the entire apartment, including connections for the instantaneous water heater, under-sink device and exhaust fan. Installations for balconies/terraces, laundry rooms and tenant basements are paid for separately. Executions in accordance with the manufacturer's list and quality manual, in finished work, including disposal of the resulting debris.</p>
    </div>
  </div>
)

const MainOrderItem = () => {
  return (
    <div className="my-12">
      <div className="bg-white shadow-md rounded py-6">
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
        <ProjectDetailCard />
      </div>
    </div>
  );
};

export default MainOrderItem;