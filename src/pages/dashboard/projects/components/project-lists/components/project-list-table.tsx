import { Link } from "react-router-dom";
import { SCREENS } from "../../../../../../navigation/constants";

const ProjectListTable = () => {
  const dataTitles = ['Project', 'Status', 'Info', 'Completion', 'Action']
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto my-4">
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
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <Link to={SCREENS.DETAIL} className="text-red-600">MAGGA-34087</Link>
              <p className="text-xs my-2">(beauftragt)</p>
              <p>Eppmannsweg 9, 45896 Gelsenkirchen</p>
              <p className="text-xs my-2">Lage: Erdgeschoss links, Wohnung 1 Vermietungstatus: leer</p>
              <p className="text-xs my-2">5270.9035.049.00211</p>
              <span className="text-white px-4 rounded bg-gray-700">MAGGA-97666-0</span>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <span>100% Completed</span>
              <div className="progress my-2 h-2 bg-slate-150 dark:bg-navy-500">
                <div className="w-9/12 rounded-full bg-warning"></div>
              </div>
              <div className="my-4">
                <span className="bg-gray-200 py-1 px-2 text-black text-center rounded mx-1">5</span>
                <span className="bg-warning py-1 px-2 text-white text-center rounded mx-1">0</span>
                <span className="bg-success py-1 px-2 text-white text-center rounded mx-1">0</span>
                <span className="bg-red-500 py-1 px-2 text-white text-center rounded mx-1">1</span>
                <span className="bg-black py-1 px-2 text-white text-center rounded mx-1">50</span>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p>Ausführungsbeginn:</p>
              <p className="text-sm flex flex-row justify-between">
                <span>Veröffentlicht:</span>
                <span>28.06.2023</span>
              </p>
              <p className="text-sm flex flex-row justify-between">
                <span>Abgeschlossen:</span>
                <span>14.06.2023</span>
              </p>
              <p className="text-sm flex flex-row justify-between">
                <span>Bauleiter:</span>
                <span>Ibrahim Balde</span>
              </p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">vor 38 Tagen</p>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <p className="font-bold">
                <i className="fas fa-chevron-down" />
              </p>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default ProjectListTable;