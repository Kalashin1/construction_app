import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const ConstructionSchedule = () => {
  return (
    <div className="w-full">
      <h3 className="my-6 text-lg font-bold">Construction schedule</h3>

      <div className="grid grid-cols-1">
        <ol className="timeline bg-white rounded-md shadow p-6 w-full dark:border-navy-700 dark:bg-navy-800 dark:text-white">
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
              <p className="py-1">Ibrahim Balde changed his avatar photo</p>
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
              <p className="py-1">Ibrahim Balde added new video</p>
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
                  Concrete Floor Completed
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300"
                >3 hours ago</span>
              </div>
              <p className="py-1">
                Ibrahim Balde completed the concrete floor
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
                  Plumbing
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300"
                >a day ago</span>
              </div>
              <p className="py-1">Team completed the Plumbing</p>
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-item-point rounded-full bg-error"></div>
            <div className="timeline-item-content flex-1 pl-4 sm:pl-8">
              <div className="flex flex-col justify-between pb-2 sm:flex-row sm:pb-0">
                <p
                  className="pb-2 font-medium leading-none text-slate-600 dark:text-navy-100 sm:pb-0"
                >
                  Tiling
                </p>
                <span className="text-xs text-slate-400 dark:text-navy-300">a day ago</span>
              </div>
              <p className="py-1">The tiling was completed</p>
            </div>
          </li>
        </ol>
        {/* <div className="bg-white my-4 rounded-md shadow p-6 w-full dark:border-navy-700 dark:bg-navy-800 dark:text-white">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'event 1', start: '2023-11-25', durationEditable: true, overlap: true, end: '2023-11-30' }
            ]}          
          />
        </div> */}
      </div>
    </div>
  )
}

export default ConstructionSchedule;