import {Dispatch, SetStateAction, useRef} from "react";
import TodosDropdown from "./todos-dropdown";

type Props = {
  showTodoDropdown: boolean
  updateShowTodoDropdown: Dispatch<SetStateAction<boolean>>;
}

const Header = ({
  showTodoDropdown,
  updateShowTodoDropdown
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  return (
    <div className="flex items-center justify-between py-5 relative">
      <div>
        <div className="flex space-x-2">
          <p className="text-xl font-medium text-slate-800 dark:text-navy-50">
            My Day
          </p>

          <div id="top-header-menu" className="inline-flex">
            <button
              className="popper-ref btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              onClick={(e) => {
                e.stopPropagation()
                updateShowTodoDropdown(true)
              }}
            >
              <i className="fas fa-ellipsis" />
            </button>
            {showTodoDropdown && (
              <div ref={dropdownRef} onClick={e => e.stopPropagation()}>
                <TodosDropdown />
              </div>
            )}

            <div className="popper-root" data-popper-placement="bottom-start" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(98px, 112px)' }}>
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
          </div>
        </div>
        <p className="mt-1 text-xs">Sunday, Sep. 14</p>
      </div>
      <div className="flex items-center space-x-2">
        <label className="relative hidden sm:flex">
          <input className="form-input peer h-9 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Search todos..." type="text" />
          <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
            <i className="fa fas-search" />
          </span>
        </label>
        <div className="flex">
          <button data-tooltip="Search" className="btn h-9 w-9 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button data-tooltip="Filter" className="btn h-9 w-9 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </button>
          <button data-tooltip="Sort" className="btn h-9 w-9 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;