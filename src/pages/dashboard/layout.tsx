import { ReactNode, FC, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../App";
import { SCREENS } from "../../navigation/constants";
import { motion, AnimatePresence } from 'framer-motion';
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar";
import LeftSidePanel from "./components/left-sidepanel";
import ToastComponent from "./components/notification/toast";


type Props = {
  children: ReactNode;
  sidePanel?: ReactNode;
  leftSidePanelChildren?: ReactNode;
  lang?: string;
}

const Layout: FC<Props> = ({
  children,
  sidePanel,
  leftSidePanelChildren,
}) => {
  const {
    showProjectMenu,
    showSidebar,
    deviceWidth,
    updateShowProjectMenu,
    updateShowSidebar,
    showLeftSidebar,
    updateShowLeftSidebar,
    updateShowNotifications,
    updateShowDashboardDropdown
  } = useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    const projectSidePanelLinks = [SCREENS.PROJECTS, SCREENS.SHORTAGES, SCREENS.REPORTS, SCREENS.BILLS, SCREENS.PERFORMANCE]
    if (projectSidePanelLinks.find((sl) => sl === location.pathname)) updateShowProjectMenu!(true)
    if (deviceWidth! < 560) {
      updateShowProjectMenu!(true)
      updateShowSidebar!(false)
    }
    updateShowLeftSidebar!(false);
  }, [deviceWidth, location])

  return (

    <>
      {showSidebar && (
        <AnimatePresence>
          <motion.div
            exit={{ opacity: 0 }}
          >
            <Sidebar
              closeSidebar={() => updateShowSidebar && updateShowSidebar(false)}
              showProjectMenu={showProjectMenu!}
              updateShowProjectMenu={() => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu)}
              CustomSidebarPanel={sidePanel && sidePanel}
            />
          </motion.div>
        </AnimatePresence>
      )}
      <AppWrapper
        toggleSidebar={
          deviceWidth && deviceWidth < 560 ?
            () => updateShowSidebar && updateShowSidebar(!showSidebar) :
            () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu)
        }
      />
      {showProjectMenu ? (
        <main className="main-content relative md:left-48 md:w-9/12 pb-8 min-h-screen" onClick={
          deviceWidth && deviceWidth < 560 ?
            () => updateShowSidebar && updateShowSidebar(false) :
            () => { }
        }>
          <div onClick={() => {
            updateShowDashboardDropdown!(false)
            updateShowNotifications!(false)
          }}>
            <ToastComponent />
            {children}
          </div>
        </main>
      ) : (
        <main className="main-content relative pb-8 min-h-screen" onClick={
          deviceWidth && deviceWidth < 560 ?
            () => updateShowSidebar && updateShowSidebar(false) :
            () => { }
        }>
          <div onClick={() => {
            updateShowDashboardDropdown!(false)
            updateShowNotifications!(false)
          }}>
            <ToastComponent />
            {children}
          </div>
        </main>
      )
      }
      {showLeftSidebar && (
        <LeftSidePanel
          closeSidebar={() => updateShowLeftSidebar!(false)}
          children={leftSidePanelChildren}
        />
      )}
    </>
  );
}

export default Layout;