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

const FoldersHeadingDropdown = () => (
  <div className="absolute right-3 top-10">
    <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
      <ul>
        <li>
          <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Another Action</a>
        </li>
        <li>
          <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Something else</a>
        </li>
      </ul>
      <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
      <ul>
        <li>
          <a href="#" className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Separated Link</a>
        </li>
      </ul>
    </div>
  </div>
)

const FoldersTable = () => (
  <div className="card mt-3">
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
      <table className="is-hoverable w-full text-left">
        <thead>
          <tr>
            <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Name
            </th>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Last edit
            </th>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Size
            </th>
            <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Members
            </th>

            <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                </svg>
                <span className="font-medium text-slate-700 dark:text-navy-100">Designs</span>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              2 day ago
            </td>
            <td className="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5">
              14.3GB
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <div className="flex -space-x-2">
                <div className="avatar h-7 w-7 hover:z-10">
                  <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                </div>

                <div className="avatar h-7 w-7 hover:z-10">
                  <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                    jd
                  </div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
              <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
)

const FolderSideList = () => (
  <div className="col-span-12 lg:col-span-4">
    <div className="flex items-center justify-between">
      <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Tags
      </h2>

      <div id="dropdown-tags" className="inline-flex">
        <button className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>

      </div>
    </div>
    <div className="card mt-3 space-y-3.5 p-4 text-xs+">
      <div className="group flex items-center justify-between">
        <div className="flex space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white dark:bg-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <a href="#" className="text-slate-600 dark:text-navy-100">#Image</a>
            <div className="mt-1 flex text-xs text-slate-400 dark:text-navy-300">
              <p>654 Files</p>
              <div className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
              <p>1.5 GB</p>
            </div>
          </div>
        </div>
        <button className="btn -mr-2 h-8 w-8 rounded-full p-0 opacity-0 hover:bg-slate-300/20 focus:bg-slate-300/20 focus:opacity-100 active:bg-slate-300/25 group-hover:opacity-100 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </button>
      </div>

    </div>
  </div>
)

type FoldersOverviewProps = FoldersOverviewHeadingProps

const FoldersOverview = ({
  showDropdown,
  updateShowDropdown
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
        <FoldersTable />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <FolderSideList />
      </div>
    </div>
  )
}

export default FoldersOverview;