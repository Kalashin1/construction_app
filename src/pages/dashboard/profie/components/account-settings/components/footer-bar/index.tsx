/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useContext, useState } from "react";
import { StandIn, ReferrerType } from "../../../../../../../types";
import { deleteEmployeeStandIn } from "../../../../../helper/user";
import UpdateFooterBarModal from "./update-footerbar-modal";
import { UserAuthContext } from "../../../../../../../App";

type FooterBarProps = {
  standIns: StandIn[]
  employee: ReferrerType[];
}

const FooterBar = (Props: FooterBarProps) => {
  const [showModal, updateShowModal] = useState(false);
  const {setCurrentUser, getUser, user} = useContext(UserAuthContext);
  console.log(Props.standIns)
  const deleteStandIn = async (employee_id: string) => {
    if (confirm('Are you sure you want to delete this stand in')) {
      const [error, payload] = await deleteEmployeeStandIn(
        user?._id!,
        employee_id
      );

      if (error) {
        alert('oops something happened!');
        console.log(error);
      } else if (payload) {
        alert('deleted successfully');
        console.log(payload);
        updateShowModal(false);
        const [, _user] = await getUser!();
        if (_user)
          setCurrentUser!(_user)
      }
    }
  }
  return (
    <div className="bg-white dark:bg-navy-600 my-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between px-4 py-4">
        <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          <span>
            <i className="fas fa-users" />
          </span>
          <span className="ml-4">
            Stand In
          </span>
        </h3>


        <button
          onClick={() => updateShowModal(true)}
        >
          <i className="fas fa-plus text-lg font-medium" />
        </button>
      </div>
      <div className="p-6">
        <div className="text-lg font-medium tracking-wide text-center text-slate-700 dark:text-navy-100 dark:text-black px-4 dark:bg-transparent bg-gray-300 py-2 my-1 flex flex-row justify-between">
         <span>First Name</span>
         <span>Last Name</span>
         <span>Position</span>
         <span>Action</span>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {Props.standIns && Props.standIns.map((stdIn) => (
          <div className="flex flex-row justify-between">
            <h3>{stdIn.last_name ?? stdIn.email}</h3>

            <div>

              <button
                className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600"
                onClick={() => deleteStandIn(stdIn._id)}
              >
                <i className="fas fa-times text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (<UpdateFooterBarModal
        closeModal={() => updateShowModal(false)}   />)}
    </div>
  )
}

export default FooterBar;