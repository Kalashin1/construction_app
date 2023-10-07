import SidebarPanelHeader, { SidebarPanelHeaderProps } from "./components/sidepanel-header";
import SidebarPanelBody, { SidebarPanelBodyProps } from "./components/sidepanel-body";
import SidebarPanelFooter from "./components/sidepanel-footer";
import { useState, useCallback, Dispatch, SetStateAction, useEffect } from "react";
import { getUsersDirectories } from "../../../helper";
import { FolderType } from "../folders-overview/components/folders-table";

type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps & {
  setCurrentFolders: Dispatch<SetStateAction<FolderType[]>>;
  parentFolder: FolderType[];
  setParentFolder: Dispatch<SetStateAction<FolderType[]>>;
}

const SidebarPanel = ({
  headerText,
  links,
  closeSidebar,
  setCurrentFolders,
  setParentFolder,
  parentFolder
}: SidebarPanelProps) => {
  const [contractors, setContractors] = useState<FolderType[]>([] as FolderType[])

  const getContractorsFolders = useCallback(() => {
    return getUsersDirectories('contractor');
  }, [])

  useEffect(() => {
    const setUp = async () => {
      const [err, _contractors] = await getContractorsFolders();
      if (err) {
        alert('error fetching directories');
        console.log("err", err);
      }


      if (_contractors) setContractors(_contractors);
    }

    setUp();
  }, [getContractorsFolders, setCurrentFolders])
  return (
    <div className="w-72 py-2 shadow-md absolute" style={{ top: '-.45rem' }}>
      <div
        className="flex h-full w-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
      >
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader headerText={headerText} closeSidebar={closeSidebar} />
        {/* <!-- Sidebar Panel Body --> */}
        <SidebarPanelBody 
          contractors={contractors} 
          setCurrentFolder={setCurrentFolders} 
          closeSidebar={closeSidebar} 
          links={links}
          parentFolder={parentFolder}
          setParentFolder={setParentFolder}
        />
        <SidebarPanelFooter />
      </div>
    </div>
  );
};

export default SidebarPanel;