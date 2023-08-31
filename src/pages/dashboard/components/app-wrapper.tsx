import MenuIcon from "../svg/menu";
import SearchIcon from "../svg/search";
import LightModeIcon from "../svg/light";
import NotificationIcon from "../svg/notificaiton";
import SquareIcon from "../svg/square";
import {FC} from 'react';

type Props = {
  toggleSidebar: (...args: unknown[]) => void
}

const AppWrapper: FC<Props> = ({
  toggleSidebar
}) => {
  return (
    <nav className="header print:hidden relative z-0">
      {/* <!-- App Header  --> */}
      <div
        className="px-2 md:px-8 relative items-center justify-between flex-row space-x-4 flex w-full bg-white dark:bg-navy-700 print:hidden"
      >
        <button className="focus:border-2 p-2 rounded-md" onClick={toggleSidebar}>
          <MenuIcon />
        </button>

        <div className="flex flex-row relative items-center justify-between">
          <div>
            <input
              className="py-2 pl-8 rounded-3xl bg-slate-200"
              placeholder="Search Here"
            />
            <div className="absolute left-3 top-3">
              <SearchIcon />
            </div>
          </div>
          <div className="flex ml-4 space-x-2 flex-row justify-between items-center">
            <LightModeIcon />
         
            <NotificationIcon />
          
            <SquareIcon />
          </div>
        </div>

      </div>
    </nav>
  )
}

export default AppWrapper;