const Inprogress = () => {
  return (
    <div className="board-draggable relative flex max-h-full w-72 shrink-0 flex-col">
      <div className="board-draggable-handler flex items-center justify-between px-0.5 pb-3">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-info/10 text-info">
            <i className="fa fa-spinner text-base"></i>
          </div>
          <h3 className="text-base text-slate-700 dark:text-navy-100">
            In Progress
          </h3>
        </div>

        <div id="tasks-progress-menu" className="inline-flex">
          <button className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>


        </div>
      </div>
      <div id="tasks-progress-list" className="is-scrollbar-hidden relative space-y-2.5 overflow-y-auto p-0.5">
        <div className="card cursor-pointer shadow-sm">
          <div className="flex space-x-3 px-2.5 pb-2 pt-1.5">
            <div className="w-10 shrink-0 py-1">
              <img className="w-full" src="images/illustrations/creativedesign-char.svg" alt="image" />
            </div>
            <div className="flex-1 space-y-2">
              <p className="font-medium tracking-wide text-slate-600 dark:text-navy-100">
                Update Design
              </p>
              <div className="flex flex-wrap space-x-1">
                <div className="badge space-x-1 bg-slate-150 px-1.5 py-1 text-slate-800 dark:bg-navy-500 dark:text-navy-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span> Sep 12</span>
                </div>
                <div className="badge bg-secondary/10 px-1.5 py-1 text-secondary dark:bg-secondary-light/15 dark:text-secondary-light">
                  Update
                </div>
                <div className="badge space-x-1 bg-info/10 px-1.5 py-1 text-info dark:bg-info/15">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>4/5</span>
                </div>
              </div>
              <div className="flex items-end justify-between pt-1">
                <div className="flex flex-wrap -space-x-1.5">
                  <div className="avatar h-5 w-5 hover:z-10">
                    <div className="is-initial rounded-full bg-info text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700">
                      jd
                    </div>
                  </div>

                  <div className="avatar h-5 w-5 hover:z-10">
                    <img className="rounded-full ring-1 ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                  </div>

                  <div className="avatar h-5 w-5 hover:z-10">
                    <img className="rounded-full ring-1 ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300">
                  <div className="flex items-center space-x-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                    <span>3</span>
                  </div>
                  <div className="flex items-center space-x-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card cursor-pointer shadow-sm">
          <div className="space-y-3 px-2.5 pb-2 pt-1.5">
            <div>
              <div className="flex justify-between">
                <p className="line-clamp-2 font-medium tracking-wide text-slate-600 dark:text-navy-100">
                  Sync With Google Analytics
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1.5 h-3.5 w-3.5 shrink-0 text-error" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
                </svg>
              </div>

              <p className="mt-px text-xs text-slate-400 dark:text-navy-300">
                Google Workspace
              </p>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex items-center space-x-2">
                <div className="avatar h-6 w-6">
                  <img className="rounded-full" src="images/100x100.png" alt="avatar" />
                </div>
                <p>Travis F.</p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300">
                <div className="flex items-center space-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card cursor-pointer shadow-sm">
          <div className="space-y-2 px-2.5 pb-2 pt-1.5">
            <div>
              <div className="flex justify-between">
                <p className="line-clamp-2 font-medium tracking-wide text-slate-600 dark:text-navy-100">
                  Add New Products
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1.5 h-3.5 w-3.5 shrink-0 text-info" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap space-x-1">
              <div className="badge space-x-1 bg-slate-150 px-1.5 py-1 text-slate-800 dark:bg-navy-500 dark:text-navy-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span> May 14</span>
              </div>
              <div className="badge bg-info/10 px-1.5 py-1 text-info dark:bg-info/15">
                Create
              </div>
              <div className="badge space-x-1 bg-error/10 px-1.5 py-1 text-error dark:bg-error/15">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>4/5</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
            </div>
            <div className="flex items-end justify-between pt-1">
              <div className="flex flex-wrap -space-x-1.5">
                <div className="avatar h-5 w-5 hover:z-10">
                  <div className="is-initial rounded-full bg-info text-tiny+ uppercase text-white ring-1 ring-white dark:ring-navy-700">
                    jd
                  </div>
                </div>

                <div className="avatar h-5 w-5 hover:z-10">
                  <img className="rounded-full ring-1 ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                </div>

                <div className="avatar h-5 w-5 hover:z-10">
                  <img className="rounded-full ring-1 ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300">
                <div className="flex items-center space-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                  <span>3</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card cursor-pointer shadow-sm">
          <div className="space-y-3 rounded-lg bg-success/10 px-2.5 pb-2 pt-1.5">
            <div>
              <div className="flex justify-between">
                <p className="line-clamp-2 font-medium tracking-wide text-success">
                  Improve animation loader
                </p>
              </div>
            </div>
            <div className="flex flex-wrap space-x-1">
              <div className="badge space-x-1 bg-success/10 px-1.5 py-1 text-success dark:bg-success/15">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span> Sep 12</span>
              </div>
              <div className="badge bg-warning/10 px-1.5 py-1 text-warning dark:bg-warning/15">
                Performance
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex items-center space-x-2">
                <div className="avatar h-6 w-6">
                  <img className="rounded-full" src="images/100x100.png" alt="avatar" />
                </div>
                <p>Travis F.</p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-400 dark:text-navy-300">
                <div className="flex items-center space-x-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2">
        <button className="flex items-center justify-center space-x-2 font-medium text-slate-600 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span>New Task</span>
        </button>
      </div>
    </div>
  )
}

export default Inprogress;