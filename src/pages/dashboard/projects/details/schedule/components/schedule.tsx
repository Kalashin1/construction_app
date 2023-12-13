import { useNavigate, useParams } from "react-router-dom";
import { ConstructionScheduleType, IProject } from "../../../../../../types";
import { useEffect, useState } from "react";
import { getProject } from "../../../../helper/project";
import { NotificationComponent, notify } from "../../../../components/notification/toast";
import { TradeIcons } from "../../helper";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { Button } from "../../../../components/current-projects";
import { updateProject } from "../../../helper";

const ScheduleProject = () => {
  const { id } = useParams()
  const navigate = useNavigate();

  const [project, setProject] = useState<IProject>()
  const [constructionSchedule, updateConstructionSchedule] = useState<ConstructionScheduleType[]>([])

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(id as string);
      if (error) {
        notify(
          (<NotificationComponent message="Error getting project" />),
          { className: "bg-red-500 text-white" }
        );
        console.log(error)
      }

      if (_project) {
        setProject(_project);
      }
    }

    setUp()
  }, [id]);

  const changeConstructionSchedule = async () => {
    const [error, payload] = await updateProject(id!, {sheduleByTrade: constructionSchedule});
    if (error) {
      notify(
        (<NotificationComponent message="Error updatign construction schedule" />),
        { className: 'bg-red-500 text-white'}
      );
      console.log(error)
    }

    if (payload) {
      navigate(`/detail/${id}`)
    }
  }

  return (
    <div className="bg-white rounded-sm shadow-md dark:bg-navy-800">
      <div className="px-6 py-4">
        <i className="fas fa-user mr-2" />
        <span>{project?.external_id} - </span>
        Main Order Items - New Addendum
      </div>
      <div className="my-4 h-px  bg-slate-200 dark:bg-navy-500"></div>
      <div className="grid grid-cols-3">
        <div className="mx-4">
          <h2 className="my-4">Positions</h2>
          {project && Object.keys(project?.positions).map((key, index) => (
            <div className={`px-4 py-2 border ${TradeIcons[key].border} border-2 rounded-md my-4`} key={index}>
              <p>{key}</p>
            </div>
          ))}
        </div>

        <div className="mx-4">
          <h2 className="my-4">Start Date</h2>
          {project && Object.keys(project?.positions).map((_key, index) => (
            <div className={`px-4 py-2 border border-gray-300 rounded-md my-4`} key={index}>
              <Flatpickr
                data-enable-time
                value={constructionSchedule.find((consSche) => consSche.name === _key)?.startDate}
                onChange={([date]) => {
                  const schedule = constructionSchedule.find((consSche) => consSche.name === _key)
                  const filteredShedule = constructionSchedule.filter((consSche) => consSche.name !== _key)
                  const updatedSchedule = [...filteredShedule, { startDate: date, endDate: schedule?.endDate, name: _key }]
                  updateConstructionSchedule(updatedSchedule)
                }}
              />
            </div>
          ))}
        </div>
        <div className="mx-4">
          <h2 className="my-4">End Date</h2>
          {project && Object.keys(project?.positions).map((_key, index) => (
            <div className={`px-4 py-2 border border-gray-300 rounded-md my-4`} key={index}>
              <Flatpickr
                data-enable-time
                value={constructionSchedule.find((consSche) => consSche.name === _key)?.endDate}
                onChange={([date]) => {
                  const schedule = constructionSchedule.find((consSche) => consSche.name === _key)
                  const filteredShedule = constructionSchedule.filter((consSche) => consSche.name !== _key)
                  const updatedSchedule = [...filteredShedule, { startDate: schedule?.startDate, name: _key, endDate: date }]
                  updateConstructionSchedule(updatedSchedule)
                }}
              />
            </div>
          ))}
        </div>

      </div>

      <div className="my-4 flex justify-center mb-8">
        <Button
          label="Update Construction Schedule"
          action={changeConstructionSchedule}
          color="bg-gray-50 btn-lg text-gray-900 dark:bg-navy-900 dark:text-gray-50 mb-8"
        />
      </div>
    </div>
  )
}

export default ScheduleProject;