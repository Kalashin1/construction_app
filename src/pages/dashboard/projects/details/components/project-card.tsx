import { Link } from "react-router-dom";
import EuroIcon from "../../../bills/ops/svg/euro";
import { AdminIcon, CaretakerIcon, ContactPersonIcon, HouseIcon, PDFIcon } from "../svgs";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-md py-6 shadow">
      <div className="flex flex-col md:flex-row md:justify-between px-6 mb-4">
        <h2>MAGGA-34087 (instructed)</h2>

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
          <Link to={'https://maps.google.com/?q=N0%2019%20Mike%20Amadi%20Street%20Rukpokwu%20Port%20Harcourt%20Rivers,%20Nigeria'} className="text-blue-400 font-bold cursor-pointer" target="blank">
            Musterstraße. XXXXX, Stadt
          </Link>
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
          {/* // TODO: OPEN A MODAL TO SHOW THE USER DETAILS */}
          <Link  className="flex flex-row my-2 cursor" to={'/'}>
            <AdminIcon width={15} color="#000" />
            <h3 className="ml-4">Bauleiter</h3>
          </Link >
          <Link  className="flex flex-row my-2" to={'/'}>
            <HouseIcon width={15} color="#000" />
            <h3 className="ml-4">Innendienst</h3>
          </Link>
          <Link className="flex flex-row my-2" to={'/'}>
            <CaretakerIcon width={15} color="#000" />
            <h3 className="ml-4">Hauswart</h3>
          </Link>
          <Link className="flex flex-row my-2" to={'/'}>
            <ContactPersonIcon width={15} color="#000" />
            <h3 className="ml-4">Ansprechpartner</h3>
          </Link>
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
            <h3 className="text-black">&euro;15,813.44</h3>
          </div>
        </div>
      </div>

      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <h3>
          <span className="text-black mr-2">Details:</span>
          <span>62.77 m², bathroom (3.10 m²), kitchen (4.50 m²), entrance hallway, living room, bedroom, balcony, children's room</span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <h3>
          <span className="text-black mr-2">Noted:</span>
          <span>If central heating system is present:
            Please ensure that after the heating or plumbing work, any lines that have been shut off are reopened and the
            Heating system is filled with water.
            Heating:
            Dismantling, storing and reassembling the radiator is necessary in order to reinstall the HK in the kitchen
            Painter:
            Painting closet in the hallway under the ceiling
            Heating:
            Conversion from gas water heater to electric water heater from kitchen to bathroom
            Tiles:
            Tiles: Remove the mortar bed from tiles/slabs in the hallway, then fill the screed
            Carpenter:
            Equip existing plastic balcony doors with double glazing
            Electric:
            Meter application/new application to the utility company
            Demolition:
            Thin bed tiles/plates remove individual areas 5.0 - 10.0 m² for the kitchen, then
            Knock off the plaster and add plaster Created on June 13th, 2023 2:42 p.m. Page 1 of 8
            Apartment: 5270.9035.049.00211, Eppmannsweg 9, ground floor left, apartment 1, 45896Order date: June 13th, 2023
            Gelsenkirchen</span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <button className="border-2 rounded-md border-gray-800 py-2 px-4 flex flex-row">
          <PDFIcon width={20} color="#000" />
          <span className="ml-4">Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;