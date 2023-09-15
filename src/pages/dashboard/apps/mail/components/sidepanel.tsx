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
      <div className="flex flex-row space-x-1 items-center mt-2">
        <div className="avatar mr-3 hidden h-9 w-9 lg:flex">
          <div className="is-initial rounded-full bg-warning/10 text-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
        </div>
        <p className="text-lg font-medium tracking-wider text-slate-800 dark:text-navy-100">
          {headerText}
        </p>
      </div>

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


const FirstList = () => (
  <ul className="mt-4 space-y-1.5 px-2 font-inter text-xs+ font-medium">
    <li>
      <a className="group flex justify-between space-x-2 rounded-lg bg-primary/10 p-2 tracking-wide text-primary outline-none transition-all dark:bg-accent-light/10 dark:text-accent-light" href="#">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
          </svg>
          <span>Inbox</span>
        </div>
        <span className="text-primary dark:text-accent-light">2</span>
      </a>
    </li>
    <li>
      <a className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="m8.625 3.37.353-.661-.353.661Zm10.49 5.602-.354.662.353-.662Zm-.005 6.082.352.662-.352-.662ZM8.626 20.632l-.352-.662.352.662Zm-4.461-4.08-.718-.216.718.216Zm-.007-9.107-.718.215.718-.215Zm4.713 5.323a.75.75 0 0 0 0-1.5v1.5Zm-.6-8.736 10.49 5.602.707-1.323-10.49-5.602-.707 1.323Zm10.487 10.36L8.274 19.97l.704 1.324 10.484-5.578-.704-1.324ZM4.883 16.768l1.364-4.534-1.437-.432-1.363 4.534 1.436.432Zm1.364-4.965-1.37-4.574-1.437.43 1.37 4.574 1.437-.43Zm-.719.965h3.343v-1.5H5.528v1.5Zm2.746 7.202c-.95.505-1.94.289-2.643-.353-.706-.646-1.091-1.708-.748-2.85l-1.436-.431c-.519 1.724.064 3.374 1.172 4.388 1.113 1.017 2.783 1.409 4.36.57l-.705-1.324ZM18.76 9.634c1.82.972 1.818 3.79-.003 4.758l.704 1.325c2.882-1.534 2.884-5.869.006-7.406l-.707 1.323ZM8.978 2.709c-1.575-.841-3.246-.453-4.36.564C3.507 4.285 2.922 5.935 3.44 7.66l1.437-.43c-.343-1.143.044-2.204.751-2.85.703-.64 1.694-.855 2.643-.348l.707-1.323Z"></path>
          </svg>

          <span className="text-slate-800 dark:text-navy-100">Sent</span>
        </div>
      </a>
    </li>
    <li>
      <a className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>

          <span className="text-slate-800 dark:text-navy-100">Draft</span>
        </div>
      </a>
    </li>
    <li>
      <a className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>

          <span className="text-slate-800 dark:text-navy-100">Span</span>
        </div>
        <span className="text-primary dark:text-accent-light">4</span>
      </a>
    </li>
    <li>
      <a className="group flex justify-between space-x-2 rounded-lg p-2 tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20" href="#">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>

          <span>Trash</span>
        </div>
      </a>
    </li>
  </ul>
)

const SecondList = () => (
  <ul className="mt-1 space-y-1.5 px-2 font-inter text-xs+ font-medium">
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Important</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Saved</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Archive</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-secondary dark:text-secondary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Work</span>
      </a>
    </li>
    <li>
      <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Personal</span>
      </a>
    </li>
  </ul>
)

const SidebarPanelBody = () => {
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
          <span> New Message</span>
        </button>
      </div>
      <div className="md:h-96">
        <FirstList />
        <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
        <div className="ac-header mt-4 flex items-center justify-between px-4">
          <span className="text-xs font-medium uppercase">Labels
          </span>
          <div className="-mr-1.5 flex">
            <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
              <i className="fas fa-search" />
            </button>
            <button className="ac-trigger btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" id="ac-trigger-0" role="button" aria-controls="ac-panel-0" aria-disabled="false" aria-expanded="true">
              <i className="fa fa-ellipsis-vertical" />
            </button>
          </div>
        </div>
        <div>
          <SecondList />
        </div>
      </div>
      <div className="mt-8 fixed bottom-0 w-52 left-20">
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
        <SidebarPanelBody />
        <SidebarPanelFooter />
      </div>
    </div>
  );
};

export default SidebarPanel;