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
        <div className="is-initial rounded-full bg-info/10 text-info">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5293 18L20.9999 8.40002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 13.2L7.23529 18L17.8235 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
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

const ListItem = () => (
  <a className="group flex space-x-2 rounded-lg p-2 items-center tracking-wide outline-none transition-all dark:bg-accent-light/10 dark:text-accent-light" href="#">
    <i className="fas fa-plus" />
    <span>My Day</span>
  </a>
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
        <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
          <span> New Task </span>
        </button>
      </div>
      <ul
        className="flex flex-1 flex-col px-2 font-inter overflow-auto example"
        style={{ height: '30rem' }}
      >
        {links.map((_, index) => (
          <li key={index} onClick={closeSidebar} className="my-1">
            <ListItem />
          </li>
        ))}
      </ul>
      <div className="mt-8 fixed bottom-0 w-52 left-20 bg-white">
        <SidebarPanelFooter />
      </div>
    </div>
  )
}


const SidebarPanelFooter = () => (
  <div className="flex shrink-0 justify-between px-1.5 py-1">
  <a href="apps-mail.html" data-tooltip="Mail App" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <i className="far fa-envelope" />
  </a>
  <a href="apps-kanban.html" data-tooltip="Kanban App" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <i className="fas fa-book-open" />
  </a>
  <a href="apps-chat.html" data-tooltip="Chat App" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <i className="far fa-comments" />
  </a>
  <a href="apps-pos.html" data-tooltip="POS App" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <i className="fas fa-camera" />
  </a>
  <a href="apps-filemanager.html" data-tooltip="File Manager App" className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
    <i className="far fa-copy" />
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