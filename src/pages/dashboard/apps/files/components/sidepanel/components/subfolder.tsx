import { Dispatch, SetStateAction } from "react";
import { FolderType } from "../../folders-overview/components/folders-table";

const SubFolder = ({
  subFolders,
  setCurrentFolders,
  setParentFolder,
  parentFolder
}: {
  subFolders: FolderType[];
  setCurrentFolders: Dispatch<SetStateAction<FolderType[]>>;
  setParentFolder: Dispatch<SetStateAction<unknown>>;
  parentFolder: unknown;
}) => (
  <div className="ac-panel pl-4" id="ac-panel-1" role="region" aria-labelledby="ac-trigger-1"
    style={{ transitionDuration: '200ms' }}>
    <ul id="tree1-1">
      {subFolders.map((_, i) => {
        const folderNameArray = _.name.split('-');
        folderNameArray[2] = folderNameArray[2].slice(0, 3);
        const folderName = folderNameArray.join('-');
        return (
          <li key={i}
            onClick={() => {
              setCurrentFolders(_.children)
              setParentFolder(parentFolder + ` > ${folderName}`)
            }}
          >
            <div tabIndex={0} className="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
              <div className="mr-1 flex h-5 w-5 items-center justify-center"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
              <span>{folderName}</span>
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default SubFolder;