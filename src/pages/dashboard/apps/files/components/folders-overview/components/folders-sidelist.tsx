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

export default FolderSideList