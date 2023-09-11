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

type LeftSidePanelProps = SidebarHeadingProps;

const LeftSidePanel = ({
  closeSidebar
}: LeftSidePanelProps) => {
  return (
    <div id="right-sidebar" className="drawer drawer-right">
      <div className="drawer-overlay fixed inset-0 z-[150] bg-slate-900/60"></div>
      <div className="drawer-content fixed right-0 top-0 z-[151] h-full w-full sm:w-80">
        <div className="right-sidebar-tab-wrapper w-ful relative flex h-full flex-col bg-white dark:bg-navy-750">
          <SidebarHeading closeSidebar={closeSidebar} />
        </div>
      </div>
    </div>
  );
};

export default LeftSidePanel;