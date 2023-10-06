import { Dispatch, SetStateAction } from "react";
import { FolderType } from "../../folders-overview/components/folders-table";
import ListItem from "./list-item";
import SecondList from "./second-list";
import SidebarPanelFooter from "./sidepanel-footer";

export type SidebarPanelBodyProps = {
  links: Array<string>
  closeSidebar: (...args: unknown[]) => void;
  contractors?: FolderType[]
  setCurrentFolder?: Dispatch<SetStateAction<FolderType[]>>
  setParentFolder?: Dispatch<SetStateAction<unknown>>;
  parentFolder: unknown;
}


const SidebarPanelBody = ({
  links,
  // closeSidebar,
  contractors,
  setCurrentFolder,
  setParentFolder,
  parentFolder,
}: SidebarPanelBodyProps) => {
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <div className="mt-4 flex px-4 pb-4 shadow-sm">
        <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
          <span> New File</span>
        </button>
      </div>
      <div className="ac-header mt-4 flex items-center justify-between px-4">
        <span className="text-xs font-medium uppercase">My Files
        </span>
        <div className="-mr-1.5 flex">
          <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <i className="fas fa-search" />
          </button>
          <button className="ac-trigger btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" id="ac-trigger-0" role="button" aria-controls="ac-panel-0" aria-disabled="false" aria-expanded="true">
            <i className="fa fa-chevron-up" />
          </button>
        </div>
      </div>
      <ul
        className="mt-1 space-y-1 px-2 font-inter text-xs+ font-medium"
        id="tree"
      >
        {links.map((folder, index) => {
          return (
            <li key={index} className="ac [&.is-active>.tree-header>.ac-trigger>.ac-icon]:rotate-90 [&.is-active>.tree-header]:text-slate-800 dark:[&.is-active>.tree-header]:text-navy-100 js-enabled">
              <ListItem 
                folderName={folder} 
                subFolders={folder === 'contractors' && contractors ? contractors:[] } 
                setCurrentFolders={setCurrentFolder!}
                parentFolder={parentFolder}
                setParentFolder={setParentFolder!}
              />
            </li>
          )
        })}
        <li>
          <div tabIndex={0} className="flex cursor-pointer items-center rounded px-2 py-1 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:text-navy-100 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <div className="mr-1 flex h-5 w-5 items-center justify-center"></div>

            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <span>Archives</span>
          </div>
        </li>
      </ul>
      <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      <SecondList />
      <div className="mt-8 fixed bottom-0 w-52 left-20 bg-white">
        <SidebarPanelFooter />
      </div>
    </div>
  )
}

export default SidebarPanelBody