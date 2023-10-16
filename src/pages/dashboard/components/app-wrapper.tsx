/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import MenuIcon from "../svg/menu";
import SearchIcon from "../svg/search";
import LightModeIcon from "../svg/light";
import NotificationIcon from "../svg/notificaiton";
import SquareIcon from "../svg/square";
import DashboardButtonDropdown from "./dashboard-button-dropdown";
import { FC, useEffect, useState } from 'react';
import { useContext } from "react";
import { SidebarContext, UserAuthContext } from "../../../App";
import NotificationDropdown from "./notification-dropdown";
import { INotification } from "../../../types";
import { getUserNotification, markAllNotificationAsRead } from "../helper/notifications";

type Props = {
  toggleSidebar: (...args: unknown[]) => void
}

<div className="avatar mr-3 hidden h-9 w-9 lg:flex">
  <div className="is-initial rounded-full bg-primary/10 text-info">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
    </svg>
  </div>
</div>

const AppWrapper: FC<Props> = ({
  toggleSidebar
}) => {

  const {
    updateShowLeftSidebar,
    showLeftSidebar,
    updateShowDashboardDropdown,
    showNotifications,
    showDashboardDropdown,
    updateShowNotifications
  } = useContext(SidebarContext);
  const { user } = useContext(UserAuthContext);

  const [notifications, setNotifications] = useState<INotification[] | null>(null)

  const readNotification = async () => {
    const [error,] = await markAllNotificationAsRead(user?._id!);
    if (error) {
      alert('oops something happened');
      console.log(error)
      // setNotifications([])
    }
  }

  const switchMode = () => {
    const html = window.document.querySelector('html');
    html?.classList.toggle('dark')
  }

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
    <nav className="header print:hidden relative z-0" onClick={() => {
      updateShowDashboardDropdown!(false)
      updateShowNotifications!(false)
    }}>
      {/* <!-- App Header  --> */}
      <div
        className="px md:px-8 px-2 relative items-center justify-between flex-row space-x md:space-x-4 flex w-full bg-white dark:bg-navy-700 print:hidden"
      >
        <button className="py-2 px md:p-2 rounded-md" onClick={toggleSidebar}>
          <MenuIcon />
        </button>

        <div className="ml-10 flex flex-row relative items-center justify-between">
          <div>
            <input
              className="py-2 pl-8 rounded-3xl w-5/6 bg-slate-200"
              placeholder="Search Here"
            />
            <div className="absolute left-3 top-3">
              <SearchIcon />
            </div>
          </div>
          <div className="flex md:ml-4 space-x-1 md:space-x-2 flex-row justify-between items-center relative">
            <span className="cursor-pointer" onClick={switchMode}>
              <LightModeIcon />
            </span>
            <span className={`cursor-pointer relative -top-${notifications?.length! > 0 ? 2: 0}`}
              onClick={(e) => {
                e.stopPropagation();
                updateShowNotifications!(true)
                setTimeout(() => {
                  readNotification()
                }, 5000)
              }}
            >
              {notifications?.length! > 0 && (<div style={{ fontSize: '10px' }} className="h-4 w-4 rounded-full bg-red-500 relative left-1.5 text-white flex items-center justify-center font-bold">
                {notifications!.length}
              </div>)}
              {showNotifications && notifications && (<NotificationDropdown notifications={notifications} />)}
              <span className="">
                <NotificationIcon />
              </span>
            </span>
            <span className="cursor-pointer"
              onClick={() => updateShowLeftSidebar!(!showLeftSidebar)}
            >
              <SquareIcon />
            </span>
            <span className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                updateShowDashboardDropdown!(!showDashboardDropdown);
              }}
            >
              <div className="avatar mr-3 hidden h-8 w-8 lg:flex">
                <img
                  className="rounded-full"
                  src={user && user.avatar ? user.avatar : "images/100x100.png"}
                  alt="avatar"
                />
              </div>
            </span>
            {showDashboardDropdown && (<DashboardButtonDropdown />)}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default AppWrapper;