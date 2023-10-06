/* eslint-disable @typescript-eslint/ban-ts-comment */
import Layout from "../../layout";
import SidebarPanel from "./components/sidepanel";
import { useContext, useState } from "react";
import { SidebarContext } from "../../../../App";
import MainSection from "./components/main-section";
import LeftSidePanel from "./components/left-side-panel";
import { FolderType } from "./components/folders-overview/components/folders-table";

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
  const [showSecondDropdown, updateShowSecondDropDown] = useState(false);
  const [currentFolders, setCurrentFolder] = useState<FolderType[]>([]);
  const [parentFolder, setParentFolder] = useState<unknown>();
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
            setCurrentFolders={setCurrentFolder}
            links={['contractors']}
            headerText="Files"
            setParentFolder={setParentFolder}
            parentFolder={parentFolder}
          />
        )
      }
      leftSidePanelChildren={(<LeftSidePanel  />)}
    >
      <main className="file-manager-app relative" onClick={() => {
        updateDropDown(false)
        updateShowSecondDropDown(false)
      }}>
        <MainSection 
          showDropdown={showDropdown}
          updateShowDropdown={updateDropDown}
          showLeftSidePanel={() => updateShowLeftSidebar!(true)}
          showSecondDropdown={showSecondDropdown}
          currentFolders={currentFolders}
          setCurrentFolder={setCurrentFolder}
          updateShowSecondDropdown={() => updateShowSecondDropDown(!showSecondDropdown)}
          parentFolder={parentFolder}
          setParentFolder={setParentFolder}
        />
      </main>
    </Layout>
  )
}

export default FileManager;