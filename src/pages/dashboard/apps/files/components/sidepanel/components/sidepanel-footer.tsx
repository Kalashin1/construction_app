
const SidebarPanelFooter = () => (
  <div className="flex flex-col p-4">
    <div className="flex items-center justify-between">
      <p>
        <span className="font-medium text-slate-600 dark:text-navy-100">35GB</span>
        of 1TB
      </p>
      <a href="#" className="text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">Upgrade</a>
    </div>

    <div className="progress mt-2 h-2 bg-slate-150 dark:bg-navy-500">
      <div className="w-7/12 rounded-full bg-info"></div>
    </div>
  </div>
);

export default SidebarPanelFooter;