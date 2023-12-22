/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../../App";
import { INotification } from "../../../types";
import { getUserNotification } from "../helper/notifications";

const CheckBox = ({
  label
}: {
  label?: string
}) => {
  const [checked, updateChecked] = useState(false)
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        checked={checked}
        onChange={e => updateChecked(e.target.checked)}
        className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:bg-slate-500 checked:border-slate-500 hover:border-slate-500 focus:border-slate-500 dark:border-navy-400 dark:checked:bg-navy-400"
        type="checkbox"
      />
      {label && (<p>{label}</p>)}
    </label>
  )
}

const ProjectInfoChild = ({
  notification
}: {
  notification: INotification
}) => (
  <div className="flex flex-row justify-between my-6">
    <div className="flex justify-between">
      <div className="w-1 h-6 bg-secondary mr-4"></div>
      <div>
        <h3>{new Date(notification?.createdAt!).toDateString()}</h3>

        <p>{notification.shortText}</p>
        {notification.objectId && notification.type === "PROJECT" && (
          <Link to={`/detail/${notification.objectId}`}>(MAGGA-{notification.objectId?.slice(0, 6)})</Link>
        )}
        {notification.objectId && notification.type === "DRAFT" && (
          <Link to={`/draft/${notification.objectId}`}>(MAGGA-{notification.objectId?.slice(0, 6)})</Link>
        )}
      </div>
    </div>
    <CheckBox />
  </div>
)

const ProjectInformation = () => {

  const { user } = useContext(UserAuthContext)

  const [notifications, setNotifications] = useState<INotification[] | null>(null)


  useEffect(() => {
    const setUp = async () => {
      if (user) {
        console.log("user", user)
        const [error, _notifications] = await getUserNotification(user?._id!);
        if (error) {
          console.log(error)
        }

        if (_notifications) {
          setNotifications(_notifications);
          console.log("notifications", _notifications);
        }
      }
    }

    setUp()
  }, [user])

  return (
    <div
      className="rounded-sm shadow-md bg-white py-2 lg:w-2/4 my-4 md:my-0 lg:mx-4 dark:border-navy-700 dark:bg-navy-800 dark:text-white"
    >
      <div className="flex flex-row justify-between px-2">
        <h3 className="text-md font-bold mt-2 mb-2">Info</h3>

        <CheckBox label="All Information checked" />
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="mx-4 my-4">
        {notifications && notifications.slice(0, 4).map((notificaiton, index) => (
          <ProjectInfoChild
            key={index}
            notification={notificaiton}
          />
        ))}
      </div>

    </div>
  );
};

export default ProjectInformation;