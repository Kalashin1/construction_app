// import { Link } from "react-router-dom";
import { INotification } from "../../../types";


type NotificationCardProps = INotification
const NotificationCard = ({
  shortText,
  type,
  createdAt
}: NotificationCardProps) => (
  <div className="bg-white px-4 py-2 flex flex-col">
    <h3 className="font-bold mb-2">{type}</h3>
    {/* <Link to={'/'} className="text-sm">LWS-34352</Link>
    <Link className="text-xs text-red-900" to={'/'}>LWS Plus GmbH</Link> */}
    <p className="text-xs text-red-900 text-ellipsis">{shortText}</p>
    <p className="text-xs font-light">{new Date(createdAt!).toDateString()}</p>
  </div>
)


const NotificationDropdown = ({
  notifications
}:{ notifications: INotification[]}) => {
  return (
    <div className="bg-gray-400 rounded-md shadow-md w-64 absolute top-12 -left-44">
      <div className="p-4">
        <h3 className="text-white font-bold">Notifications</h3>
      </div>
      {notifications && notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          {...notification}
        />
      ))}

    </div>
  )
}

export default NotificationDropdown;