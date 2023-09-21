const LeftSide = () => (
  <div className="col-span-12 flex flex-col px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-3 lg:pr-0">
    <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
      Top Sellers
    </h2>

    <p className="mt-3 grow">
      The top sellers is calculated based on the sales of a product and
      undergoes hourly updations.
    </p>

    <div className="mt-4">
      <p>Sales Growth</p>
      <div className="mt-1.5 flex items-center space-x-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
          </svg>
        </div>
        <p className="text-base font-medium text-slate-700 dark:text-navy-100">
          $2,225.22
        </p>
      </div>
    </div>
  </div>
)

const NotificationItem = () => (
  <div className="card w-72 shrink-0 space-y-9 rounded-xl p-4 sm:px-5">
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <img className="mask is-squircle" src="images/100x100.png" alt="image" />
        </div>
        <div>
          <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
            Balde Ibrahim
          </p>
          <p className="text-xs text-slate-400 dark:text-navy-300">
            Employee
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="relative cursor-pointer">
          <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </button>
          <div className="absolute right-0 top-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
            2
          </div>
        </div>
        <div className="relative cursor-pointer">
          <button className="btn h-7 w-7 bg-primary/10 p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
            <i className="fas fa-envelope" />
          </button>
          <div className="absolute right-0 top-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
            4
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between space-x-2">
      <div>
        <p className="text-xs+">Sells</p>
        <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
          2 348
        </p>
      </div>
      <div>
        <p className="text-xs+">Target</p>
        <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
          3 000
        </p>
      </div>
      <div>
        <p className="text-xs+">Clients</p>
        <p className="text-xl font-semibold text-slate-700 dark:text-navy-100">
          78
        </p>
      </div>
    </div>
    <div className="grow">
      <div className="flex w-full space-x-1">
        <div data-tooltip="Phone Calls" className="h-2 w-4/12 rounded-full bg-primary dark:bg-accent"></div>
        <div data-tooltip="Chats Messages" className="h-2 w-3/12 rounded-full bg-success"></div>
        <div data-tooltip="Emails" className="h-2 w-5/12 rounded-full bg-info"></div>
      </div>
      <div className="mt-2 flex flex-wrap">
        <div className="mb-1 mr-4 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-primary dark:bg-accent"></div>
          <div className="flex space-x-1 text-xs leading-6">
            <span className="font-medium text-slate-700 dark:text-navy-100">Calls</span>
            <span>33%</span>
          </div>
        </div>
        <div className="mb-1 mr-4 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-success"></div>
          <div className="flex space-x-1 text-xs">
            <span className="font-medium text-slate-700 dark:text-navy-100">Chat Messages</span>
            <span>17%</span>
          </div>
        </div>
        <div className="mb-1 inline-flex items-center space-x-2 font-inter">
          <div className="h-2 w-2 rounded-full bg-info"></div>
          <div className="flex space-x-1 text-xs">
            <span className="font-medium text-slate-700 dark:text-navy-100">Emails</span>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      
      <button className="btn -mr-1.5 h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
        <i className="fas fa-cog" />
      </button>
    </div>
  </div>
)

const RightSide = () => (
  <div className="is-scrollbar-hidden col-span-12 flex space-x-4 overflow-x-auto px-[var(--margin-x)] transition-all duration-[.25s] lg:col-span-9 lg:pl-0">
    <NotificationItem />
  </div>
)

const DashboardNotification = () => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 bg-slate-150 py-5 dark:bg-navy-800 sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default DashboardNotification;