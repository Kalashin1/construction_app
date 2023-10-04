import FoldersHeadingDropdown from "./folders-heading-dropdown";

type FoldersOverviewHeadingProps = {
  showDropdown: boolean;
  updateShowDropdown: (...args: unknown[]) => void;
}

const FoldersOverviewHeading = ({
  showDropdown,
  updateShowDropdown,
}: FoldersOverviewHeadingProps) => (
  <div className="flex items-center justify-between relative">
    <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
      Folders
    </h2>
    <div className="flex">
      <div className="flex">
        <div className="table-search-wrapper flex items-center">
          <label className="block">
            <input className="table-search-input form-input bg-transparent px-1 text-right transition-all duration-100 placeholder:text-slate-500 dark:placeholder:text-navy-200 w-32 lg:w-48" placeholder="Search here..." type="text" />
          </label>
          <button className="table-search-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <div id="dropdown-folders-table" className="inline-flex">
          <button onClick={e => {
            e.stopPropagation()
            updateShowDropdown()
          }} className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {showDropdown && (<FoldersHeadingDropdown />)}
  </div>
);

export default FoldersOverviewHeading;