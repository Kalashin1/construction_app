import { ReactNode, FC, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../App";
import { SCREENS } from "../../navigation/constants";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar";
import LeftSidePanel from "./components/left-sidepanel";

type Props = {
  children: ReactNode;
  sidePanel?: ReactNode;
  lang?: string
}



const Layout: FC<Props> = ({
  children,
  sidePanel
}) => {
  const {
    showProjectMenu,
    showSidebar,
    deviceWidth,
    updateShowProjectMenu,
    updateShowSidebar,
    showLeftSidebar,
    updateShowLeftSidebar,
  } = useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    const projectSidePanelLinks = [SCREENS.PROJECTS, SCREENS.SHORTAGES, SCREENS.REPORTS, SCREENS.BILLS, SCREENS.PERFORMANCE]
    if (projectSidePanelLinks.find((sl) => sl === location.pathname)) updateShowProjectMenu!(true)
    if (deviceWidth! < 560) updateShowProjectMenu!(true)
  }, [deviceWidth, location, updateShowProjectMenu])

  return (

    <>
      {showSidebar && (
        <Sidebar
          closeSidebar={() => updateShowSidebar && updateShowSidebar(false)}
          showProjectMenu={showProjectMenu!}
          updateShowProjectMenu={() => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu)}
          CustomSidebarPanel={sidePanel && sidePanel}
        />
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
          {children}
        </main>
      ) : (
        <main className="main-content relative pb-8 min-h-screen" onClick={
          deviceWidth && deviceWidth < 560 ?
            () => updateShowSidebar && updateShowSidebar(false) :
            () => { }
        }>
          {children}
        </main>
      )
    }
    { showLeftSidebar && (<LeftSidePanel closeSidebar={() => updateShowLeftSidebar!(false)} />)}
    </>
  );
}

export default Layout;