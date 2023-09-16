/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppIcon,
  ComponentsIcon,
  HomeIcon,
  FormIcon,
  Settings,
  ElementsIcons
} from "../svg";
import { SCREENS } from "../../../navigation/constants";
import SidebarPanel from "./sidebar-panel";
import { motion, AnimatePresence } from 'framer-motion';


const sidebarLinksArray = [
  {
    text: 'DASHBOARD',
    link: SCREENS.DASHBOARD,
    icon: HomeIcon,
    children: [
      {
        text: 'Home',
        link: SCREENS.DASHBOARD,
        parent: SCREENS.DASHBOARD
      },
    ]
  },
  {
    text: 'APPS',
    link: SCREENS.APPS,
    icon: AppIcon,
    children: [
      {
        text: 'Chat',
        link: SCREENS.CHAT,
        parent: SCREENS.APPS
      },
      {
        text: 'Todo',
        link: SCREENS.TODO,
        parent: SCREENS.APPS
      },
      {
        text: 'Shop',
        link: SCREENS.SHOP,
        parent: SCREENS.APPS
      },
      {
        text: 'Mail',
        link: SCREENS.MAIL,
        parent: SCREENS.APPS
      },
      {
        text: 'File Manager',
        link: SCREENS.FILE_MANAGER,
        parent: SCREENS.APPS
      },
      {
        text: 'Kanban Board',
        link: SCREENS.KANBAN,
        parent: SCREENS.APPS
      },
    ]
  },
  {
    text: 'Projects Summary',
    link: SCREENS.PROJECTS,
    icon: FormIcon,
    children: [

      {
        text: 'Projects',
        link: SCREENS.PROJECTS,
        parent: SCREENS.PROJECTS
      },
      {
        text: 'Create Project',
        link: SCREENS.CREATE_PROJECT,
        parent: SCREENS.PROJECTS
      },
      {
        text: 'Shortage Orders',
        link: SCREENS.SHORTAGES,
        parent: SCREENS.PROJECTS
      },
      {
        text: 'Performance Reports',
        link: SCREENS.PERFORMANCE,
        parent: SCREENS.PROJECTS
      },
      {
        text: 'Reports',
        link: SCREENS.REPORTS,
        parent: SCREENS.PROJECTS
      },
    ]
  },
  {
    text: 'Bills',
    link: SCREENS.BILLS,
    icon: ElementsIcons,
    children: [{
      text: 'OPS Performance',
      link: SCREENS.OPS_ADMINISTRATION,
      parent: SCREENS.BILLS
    }]
  },

]


const bottomLinks = [
  {
    text: 'General Contractors',
    link: SCREENS.CONTRACTORS,
    icon: ComponentsIcon
  },
  {
    text: 'Support',
    link: SCREENS.SUPPORT,
    icon: Settings
  },
]

const SidebarLink = ({
  svg,
  link
}: {
  svg: ReactNode;
  link: string
}) => {
  const location = useLocation()
  return (
    <Link
      to={link}
      data-tooltip="Dashboards"
      data-placement="right"
      className={`tooltip-main-sidebar ${location.pathname.includes(link) ? 'bg-primary/10 dark:bg-navy-600': ''} flex h-11 w-11 items-center justify-center rounded-lg text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90`}
    >
      {svg}
    </Link>
  )
}

type Props = {
  closeSidebar: (...args: unknown[]) => void;
  updateShowProjectMenu: (...args: unknown[]) => void;
  showProjectMenu: boolean;
  CustomSidebarPanel?: ReactNode;
}

const Sidebar = ({
  closeSidebar,
  showProjectMenu,
  updateShowProjectMenu,
  CustomSidebarPanel
}: Props) => {
  const deviceWidth = window.innerWidth;
  const location = useLocation()

  useEffect(() => {
    const sidebarLink = sidebarLinksArray.find(
      (sbL) => {
        const isSidebarLink = sbL.link.toLowerCase().includes(location.pathname.slice(0));
        if (!isSidebarLink) {
          const parentLinks = sbL.children?.find((child) => child.link.includes(location.pathname.slice(0)))
          return parentLinks
        } else {
          return isSidebarLink;
        }
      }
    )
    if (sidebarLink && sidebarLink?.children) {
      updateSubMenu(sidebarLink);
    } else {
      updateSubMenu(sidebarLinksArray[2])
    }
  }, [location.pathname])

  const [subMenu, updateSubMenu] = useState<typeof sidebarLinksArray[number]>(sidebarLinksArray[2])

  return (
    <AnimatePresence>
      <motion.div 
        className="sidebar fixed z-50"
        initial={{ x: -1000}}
        animate={{x: 0}}
        transition={{ }}
        exit={{x: -1000}}
        layout
      >

        {/* <!-- Main Sidebar --> */}
        <div className="absolute z-50 w-20 -top-16 h-screen">
          <div
            className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800"
          >
            {/* <!-- Application Logo --> */}
            <div className="flex pt-4">
              <a href="/">
                <img
                  className="h-20 w-20 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                  src="images/magga-logo.png"
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

        {/* Sidebar Panel */}
        <AnimatePresence>
          {showProjectMenu && CustomSidebarPanel && (
            <motion.div
              exit={{ x: -10000 }}
              initial={{  x: -1000}}
              animate={{ x: 0 }}
              transition={{ type: "tween" }}
            >
              {CustomSidebarPanel}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showProjectMenu && !CustomSidebarPanel && (
            <motion.div
              exit={{ x: -10000 }}
              initial={{x: -1000}}
              animate={{ x: 0 }}
              transition={{ type: 'tween' }}
            >
              <SidebarPanel
                headerText={subMenu?.text}
                links={subMenu?.children!}
                closeSidebar={
                  deviceWidth < 560 ?
                    closeSidebar :
                    () => updateShowProjectMenu(!showProjectMenu)
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default Sidebar;