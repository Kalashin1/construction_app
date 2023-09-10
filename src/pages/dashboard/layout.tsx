import { ReactNode, FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SCREENS } from "../../navigation/constants";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar";

type Props = {
  children: ReactNode;
  sidePanel?: ReactNode;
  lang?: string
}

const Layout: FC<Props> = ({
  children,
  sidePanel
}) => {
  const [showSidebar, updateShowSidebar] = useState(true);
  const [showProjectMenu, updateShowProjectMenu] = useState(false)
  const deviceWidth = window.innerWidth;
  const location = useLocation();


  useEffect(() => {
    const projectSidePanelLinks = [SCREENS.PROJECTS, SCREENS.SHORTAGES, SCREENS.REPORTS, SCREENS.BILLS, SCREENS.PERFORMANCE]
    if (projectSidePanelLinks.find((sl) => sl === location.pathname)) updateShowProjectMenu(true)
  }, [location])

  return (  
    <>
      {showSidebar && (
        <Sidebar
          closeSidebar={() => updateShowSidebar(false)}
          showProjectMenu={showProjectMenu}
          updateShowProjectMenu={() => updateShowProjectMenu(!showProjectMenu)}
          CustomSidebarPanel={sidePanel && sidePanel}
        />
      )}
      <AppWrapper
        toggleSidebar={
          deviceWidth < 560 ?
            () => updateShowSidebar(!showSidebar) :
            () => updateShowProjectMenu(!showProjectMenu)
        }
      />
      {showProjectMenu ? (
        <main className="main-content relative md:left-48 md:w-9/12 pb-8 min-h-screen" onClick={
          deviceWidth < 560 ?
            () => updateShowSidebar(false) :
            () => { }
        }>
          {children}
        </main>
      ) : (
        <main className="main-content relative pb-8 min-h-screen" onClick={
          deviceWidth < 560 ?
            () => updateShowSidebar(false) :
            () => { }
        }>
          {children}
        </main>
      )
      }
    </>
  );
}

export default Layout;