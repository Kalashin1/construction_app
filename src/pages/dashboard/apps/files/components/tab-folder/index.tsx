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
  setParentFolder: Dispatch<SetStateAction<FolderType[]>>
  parentFolder: FolderType[];
}

const TabFolders = ({
  setCurrentFolders,
  setParentFolder,
  parentFolder
}: TabFoldersProps) => {
  const [contractors, setContractors] = useState<FolderType[]>([])

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


      if (_contractors) {
        setContractors(_contractors);
        const RootFolder = [{ name: 'Contractors', children: _contractors }]
        setCurrentFolders(RootFolder)
        localStorage.setItem('rootFolder', JSON.stringify(RootFolder))
      }


    }

    setUp();
  }, [getContractorsFolders, setCurrentFolders])

  return (
    <div className="flex flex-col">
      <TabHeader />
      {contractors && (
        <TabContent
          contractors={contractors}
          setCurrentFolders={setCurrentFolders}
          setParentFolder={setParentFolder}
          parentFolder={parentFolder}
        />
      )}
    </div>
  )
}

export default TabFolders;