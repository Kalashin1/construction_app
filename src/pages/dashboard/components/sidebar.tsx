import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  AppIcon,
  ComponentsIcon,
  HomeIcon,
  FormIcon,
  Settings,
} from "../svg";
import { SCREENS } from "../../../navigation/constants";

const sidebarLinksArray = [
  {
    text: 'DASHBOARD',
    link: SCREENS.DASHBOARD,
    icon: HomeIcon
  },
  {
    text: 'Shop',
    link: SCREENS.SHOP,
    icon: AppIcon
  },
  {
    text: 'Projects',
    link: SCREENS.PROJECTS,
    icon: FormIcon,
    children: [
      {
        text: 'Shortage Orders',
        link: SCREENS.SHORTAGES,
      },
      {
        text: 'Performance Reports',
        link: SCREENS.PERFORMANCE,
      },
      {
        text: 'Bills',
        link: SCREENS.BILLS,
      },
      {
        text: 'Reports',
        link: SCREENS.PERFORMANCE,
      },
    ]
  },

]


const bottomLinks = [
  {
    text: 'General Contractors',
    link: SCREENS.CONTRACTORS,
    icon: Settings
  },
  {
    text: 'Support',
    link: SCREENS.SUPPORT,
    icon: ComponentsIcon
  },
]

const SidebarLink = ({
  svg,
  link
}: {
  svg: ReactNode;
  link: string
}) => {
  return (
    <Link
      to={link}
      data-tooltip="Dashboards"
      data-placement="right"
      className="tooltip-main-sidebar flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
    >
      {svg}
    </Link>
  )
}

const Sidebar = () => {
  return (
    <div className="sidebar hidden sm:block">
      {/* <!-- Main Sidebar --> */}
      <div className="main-sidebar">
        <div
          className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800"
        >
          {/* <!-- Application Logo --> */}
          <div className="flex pt-4">
            <a href="/">
              <img
                className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                src="images/MAGGA.svg"
                alt="logo"
              />
            </a>
          </div>

          {/* <!-- Main Sections Links --> */}
          <div
            className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6"
          >
            {sidebarLinksArray.map((sidebarLink, index) => (
              <SidebarLink
                key={index}
                link={sidebarLink.link}
                svg={(<sidebarLink.icon />)}
              />
            ))}
          </div>

          <div className="flex flex-col items-center space-y-3 py-3">

            {bottomLinks.map((bottomLink, index) => (
              <SidebarLink
                key={index}
                link={bottomLink.link}
                svg={(<bottomLink.icon />)}
              />
            ))}


          </div>
        </div>
      </div>


    </div>
  )
}

export default Sidebar;