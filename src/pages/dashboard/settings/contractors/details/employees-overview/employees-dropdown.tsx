/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Dispatch, SetStateAction } from "react";
import { assignStandIn } from "../../../../helper/user";
import { User } from "../../../../../../types";

const DropdownItem = ({
  employee,
  owner_id
}: {
  employee: User;
  owner_id: string;
}) => {
  const assignNewStandIn = async () => {
    console.log(owner_id, employee)
    // @ts-ignore
    const [err, payload] = await assignStandIn(owner_id, { ...employee! });
    if (err) {
      alert('oops something happened');
      console.log(err);
    } else if (payload) {
      alert('Stand-in set successfully')
      console.log(payload);
    }
  }
  return (
    <>
      <li>
        <button
          className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent w-full"
          onClick={assignNewStandIn}
        >
          <span>
            <i className="fas fa-user" />
          </span>
          <span>Make StandIn</span>
        </button>
      </li>
      <li>
        <div
          className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
        >
          <span>
            <i className="fas fa-user" />
          </span>
          <span>Change Role</span>
        </div>
      </li>
      <li>
        <div
          className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
        >
          <span>
            <i className="fas fa-user" />
          </span>
          <span>Send Contract</span>
        </div>
      </li>
    
      <li>
        <div
          className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
        >
          <span>
            <i className="fas fa-user" />
          </span>
          <span>disable account</span>
        </div>
      </li>
    </>
  )
}

const EmployeesDropdown = ({
  showDropdown,
  employee,
  owner_id
}: {
  showDropdown: Dispatch<SetStateAction<boolean>>;
  employee: User;
  owner_id: string;
}) => {
  return (
    <div className="w-full absolute top-12 left-8 lg:left-16 xl:left-8" style={{ zIndex: '199999' }} onClick={(e) => {
      e.stopPropagation();
      showDropdown(false);
    }}>
      <div className="card p-4 w-5/6 bg-gray-200 sm:p-5">
        <ul className="space-y-1.5 font-inter font-medium">
          <DropdownItem
            employee={employee}
            owner_id={owner_id}
          />
        </ul>
      </div>
    </div>
  )
}

export default EmployeesDropdown;