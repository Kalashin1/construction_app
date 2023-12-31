
import { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SCREENS } from '../../../navigation/constants';
import { UserAuthContext } from '../../../App';

type SidebarHeadingProps = {
  closeSidebar: (...args: unknown[]) => void;
}

const SidebarHeading = ({
  closeSidebar
}: SidebarHeadingProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <p data-header="#right-sidebar-tab-home" className="right-sidebar-header flex shrink-0 items-center space-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <span className="text-xs">25 May, 2022</span>
      </p>
      <button
        onClick={closeSidebar}
        data-close-drawer="" className="btn -mr-1 h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

const Apps = () => {
  const {user} = useContext(UserAuthContext)
  return (
    <div className="mt-2 px-3">
      <h2 className="line-clamp-1 text-xs+ font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Apps
      </h2>
      <div className="mt-3 flex md:grid md:grid-cols-5 space-x-3 md:space-x-0 px-2">
        {user && user.role === 'shop' && (<Link to={`/shop/${user._id}`} className="w-12 text-center md:mb-2">
          <div className="avatar h-10 w-10">
            <div className="is-initial mask is-squircle bg-success text-white">
              <i className='fas fa-cart-shopping' />
            </div>
          </div>
          <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
            Shop
          </p>
        </Link>)}
        
        <Link to={SCREENS.CHAT} className="w-12 text-center">
          <div className="avatar h-10 w-10">
            <div className="is-initial mask is-squircle bg-info text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
          </div>
          <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
            Chat
          </p>
        </Link>
        <Link to={SCREENS.FILE_MANAGER} className="w-12 text-center">
  
          <div className="avatar h-10 w-10">
            <div className="is-initial mask is-squircle bg-error text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
          </div>
          <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
            File Manager
          </p>
        </Link>
        <Link to={SCREENS.MAIL} className="w-12 text-center">
  
          <div className="avatar h-10 w-10">
            <div className="is-initial mask is-squircle bg-secondary text-white">
              <i className='fas fa-envelope' />
            </div>
          </div>
          <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
            Mail
          </p>
        </Link>
        <Link to={SCREENS.KANBAN} className="w-12 text-center">
  
          <div className="avatar h-10 w-10">
            <div className="is-initial mask is-squircle bg-success text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
              </svg>
            </div>
          </div>
          <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-slate-700 dark:text-navy-100">
            Kanban
          </p>
        </Link>
      </div>
    </div>
  )
}

type LeftSidePanelProps = SidebarHeadingProps & {
  children?: ReactNode
};

const LeftSidePanel = ({
  closeSidebar,
  children
}: LeftSidePanelProps) => {
  return (
    <div id="right-sidebar" className="drawer drawer-right">
      <div className="drawer-overlay fixed inset-0 z-[150] bg-slate-900/60" onClick={closeSidebar}></div>
      <div className="drawer-content fixed right-0 top-0 z-[151] h-full w-full sm:w-80">
        <div className="right-sidebar-tab-wrapper w-ful relative flex h-full flex-col bg-white dark:bg-navy-750">
          <SidebarHeading closeSidebar={closeSidebar} />

          <Apps />

          {children}
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;