const ConstructionSchedule = () => {
  return (
    <div className="w-full">
      <h3 className="my-6 text-lg font-bold">Construction schedule</h3>
      <ol className="timeline bg-white rounded-md shadow p-6 w-full">
        <li className="timeline-item">
          <div
            className="timeline-item-point rounded-full bg-slate-300 dark:bg-navy-400"
          ></div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p
                className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
              >
                Electricity
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300"
              >7th September - 9th September</span>
            </div>
            <p className="py-1">John Doe changed his avatar photo</p>
          </div>
        </li>
        <li className="timeline-item">
          <div
            className="timeline-item-point rounded-full bg-primary dark:bg-accent"
          ></div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p
                className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
              >
                Plumbing
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300"
              >10th September - 14th September</span>
            </div>
            <p className="py-1">Mores Clarke added new video</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full bg-success">
            <span
              className="inline-flex h-full w-full animate-ping rounded-full bg-success opacity-80"
            ></span>
          </div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p
                className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
              >
                Design Completed
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300"
              >3 hours ago</span>
            </div>
            <p className="py-1">
              Robert Nolan completed the design of the CRM application
            </p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full bg-warning"></div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p
                className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
              >
                ER Diagram
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300"
              >a day ago</span>
            </div>
            <p className="py-1">Team completed the ER diagram app</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full bg-error"></div>
          <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
            <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
              <p
                className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
              >
                Weekly Report
              </p>
              <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
            </div>
            <p className="py-1">The weekly report was uploaded</p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export default ConstructionSchedule;