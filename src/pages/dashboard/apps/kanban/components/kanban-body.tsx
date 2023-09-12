import Inprogress from "./in-progress";


const KanbanBody = () => {
  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-grow flex-col">
      <div id="tasks-group" className="kanban-scrollbar flex w-full items-start space-x-4 overflow-x-auto overflow-y-hidden px-[var(--margin-x)] transition-all duration-[.25s]">
        <Inprogress />
        <Inprogress />
        <Inprogress />
        <Inprogress />
        <div className="w-72 shrink-0">
          <button className="btn w-full bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
            New Board
          </button>
        </div>
      </div>
    </div>
  )
};

export default KanbanBody;