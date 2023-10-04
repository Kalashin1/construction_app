// import { UserAuthContext } from "../../../../../../App";
import { getUsersDirectories } from "../../../helper";
import { FolderType } from "../folders-overview/components/folders-table";
import TabContent from "./components/tab-content";
import TabHeader from "./components/tab-header";
import {
  // useContext, 
  useEffect, 
  useState, 
  useCallback, 
  Dispatch, 
  SetStateAction
} from 'react';

type TabFoldersProps = {
  setCurrentFolders: Dispatch<SetStateAction<FolderType[]>>
}  

const TabFolders = ({
  setCurrentFolders
}: TabFoldersProps) => {
  // const { user } = useContext(UserAuthContext);
  const [employees, setEmployees] = useState<FolderType[]>([])
  const [contractors, setContractors] = useState<FolderType[]>([])
  const [executors, setExecutors] = useState<FolderType[]>([]);

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
      if (error || err|| _error) {
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
    <div className="flex flex-col">
      <TabHeader />
      {employees && (
        <TabContent 
          employees={employees}
          contractors={contractors} 
          executors={executors}
          setCurrentFolders={setCurrentFolders}
        />
      )}
    </div>
  )
}

export default TabFolders;