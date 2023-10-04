const TabHeader = () => (
  <div className="flex space-x-2 px-[var(--margin-x)] transition-all duration-[.25s]">
    <button className="tab btn h-8 rounded-full text-xs+ font-medium bg-slate-150 text-slate-800 dark:bg-navy-600 dark:text-navy-50 is-active" data-target="#tab-folder-recent" data-default-className="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100" data-active-className="bg-slate-150 text-slate-800 dark:bg-navy-600 dark:text-navy-50">
      Recent
    </button>
    <button className="tab btn h-8 rounded-full text-xs+ font-medium hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100" data-target="#tab-folder-pinned" data-default-className="hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 hover:text-slate-800 focus:text-slate-800 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 dark:hover:text-navy-100 dark:focus:text-navy-100" data-active-className="bg-slate-150 text-slate-800 dark:bg-navy-600 dark:text-navy-50">
      Pinned
    </button>
  </div>
)

export default TabHeader;