import SidebarPanelHeader, { SidebarPanelHeaderProps } from "./components/sidepanel-header";
import SidebarPanelBody, { SidebarPanelBodyProps } from "./components/sidepanel-body";
import SidebarPanelFooter from "./components/sidepanel-footer";
import { useState, useCallback, Dispatch, SetStateAction, useEffect } from "react";
import { getUsersDirectories } from "../../../helper";
import { FolderType } from "../folders-overview/components/folders-table";

type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps & {
  setCurrentFolders: Dispatch<SetStateAction<FolderType[]>>
}

const SidebarPanel = ({
  headerText,
  links,
  closeSidebar,
  setCurrentFolders
}: SidebarPanelProps) => {
  const [, setEmployees] = useState<FolderType[]>([])
  const [contractors, setContractors] = useState<FolderType[]>([] as FolderType[])
  const [, setExecutors] = useState<FolderType[]>([]);

  const getEmployees = useCallback(() => {
    return getUsersDirectories('employee');
  }, [])

  const getContractorsFolders = useCallback(() => {
    return getUsersDirectories('contractor');
  }, [])

  const getExecutors = useCallback(() => {
    return getUsersDirectories('executor');
  }, [])

  useEffect(() => {
    const setUp = async () => {
      const [error, _employees] = await getEmployees();
      const [err, _contractors] = await getContractorsFolders();
      const [_error, _executors] = await getExecutors();
      if (error || err || _error) {
        alert('error fetching directories');
        console.log("error", error, "err", err, '_error', _error);
      }

      setCurrentFolders(_employees)
      console.log('contractors', _contractors);

      if (_employees) setEmployees(_employees);

      if (_contractors) setContractors(_contractors);

      if (_employees) setExecutors(_executors);


    }

    setUp();
  }, [getEmployees, getContractorsFolders, getExecutors, setCurrentFolders])
  return (
    <div className="w-72 py-2 shadow-md absolute" style={{ top: '-.45rem' }}>
      <div
        className="flex h-full w-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
      >
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader headerText={headerText} closeSidebar={closeSidebar} />
        {/* <!-- Sidebar Panel Body --> */}
        <SidebarPanelBody contractors={contractors} setCurrentFolder={setCurrentFolders} closeSidebar={closeSidebar} links={links} />
        <SidebarPanelFooter />
      </div>
    </div>
  );
};

export default SidebarPanel;