/* eslint-disable @typescript-eslint/ban-ts-comment */
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
import { Calendar, EventWrapperProps, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import { Link } from "react-router-dom";
import { getProject } from '../../../helper/project';
import { NotificationComponent, notify } from '../../../components/notification/toast';
import { IProject } from '../../../../../types';
import { FC, useEffect, useState } from 'react';
import { TradeIcons } from '../helper';

type Event = {
  id: number,
  title: string,
  allDay: boolean,
  start: Date,
  end: Date,
}

const localizer = momentLocalizer(moment);

const EventWrapper: FC<EventWrapperProps<Event>> = ({ event }) => (
  <div className={`${TradeIcons[event['title']].bg} ${TradeIcons[event['title']].textColor} rounded-md px-4 py mb-1 mx-2`}>
    {event.title}
  </div>
)

const ConstructionSchedule = ({
  project_id
}: {
  project_id: string
}) => {
  const [project, setProject] = useState<IProject>();
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const setUp = async () => {
      const [error, payload] = await getProject(project_id);
      if (error) {
        notify(
          (<NotificationComponent message='Error fetching projects' />),
          {
            className: 'bg-red-500 text-white'
          }
        )
        console.log(error);
      }

      if (payload) {
        setProject(payload);
        const _events = payload.sheduleByTrade.map((trade, index) => ({ id: index, title: trade.name!, start: new Date(trade.startDate!), end: new Date(trade.endDate!), allDay: true }))
        setEvents(_events)
      }
    }

    setUp()
  }, [project_id])

  console.log('project', project?.sheduleByTrade);
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center">
        <h3 className="my-6 text-lg font-bold">Construction schedule</h3>
        <Link to={`/project/schedule/${project_id}`}>
          <i className="fas fa-edit" />
        </Link>
      </div>

      <div className="grid grid-cols-1">
        {/* <ol className="timeline bg-white rounded-md shadow p-6 w-full dark:border-navy-700 dark:bg-navy-800 dark:text-white">
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
        </ol> */}
        <div className="bg-white my-4 rounded-md shadow p-6 w-full dark:border-navy-700 dark:bg-navy-800 dark:text-white">
          {events && (<Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            components={{
              eventWrapper: (Props) => (<EventWrapper {...Props} />)
            }}
            style={{ height: 500 }}
          />)}
        </div>
      </div>
    </div>
  )
}

export default ConstructionSchedule;