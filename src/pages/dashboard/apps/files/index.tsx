import Layout from "../../layout";
import SidebarPanel from "./components/sidepanel";
import { useContext, useState } from "react";
import { SidebarContext } from "../../../../App";
import MainSection from "./components/main-section";

const FileManager = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar
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
    >
      <main className="file-manager-app relative" onClick={() => updateDropDown(false)}>
        <MainSection 
          showDropdown={showDropdown}
          updateShowDropdown={updateDropDown}
        />
      </main>
    </Layout>
  )
}

export default FileManager;