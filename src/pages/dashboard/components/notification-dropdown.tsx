/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
// import { Link } from "react-router-dom";
import { UserAuthContext } from "../../../App";
import { INotification } from "../../../types";
import { markAllNotificationAsRead, readNotification } from "../helper/notifications";
import {Dispatch, SetStateAction, useContext} from 'react';


type NotificationCardProps = INotification & {
  setNotification: Dispatch<SetStateAction<INotification[]>>
}

const MarkAsRead = async (id: string, setNotification: Dispatch<SetStateAction<INotification[]>>) => {
  const [, notifications] = await readNotification(id)
  setNotification(notifications)
  
}
const NotificationCard = ({
  shortText,
  type,
  _id,
  createdAt,
  setNotification
}: NotificationCardProps) => (
  <div className="bg-white px-4 py-2 flex flex-col">
    <h3 className="font-bold mb-2">{type}</h3>
    {/* <Link to={'/'} className="text-sm">LWS-34352</Link>
    <Link className="text-xs text-red-900" to={'/'}>LWS Plus GmbH</Link> */}
    <div className="flex flex-row justify-between">
    <p className="text-xs text-red-900 text-ellipsis">{shortText}</p>
    <button onClick={() => MarkAsRead(_id, setNotification)}>
      <i className="fas fa-times text-red-500" />
    </button>
    </div>
    <p className="text-xs font-light">{new Date(createdAt!).toDateString()}</p>
  </div>
)


const NotificationDropdown = ({
  notifications,
  setNotification
}:{ notifications: INotification[], setNotification: Dispatch<SetStateAction<INotification[]>>}) => {
  const {user} = useContext(UserAuthContext)
  const readAlllNotification = async () => {
    const [error,] = await markAllNotificationAsRead(user?._id!);
    if (error) {
      alert('oops something happened');
      console.log(error)
    }
  }
  return (
    <div className="bg-gray-400 rounded-md shadow-md w-64 absolute top-12 -left-44">
      <div className="p-4">
        <h3 className="text-white font-bold">Notifications</h3>
      </div>
      {notifications && notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          {...notification}
          setNotification={setNotification}
        />
      ))}
      <div className="flex items-center justify-center p-4">
      <button onClick={readAlllNotification}>
        <i className="fas fa-trash text-white" />
      </button>
        
      </div>
    </div>
  )
}

export default NotificationDropdown;