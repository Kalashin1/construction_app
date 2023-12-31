import { useState, useEffect } from "react";
import { User } from "../../../../../../types";
import { getUserById } from "../../../../helper/user";
import EmployeesDropdown from "./employees-dropdown";

const EmployeesComponent = ({
  employeeId,
  owner_id,
}: {
  employeeId: string;
  owner_id: string;
}) => {
  const [employee, setEmployee] = useState<User | null>(null);
  const [showDroppdown, updateShowDropdown] = useState(false);
  useEffect(() => {
    const getEmployee = async () => {
      const [error, _employee] = await getUserById(employeeId);
      if (error) {
        alert('oops something happened');
        console.log(error);
      } else if (_employee) {
        setEmployee(_employee);
      }
    }

    getEmployee();
  }, [employeeId])
  return (
    <div className="card relative px-2">
      <div className="p-2 text-right">
        <div id="cardMenu1" className="inline-flex">
          <button className="popper-ref btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            onClick={() => updateShowDropdown(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>

        </div>
      </div>
      <div className="flex grow flex-col items-center px-4 pb-5 sm:px-5">
        <div className="avatar h-20 w-20">
          <img className="rounded-full" src="images/100x100.png" alt="avatar" />
        </div>
        <h3 className="pt-3 text-lg font-medium text-slate-700 dark:text-navy-100">
          {employee?.first_name ?? 'Ibrahim'} {employee?.last_name ?? 'Balde'}
        </h3>
        <p className="text-xs+">{employee?.position}</p>
        <div className="inline-space mt-3 flex grow flex-wrap items-start">
          <a href="#" className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
            Toilet
          </a>
          <a href="#" className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
            Kitchen
          </a>
          <a href="#" className="tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
            Bathroom
          </a>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <button className="btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z"></path>
            </svg>
            <span>Profile</span>
          </button>
          <button className="btn space-x-2 bg-slate-150 px-0 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span> Chat </span>
          </button>
        </div>
      </div>
      {showDroppdown && (
        <EmployeesDropdown
          employee={employee!}
          owner_id={owner_id}
          showDropdown={updateShowDropdown}
        />
      )}
    </div>
  );
};

export default EmployeesComponent;