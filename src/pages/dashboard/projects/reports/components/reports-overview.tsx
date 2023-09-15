import SettingsIcon from "../svg/settings";

const ReportsTable = () => {
  const dataTitles = ['Designation', 'Short Description', 'Created']
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
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Cy Ganderton</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Quality Control Specialist
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Nov 20, 2023</td>
            
          </tr>
        </tbody>

      </table>
    </div>
  );
};


const ReportsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-accent">
      <div className="my-4 pt-4 px-6 items-center flex flex-row justify-between">
        <h3 className="text-md font-bold">All Reports</h3>

        <div className="border rounded-sm p-2">
          <SettingsIcon 
            width={20}
            color='#000'
          />
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
     
      <div>
        <ReportsTable />
      </div>
    </div>
  )
}

export default ReportsOverview;