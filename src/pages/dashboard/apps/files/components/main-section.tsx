import { Dispatch, SetStateAction } from "react";

const Dropdown = () => (
  <div>
    <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700 absolute left-20 top-12">
      <ul>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            </svg>

            <span> New Folder</span></a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>

            <span>Upload Folder</span></a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-px h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>

            <span>Download Folder</span></a>
        </li>
      </ul>
    </div>
  </div>
)

type HeadingProps = {
  showDropdown: boolean;
  updateShowDropdown: Dispatch<SetStateAction<boolean>>;
}

const Heading = ({
  showDropdown,
  updateShowDropdown,
}: HeadingProps) => (
  <div className="flex items-center justify-between space-x-2 px-[var(--margin-x)] pb-4 pt-5 transition-all duration-[.25s] relative">
    <div className="flex items-center space-x-1">
      <h3 className="line-clamp-1 text-lg font-medium text-slate-700 dark:text-navy-50">
        Home
      </h3>
      <div id="top-header-menu" className="inline-flex">
        <button
          className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          onClick={(e) => {
            e.stopPropagation()
            updateShowDropdown(!showDropdown)
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </button>

      </div>
    </div>
    {showDropdown && (<Dropdown />)}

    <div className="flex">
      <button data-toggle="drawer" data-target="#filemanager-activity-drawer" className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </button>
      <a href="pages-help-1.html" className="btn h-8 w-8 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </a>
    </div>
  </div>
)
type MaiSectionProps = HeadingProps;

const MainSection = ({
  showDropdown,
  updateShowDropdown
}: MaiSectionProps) => {
  return (
    <>
      <Heading
        showDropdown={showDropdown}
        updateShowDropdown={updateShowDropdown}
      />
    </>
  )
};

export default MainSection