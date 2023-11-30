import { ProjectPositions } from "../../../../../../types";
import { Link } from "react-router-dom";
import { formatter } from "../../../../helper/tools";
import { Dispatch, SetStateAction } from "react";

const AddendumTable = ({
  addendums,
  updateAddendums
}: {
  addendums: ProjectPositions[]
  updateAddendums: Dispatch<SetStateAction<ProjectPositions[]>>
}) => {
  const dataTitles = ['External_Id', 'Crowd', 'Unit', 'Price', 'short Description', ''];
  
  const removeaddendum = (id: string) => {
    updateAddendums(addendums.filter((addendum) => addendum._id !== id));
  };
  console.log(addendums)

  return (
    <div className="min-w-full overflow-x-auto my-10">
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
        <tbody>
          {addendums && addendums.map((addendum, index) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500" key={index}>
            
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {addendum?.external_id}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="underline text-blue-500" to={``}>
                  {addendum?.crowd}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="underline text-blue-500" to={``}>
                  {addendum.units}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {formatter.format(Number(addendum?.price))}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {addendum?.shortText}
              </td>
             
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                  className="btn h-9 w-9 rounded-full bg-green-300 p-0 font-medium text-white hover:bg-green-600 focus:bg-info/20 active:bg-info/25 mr-2">
                  <i className="fas fa-edit" />
                </button>
                <button
                  className="btn h-9 w-9 rounded-full bg-red-300 p-0 font-medium text-white hover:bg-red-600 
                  focus:bg-danger/20 active:bg-info/25"
                  onClick={() => removeaddendum(addendum._id as string)}
                >
                  <i className="fas fa-times" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddendumTable;