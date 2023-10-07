import { Dispatch, SetStateAction } from "react";
import { FolderType as _Folder } from "../../folders-overview/components/folders-table";

type FolderType = {
  array: unknown[];
  title: string;
  strokeColor: string;
  folderImageUrl: string;
  action: (...args: unknown[]) => void;
};

const Folder = ({
  array,
  title,
  strokeColor = 'currentColor',
  folderImageUrl,
  action
}: FolderType) => {
  return (
    <div className="card swiper-slide w-56 shrink-0 p-3 pt-4 swiper-slide-active cursor-pointer" role="group" aria-label="1 / 3" style={{ marginRight: '20px' }} onClick={action}>
      <div className="flex items-center justify-between">
        <img className="w-14" src={folderImageUrl} alt="folder" />
        <button className="btn -mr-2 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={strokeColor} stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </button>
      </div>
      <div className="pt-5 text-base font-medium tracking-wide text-error">
        {title}
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <p className="text-salte-400 text-xs+ dark:text-navy-300">
          {array.length} folder{array.length > 1 ? 's' : ''}
        </p>
        <p className="font-medium text-slate-600 dark:text-navy-100">
          146 MB
        </p>
      </div>
    </div>
  )
}


const TabContent = ({
  // employees,
  contractors,
  // executors,
  setCurrentFolders
}: {
  contractors: _Folder[];
  setCurrentFolders: Dispatch<SetStateAction<_Folder[]>>
  setParentFolder: Dispatch<SetStateAction<_Folder[]>>,
  parentFolder: _Folder[];
}) => {
  return (
    <div>
      <div id="tab-folder-recent" className="tab-content tab-shift-left swiper px-[var(--margin-x)] pt-4 transition-all duration-[.25s] swiper-initialized swiper-horizontal swiper-backface-hidden is-active py-4">
        <div className="swiper-wrapper" id="swiper-wrapper-7a1103272bc142eca" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>

          {/* <Folder 
            array={employees}
            folderImageUrl="images/folders/folder-primary.svg"
            strokeColor="currentColor"
            title="Employees"
            action={() => setCurrentFolders(employees)}
          /> */}
          {/* <Folder 
            array={executors}
            folderImageUrl="images/folders/folder-warning.svg"
            strokeColor="currentColor"
            title="Executors"
            action={() => setCurrentFolders(executors)}
          /> */}
          <Folder 
            array={contractors}
            folderImageUrl="images/folders/folder-warning.svg"
            strokeColor="currentColor"
            title="Contractors"
            action={() => setCurrentFolders(contractors)}
          />
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
  )
}

export default TabContent;