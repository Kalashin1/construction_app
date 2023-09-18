const DocumentsTable = () => {
  const dataTitles = ['Documents', 'Mandatory', 'Uploaded On', 'Expiry Date', '']
  return (
    <div className="min-w-full overflow-x-scroll my-4">
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
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">Proof Of Ownership</td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <span>
                <i className="fas fa-check" />
              </span>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              10/10/2023
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              10/10/2025
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <button className="border-2 rounded border-gray-800 px-6 py-1">
                Upload Document
              </button>
            </td>
            
          </tr>
        </tbody>

      </table>
    </div>
  );
};


const DocumentsOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        <h3 className="text-md font-bold">
          <span className="mr-4">
            <i className="fas fa-file-lines text-md" />  
          </span>  
          Documents Provided
        </h3>
      </div>

      
      <div>
        <DocumentsTable />
      </div>
    </div>
  )
}

export default DocumentsOverview;