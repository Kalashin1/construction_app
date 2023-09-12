import Layout from "../../layout";
import SidebarPanel from "./components/sidepanel";
import { useContext, useState } from "react";
import { SidebarContext } from "../../../../App";
import MainSection from "./components/main-section";
import LeftSidePanel from "./components/left-side-panel";

const FileManager = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar,
    updateShowLeftSidebar
  } = useContext(SidebarContext);
  const [showDropdown, updateDropDown] = useState(false);
  return (
    <Layout
      sidePanel={
        (
          <SidebarPanel

            closeSidebar={
              deviceWidth && deviceWidth > 560 ?
                () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
                () => updateShowSidebar && updateShowSidebar(!showSidebar)
            }
            links={[0, 1, 2, 3]}
            headerText="Files"
          />
        )
      }
      leftSidePanelChildren={(<LeftSidePanel  />)}
    >
      <main className="file-manager-app relative" onClick={() => updateDropDown(false)}>
        <MainSection 
          showDropdown={showDropdown}
          updateShowDropdown={updateDropDown}
          showLeftSidePanel={() => updateShowLeftSidebar!(true)}
        />
      </main>
    </Layout>
  )
}

export default FileManager;