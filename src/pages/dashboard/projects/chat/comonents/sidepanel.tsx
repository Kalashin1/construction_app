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
      className="flex h-10 w-full items-center justify-between pl-4 pr-1"
    >

      <p
        className="text-base tracking-wider text-slate-800 dark:text-navy-100"
      >
        <span className="mr-2 pt-8">
          <i className="fas fa-message text-gray-300" />
        </span>
        <span className="text-lg">
          {headerText}
        </span>
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

const ListItem = () => (
  <div className='is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto'>
    <div className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600">
      <div className="avatar h-10 w-10">
        <img className="rounded-full" src="images/100x100.png" alt="avatar" />
        <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"></span>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-baseline justify-between space-x-1.5">
          <p className="line-clamp-1 text-xs+ font-medium text-slate-700 dark:text-navy-100">
            Travis Fuller
          </p>
          <span className="text-tiny+ text-slate-400 dark:text-navy-300">08:05</span>
        </div>
        <div className="mt-1 flex items-center justify-between space-x-1">
          <p className="line-clamp-1 text-xs+ text-slate-400 dark:text-navy-300">
            Dolor set. Prov ident?
          </p>
          <div className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-primary px-1.5 text-tiny+ font-medium leading-none text-white dark:bg-accent">
            4
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SidebarPanelBody = ({
  links,
  closeSidebar
}: SidebarPanelBodyProps) => {
  console.log(links)
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <div className="mt-4 flex px-4 pb-4 shadow-sm">
        <label className="relative mr-1.5 flex">
          <input className="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900" placeholder="Search chats" type="text" />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <i className='fas fa-search' />
          </span>
        </label>

        <button className="btn -mr-2 h-8 w-8 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
          <i className='fas fa-sliders' />
        </button>
      </div>
      <ul
        className="flex flex-1 flex-col px font-inter overflow-auto example"
        style={{ height: '30rem' }}
      >
        {links.map((_, index) => (
          <li key={index} onClick={closeSidebar}>
            <ListItem />
          </li>
        ))}
      </ul>
      <div className="mt-8 fixed bottom-0 w-52 left-20 bg-white dark:border-navy-700 dark:bg-navy-800">
        <SidebarPanelFooter />
      </div>
    </div>
  )
}


const SidebarPanelFooter = () => (
  <div className="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600 w-full">
    <a href="#" data-tooltip="All Chats" className="btn h-9 w-9 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
      <i className='fas fa-message' />
    </a>
    <a href="#" data-tooltip="Users" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
      <i className='fas fa-user' />
    </a>
    <a href="#" data-tooltip="Groups" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
      <i className='fas fa-users' />
    </a>
    <a href="#" data-tooltip="Channels" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
      <i className='fas fa-hashtag' />
    </a>
    <a href="#" data-tooltip="More" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
      <i className='fas fa-ellipsis' />
    </a>
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