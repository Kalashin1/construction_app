const Header = () => (
  <div className="flex h-14 items-center justify-between bg-slate-150 p-4 dark:bg-navy-800">
    <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
      Activity
    </h3>
    <div className="-mr-1.5 flex items-center space-x-2.5">
      <input data-tooltip="Mark as Completed" data-tooltip-theme="primary" className="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" type="checkbox" />

    </div>
  </div>
)

const FileManagerActivity = () => (
  <div className="mt-5 px-4">
    <div id="drawer-tab-recent" className="tab-content tab-shift-left is-active">
      <ol className="timeline line-space">
        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border-2 border-slate-300 dark:border-navy-400"></div>
          <div className="timeline-item-content flex-1 pl-4">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="font-medium leading-none text-slate-600 dark:text-navy-100">
                2 minute ago
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
              <img src="images/800x600.png" className="rounded-lg object-cover object-center" alt="image" />
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <div className="avatar h-6 w-6">
                <img className="rounded-full" src="images/100x100.png" alt="avatar" />
              </div>
              <p className="text-xs+">
                <span className="font-medium">Mores Clarke</span>
                <span className="text-slate-400 dark:text-navy-300">added 3 new Photo</span>
              </p>
            </div>
          </div>
        </li>

        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border-2 border-secondary dark:border-secondary-light"></div>
          <div className="timeline-item-content flex-1 pl-4">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="font-medium leading-none text-slate-600 dark:text-navy-100">
                a hour ago
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-3">
              <div className="mask is-squircle flex h-11 w-11 items-center justify-center bg-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  Slow Music
                </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                  <span>03:12</span>
                  <div className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>

                  <span>8.32 MB</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <div className="avatar h-6 w-6">
                <img className="rounded-full" src="images/100x100.png" alt="avatar" />
              </div>
              <p className="text-xs+">
                <span className="font-medium">Bill Musk </span>
                <span className="text-slate-400 dark:text-navy-300">
                  added a new Music</span>
              </p>
            </div>
          </div>
        </li>

        <li className="timeline-item">
          <div className="timeline-item-point rounded-full border-2 border-info"></div>
          <div className="timeline-item-content flex-1 pl-4">
            <div className="flex flex-col justify-between sm:flex-row">
              <p className="font-medium leading-none text-slate-600 dark:text-navy-100">
                a day ago
              </p>
            </div>
            <div className="mt-4 flex items-center space-x-3">
              <div className="mask is-squircle flex h-11 w-11 items-center justify-center bg-info text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-700 dark:text-navy-100">
                  Final.fig
                </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                  <span>45 MB</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <div className="avatar h-6 w-6">
                <img className="rounded-full" src="images/100x100.png" alt="avatar" />
              </div>
              <p className="text-xs+">
                <span className="font-medium">John Doe </span>
                <span className="text-slate-400 dark:text-navy-300">
                  added a new file</span>
              </p>
            </div>
          </div>
        </li>


      </ol>
    </div>

  </div>
)

const LeftSidePanel = () => {
  return (
    <div className="flex mt-4 h-full w-full flex-col bg-white dark:bg-navy-700">
      <Header />
      <FileManagerActivity />
    </div>
  );
};

export default LeftSidePanel;