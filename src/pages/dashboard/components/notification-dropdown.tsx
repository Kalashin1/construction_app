import { Link } from "react-router-dom";

const NotificationCard = () => (
  <div className="bg-white px-4 py-2 flex flex-col">
    <h3 className="font-bold mb-2">Möllmannsweg 9</h3>
    <Link to={'/'} className="text-sm">LWS-34352</Link>
    <Link className="text-xs text-red-900" to={'/'}>LWS Plus GmbH</Link>
    <p className="text-xs text-red-900 text-ellipsis">What's with the E Check here. No se...</p>
    <p className="text-xs font-light">Aug 21, 2023 2:48 p.m</p>
  </div>
)


const NotificationDropdown = () => {
  return (
    <div className="bg-gray-400 rounded-md shadow-md w-64 absolute top-12 -left-44">
      <div className="p-4">
        <h3 className="text-white font-bold">Notifications</h3>
      </div>
      <NotificationCard />

    </div>
  )
}

export default NotificationDropdown;