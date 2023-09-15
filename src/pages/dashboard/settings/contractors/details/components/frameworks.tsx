const Frameworks = () => {
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between">
        <h3>
          <span className="mr-2">
            <i className="fas fa-divide" />
          </span>
          <span className="text-md">
            Framework and project contracts
          </span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <ul className="list-disc">

        <li className="grid grid-cols-12 items-center px-8 py-4">

          <span>
            <i className="fas fa-check text-green-700 text-2xl" />
          </span>
          <div className="col-span-6 col-start-3">
            <h3>LEG LWS LV - (Status: 01.01.2023) - Other (i)</h3>
            <h5 className="text-xs">Valid since: January 23, 2023</h5>
          </div>

          <span className="col-start-12">
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Frameworks;