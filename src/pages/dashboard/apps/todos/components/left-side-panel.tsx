const Header = () => (
  <div className="flex h-14 items-center justify-between bg-slate-150 p-4 dark:bg-navy-800">
    <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
      Edit Todo
    </h3>
    <div className="-mr-1.5 flex items-center space-x-2.5">
      <input data-tooltip="Mark as Completed" data-tooltip-theme="primary" className="form-checkbox is-basic h-5 w-5 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" type="checkbox" />

    </div>
  </div>
)

const TodosDetails = () => (
  <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto p-4">

    <div>
      <span>Due date:</span>
      <label className="relative mt-1.5 flex">
        <input id="edit-todo-due-date" className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent flatpickr-input" placeholder="Choose date..." type="text" readOnly={true} />
        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </span>
      </label>
    </div>

    <label className="block">
      <span>Select User</span>
      <select
        className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
      >
        <option>Corporate event</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Other</option>
      </select>
    </label>

    <div>
      <span>Description</span>
      <label className="block">
        <textarea
          rows={2}
          placeholder=" Enter Text"
          className="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
        ></textarea>
      </label>
    </div>
  </div>
)

const BottomButton = () => (
  <div className="flex items-center justify-between border-t border-slate-150 px-4 py-3 dark:border-navy-600">
    <div className="flex space-x-1">
      <button className="btn h-8 w-8 rounded-full p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
        <i className="fas fa-trash" />
      </button>
      <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </button>
    </div>
    <button data-toggle="drawer" data-target="#edit-todo-drawer" className="btn min-w-[7rem] bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
      Save
    </button>
  </div>
)

const LeftSidePanel = () => {
  return (
    <div className="flex mt-4 h-full w-full flex-col bg-white dark:bg-navy-700">
      <Header />
      <TodosDetails />
      <BottomButton />
    </div>
  );
};

export default LeftSidePanel;