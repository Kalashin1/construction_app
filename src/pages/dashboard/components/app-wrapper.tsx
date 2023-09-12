import MenuIcon from "../svg/menu";
import SearchIcon from "../svg/search";
import LightModeIcon from "../svg/light";
import NotificationIcon from "../svg/notificaiton";
import SquareIcon from "../svg/square";
import DashboardButtonDropdown from "./dashboard-button-dropdown";
import {FC, useState} from 'react';
import { useContext } from "react";
import { SidebarContext } from "../../../App";
import NotificationDropdown from "./notification-dropdown";

type Props = {
  toggleSidebar: (...args: unknown[]) => void
}

const AppWrapper: FC<Props> = ({
  toggleSidebar
}) => {
  const [showDashboardDropdown, updateShowDashboardDropdown] = useState(false);
  const [showNotifications, updateShowNotifications] = useState(false);
  const {
    updateShowLeftSidebar,
    showLeftSidebar
  } = useContext(SidebarContext);
  return (
    <nav className="header print:hidden relative z-0">
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
            <span className="cursor-pointer">
              <LightModeIcon />
            </span>
            <span className="cursor-pointer"
              onClick={() => updateShowNotifications(!showNotifications)}
            >
              <NotificationIcon />
            </span>
            {showNotifications && (<NotificationDropdown />)}
            <span className="cursor-pointer" 
              onClick={() => updateShowDashboardDropdown(!showDashboardDropdown)}
            >
              <i className="fas fa-user-alt" />
            </span>
            {showDashboardDropdown && (<DashboardButtonDropdown />)}
            <span className="cursor-pointer" 
              onClick={() => updateShowLeftSidebar!(!showLeftSidebar)}
            >
              <SquareIcon />
            </span>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default AppWrapper;