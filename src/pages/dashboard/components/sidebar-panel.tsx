import {Link} from 'react-router-dom';

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
      className="flex h-18 w-full items-center justify-between pl-4 pr-1"
    >
      <p
        className="text-base tracking-wider text-slate-800 dark:text-navy-100"
      >
        {headerText}
      </p>
      <button
        onClick={closeSidebar}
        className="sidebar-close btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"
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
  links: Array<{ text: string, link: string }>
}

const SidebarPanelBody = ({
  links
}: SidebarPanelBodyProps) => {
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <ul className="flex flex-1 flex-col px-4 font-inter">
        {links.map((link, index) => (  
          <li key={index}>
            <Link
              to={link.link}
              data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
              data-active-class="font-medium text-primary dark:text-accent-light"
              className="nav-link flex py-2 text-xs+ tracking-wide outline-none transition-colors duration-300 ease-in-out"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps

const SidebarPanel = ({
  headerText,
  links,
  closeSidebar
}: SidebarPanelProps) => {
  return (
    <div className="w-72 py-2 shadow-md absolute" style={{top: '-.45rem'}}>
      <div
        className="flex h-full w-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
      >
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader headerText={headerText} closeSidebar={closeSidebar} />
        {/* <!-- Sidebar Panel Body --> */}
        <SidebarPanelBody links={links} />
      </div>
    </div>
  );
};

export default SidebarPanel;