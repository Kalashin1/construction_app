import { Dispatch, SetStateAction } from "react";
import FoldersOverviewHeading, { FoldersOverviewHeadingProps } from "./components/folders-overview-heading";
import FolderSideList from "./components/folders-sidelist";
import FoldersTable, { FolderType } from "./components/folders-table";

type FoldersOverviewProps = FoldersOverviewHeadingProps & {
  currentFolders: FolderType[];
  updateCurrentFolders: Dispatch<SetStateAction<FolderType[]>>;
  setParentFolder: Dispatch<SetStateAction<unknown>>;
  parentFolder: unknown;
}

const FoldersOverview = ({
  showDropdown,
  updateShowDropdown,
  currentFolders,
  updateCurrentFolders,
  parentFolder,
  setParentFolder
}: FoldersOverviewProps) => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 px-[var(--margin-x)] transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:gap-6">
      <div className="col-span-12">
        <FoldersOverviewHeading
          showDropdown={showDropdown}
          updateShowDropdown={updateShowDropdown}
        />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <FoldersTable 
          folders={currentFolders}
          setCurrentFolder={updateCurrentFolders}
          parentFolder={parentFolder}
          setParentFolder={setParentFolder}
        />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <FolderSideList />
      </div>
    </div>
  )
}

export default FoldersOverview;