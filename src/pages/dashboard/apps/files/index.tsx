import Layout from "../../layout";
import SidebarPanel from "./components/sidepanel";
import { useContext } from "react";
import { SidebarContext } from "../../../../App";

const FileManager = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar
  } = useContext(SidebarContext);
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
      <main></main>
    </Layout>
  )
}

export default FileManager;