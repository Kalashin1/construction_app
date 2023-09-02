const ProjectSummaryTable = () => {
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <th
              className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
            >
              #
            </th>
            <th
              className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
            >
              Name
            </th>
            <th
              className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
            >
              Job
            </th>
            <th
              className="whitespace-nowrap px-3 py-3 font-semibold uppercase text-slate-800 dark:text-navy-100 lg:px-5"
            >
              Favorite Color
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">1</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Cy Ganderton</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Quality Control Specialist
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Blue</td>
          </tr>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">2</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Hart Hagerty</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Desktop Support Technician
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Purple</td>
          </tr>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">3</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Brice Swyre</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Tax Accountant</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
          </tr>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">4</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Marjy Ferencz</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              Office Assistant I
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Crimson</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ProjectSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-3/6">
        <h3>System summary</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>

      <ProjectSummaryTable />
    </div>
  )
}

export default ProjectSummary;