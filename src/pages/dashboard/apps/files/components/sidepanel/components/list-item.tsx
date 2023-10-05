import { Dispatch, SetStateAction, useState } from "react"
import SubFolder from "./subfolder"
import { FolderType } from "../../folders-overview/components/folders-table";

const ListItem = ({
  subFolders,
  folderName,
  setCurrentFolders,
}: {
  subFolders?: FolderType[];
  folderName: string;
  setCurrentFolders: Dispatch<SetStateAction<FolderType[]>>
}) => {
  const [showSubFolders, updateShowSubFolders] = useState(false)
  return (
    <>
      <div
        onClick={() => updateShowSubFolders(!showSubFolders)}
        className="tree-header flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
        {subFolders?.length ? (<button onClick={() => updateShowSubFolders(!showSubFolders)} className="ac-trigger btn mr-1 h-5 w-5 rounded-lg p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" id="ac-trigger-1" role="button" aria-controls="ac-panel-1" aria-disabled="false" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" className="ac-icon h-4.5 w-4.5 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </button>) : (<span className="w-6"></span>)}
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
        <span>{folderName}</span>
      </div>

      {showSubFolders && subFolders?.length && (<SubFolder setCurrentFolders={setCurrentFolders} subFolders={subFolders} />)}

    </>
  )
}

export default ListItem;