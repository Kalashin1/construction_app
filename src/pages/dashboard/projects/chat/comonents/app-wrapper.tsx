import MenuIcon from "../../../svg/menu";
import { FC } from 'react';

type Props = {
  toggleSidebar: (...args: unknown[]) => void;
  isSidePanelOpen: boolean;
  deviceWidth: number;
}

const AppWrapper: FC<Props> = ({
  toggleSidebar,
  isSidePanelOpen,
  deviceWidth,
}) => {
  const isMobile = deviceWidth < 560;
  return (
    <nav className="header print:hidden relative z-0">
      {/* <!-- App Header  --> */}
      <div
        className="px md:px-8 px-2 relative items-center justify-between flex-row space-x md:space-x-4 flex w-full bg-white dark:bg-navy-700 print:hidden"
      >
        <div className="flex flex-row">
          <button className="py-2 px md:p-2 rounded-md" onClick={toggleSidebar}>
            <MenuIcon />
          </button>

          <div data-toggle="drawer" data-target="#chat-detail" className={`flex cursor-pointer items-center space-x-4 font-inter ${isMobile && isSidePanelOpen ? 'relative left-8': ''}`}>
            <div className="avatar">
              <img className="rounded-full" src="images/100x100.png" alt="avatar" />
            </div>
            <div>
              <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
                Konnor Guzman
              </p>
              <p className="mt-0.5 text-xs">Last seen recently</p>
            </div>
          </div>
        </div>

        <div className="ml-10 flex flex-row relative items-center justify-between">
          <div className="flex md:ml-4 space-x-4 pr-4 flex-row justify-between items-center relative">
            <span className="cursor-pointer hidden md:block">
              <i className="fas fa-phone text-xl" />
            </span>
            <span className="cursor-pointer mr-6 md:mr-0">
              <i className="fas fa-search text-xl" />
            </span>
            <span className="cursor-pointer hidden md:block">
              <i className="fas fa-table-columns text-xl" />
            </span>
            <span className="cursor-pointer">
              <i className="fas fa-ellipsis-vertical text-xl" />
            </span>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default AppWrapper;