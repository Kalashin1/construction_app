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
        <div className="is-initial rounded-full bg-secondary/10 text-secondary dark:bg-secondary-light/10 dark:text-secondary-light">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
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
  links: Array<{ icon: string, text: string }>
  secondLinks?: Array<{ icon: string, text: string }>
  closeSidebar: (...args: unknown[]) => void;
}

const ListItem = ({
  icon,
  text,
}: {
  icon: string;
  text: string
}) => (
  <a className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600 items-center" href="#">
    <i className={`${icon}`} />
    <span>{text}</span>
  </a>
)

const SidebarPanelBody = ({
  links,
  secondLinks,
  closeSidebar
}: SidebarPanelBodyProps) => {
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <div className="mt-4 flex px-4 pb-4 shadow-sm">
        <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
          <i className="fas fa-plus" />
          <span>Add Product</span>
        </button>
      </div>
      <div className="ac-header mt-4 flex items-center justify-between px-4">
        <span className="text-xs font-medium uppercase">channels
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
      <div style={{ height: '30rem' }}>
        <ul
          className="mt-1 space-y-1.5 px-2 font-inter text-xs+ font-medium"
        >
          {links.map(({ icon, text }, index) => (
            <li key={index} onClick={closeSidebar} className="my-1">
              <ListItem icon={icon} text={text} />
            </li>
          ))}
        </ul>
        <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
        <ul
          className="mt-1 space-y-1.5 px-2 font-inter text-xs+ font-medium"
        >
          {secondLinks && secondLinks.map(({ icon, text }, index) => (
            <li key={index} onClick={closeSidebar} className="my-1">
              <ListItem icon={icon} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}





type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps

const SidebarPanel = ({
  headerText,
  links,
  secondLinks,
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
        <SidebarPanelBody closeSidebar={closeSidebar} links={links} secondLinks={secondLinks} />
      </div>
    </div>
  );
};

export default SidebarPanel;