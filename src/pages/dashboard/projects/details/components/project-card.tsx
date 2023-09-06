import EuroIcon from "../../../bills/ops/svg/euro";
import { AdminIcon, CaretakerIcon, ContactPersonIcon, HouseIcon } from "../svgs";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-md py-6 shadow">
      <div className="flex flex-row justify-between px-6 mb-4">
        <h2>MAGGA-34087 (instructed)</h2>

        <div className="w-1/2">
          <div className="progress h-6 bg-slate-150 dark:bg-navy-500">
            <div
              className="w-full py-1 text-white rounded-full bg-success dark:bg-accent text-right px-4"
            ><p>100%</p></div>
          </div>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="w-full flex md:flex-row justify-between">
        <div className="w-2/6 p-6">
          <h3>
            Eppmannsweg 9, 45896 Gelsenkirchen
          </h3>
          <h3>Location: Location: Ground floor on the left, apartment 1</h3>
          <h3>Rental Status: Empty</h3>
          <h3 className="font-bold">5270.9035.049.00211</h3>
        </div>
        <div className="p-6 grid grid-cols-2 gap-x-8">
          <span>Stared At</span><span className="font-bold">June 28, 2023</span>
          <span>Completion HA</span><span className="font-bold">July 27, 2023</span>
          <span>Published</span><span className="font-bold">July 27, 2023</span>
          <span>Completed</span><span className="font-bold">-</span>
          <span>Vacant since</span><span className="font-bold">August 1, 2022</span>
          <span>Rented</span><span className="font-bold">-</span>
        </div>
        <div className="p-6">
          <span className="flex flex-row my-2">
            <AdminIcon width={15} color="#000" />
            <h3 className="ml-4">Dirk Onufrejow</h3>
          </span>
          <span className="flex flex-row my-2">
            <HouseIcon width={15} color="#000" />
            <h3 className="ml-4">Nils Grude</h3>
          </span>
          <span className="flex flex-row my-2">
            <CaretakerIcon width={15} color="#000" />
            <h3 className="ml-4">Armando FERREIRA</h3>
          </span>
          <span className="flex flex-row my-2">
            <ContactPersonIcon width={15} color="#000" />
            <h3 className="ml-4">Armando FERREIRA</h3>
          </span>
        </div>
      </div>
      <div className="w-2/6 p-6">
        <span className="py-1 px-4 bg-gray-950 text-white rounded shadow">LEG-97666-0</span>
        <p className="text-md my-4">LEG LWS LV - (as of January 1st, 2023)</p>

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
          <div className="bg-gray-950 py-2 px-4 w-1/12">
            <EuroIcon width={20} color="gray" />
          </div>
          <div className="bg-gray-300 w-11/12 flex items-center flex-row justify-between py-1 px-4">
            <h3 className="text-black">Order Value:</h3>
            <h3 className="text-black">&euro;15,813.44</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;