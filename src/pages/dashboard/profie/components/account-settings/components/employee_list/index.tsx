const EmployeeList = () => {
  return (
    <div className="card mt-3">
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="is-hoverable w-full text-left">
          <tbody>
            <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <div className="avatar flex h-10 w-10">
                  <img className="mask is-squircle" src="images/100x100.png" alt="avatar" />
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">
                John Doe
              </td>
              
            </tr>
            <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <div className="avatar flex h-10 w-10">
                  <img className="mask is-squircle" src="images/100x100.png" alt="avatar" />
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">
                John Doe
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default EmployeeList;