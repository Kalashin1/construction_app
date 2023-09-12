import { useState } from "react";

type SidebarPanelHeaderProps = {
  headerText?: string;
  closeSidebar: (...args: unknown[]) => void
}

const SidebarPanelHeader = ({
  headerText = 'Projects',
  closeSidebar
}: SidebarPanelHeaderProps) => {
  return (
    <div
      className="flex h-10 w-full items-center justify-between pl-4 pr-1 pt-2"
    >

      <div className="avatar mr-3 hidden h-9 w-9 lg:flex">
        <div className="is-initial rounded-full bg-primary/10 text-info">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
      </div>

      <p className="text-lg font-medium tracking-wider text-slate-800 dark:text-navy-100">
        {headerText}
      </p>
      <button
        onClick={closeSidebar}
        className="sidebar-close btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  )
}

type SidebarPanelBodyProps = {
  links: Array<number>
  closeSidebar: (...args: unknown[]) => void;
}

const SubFolder = ({
  subFolders
}: {
  subFolders: unknown[]
}) => (
  <div className="ac-panel pl-4" id="ac-panel-1" role="region" aria-labelledby="ac-trigger-1"
    style={{ transitionDuration: '200ms' }}>
    <ul id="tree1-1">
      {subFolders.map((_, i) => (
        <li key={i}>
          <div tabIndex={0} className="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <div className="mr-1 flex h-5 w-5 items-center justify-center"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
            <span>Web Apps</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

const ListItem = ({
  subFolders
}: {
  subFolders?: unknown[]
}) => {
  const [showSubFolders, updateShowSubFolders] = useState(false)
  return (
    <>
      <div className="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
        {subFolders?.length ? (<button onClick={() => updateShowSubFolders(!showSubFolders)} className="ac-trigger btn mr-1 h-5 w-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" id="ac-trigger-1" role="button" aria-controls="ac-panel-1" aria-disabled="false" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" className="ac-icon h-4.5 w-4.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </button>) : (<span className="w-6"></span>)}
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
        <span>Design</span>
      </div>

      {showSubFolders && subFolders?.length && (<SubFolder subFolders={subFolders} />)}

    </>
  )

}

const SecondList = () => (
  <ul className="space-y-1.5 px-2 font-inter text-xs+ font-medium">
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Shared Folders</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Important</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Recent</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Tags</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        <span>Trash</span>
      </a>
    </li>
  </ul>
)

const SidebarPanelBody = ({
  links,
  closeSidebar
}: SidebarPanelBodyProps) => {
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <div className="mt-4 flex px-4 pb-4 shadow-sm">
        <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
          <span> New File</span>
        </button>
      </div>
      <div className="ac-header mt-4 flex items-center justify-between px-4">
        <span className="text-xs font-medium uppercase">My Files
        </span>
        <div className="-mr-1.5 flex">
          <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <i className="fas fa-search" />
          </button>
          <button className="ac-trigger btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" id="ac-trigger-0" role="button" aria-controls="ac-panel-0" aria-disabled="false" aria-expanded="true">
            <i className="fa fa-chevron-up" />
          </button>
        </div>
      </div>
      <ul
        className="mt-1 space-y-1 px-2 font-inter text-xs+ font-medium"
        id="tree"
      >
        {links.map((_, index) => {
          if (_ % 2 === 0) {
            return (
              <li key={index} className="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100 js-enabled">
                <ListItem subFolders={[0, 1]} />
              </li>
            )
          } else {
            return (
              <li key={index} onClick={closeSidebar} className="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100 js-enabled">
                <ListItem />
              </li>
            )
          }
        })}
        <li>
          <div tabIndex={0} className="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <div className="mr-1 flex h-5 w-5 items-center justify-center"></div>

            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <span>Archives</span>
          </div>
        </li>
      </ul>
      <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      <SecondList />
      <div className="mt-8 fixed bottom-0 w-52 left-20 bg-white">
        <SidebarPanelFooter />
      </div>
    </div>
  )
}


const SidebarPanelFooter = () => (
  <div className="flex flex-col p-4">
    <div className="flex items-center justify-between">
      <p>
        <span className="font-medium text-slate-600 dark:text-navy-100">35GB</span>
        of 1TB
      </p>
      <a href="#" className="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Upgrade</a>
    </div>

    <div className="progress mt-2 h-2 bg-slate-150 dark:bg-navy-500">
      <div className="w-7/12 rounded-full bg-info"></div>
    </div>
  </div>
);



type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps

const SidebarPanel = ({
  headerText,
  links,
  closeSidebar
}: SidebarPanelProps) => {
  return (
    <div className="w-72 py-2 shadow-md absolute" style={{ top: '-.45rem' }}>
      <div
        className="flex h-full w-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
      >
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader headerText={headerText} closeSidebar={closeSidebar} />
        {/* <!-- Sidebar Panel Body --> */}
        <SidebarPanelBody closeSidebar={closeSidebar} links={links} />
        <SidebarPanelFooter />
      </div>
    </div>
  );
};

export default SidebarPanel;