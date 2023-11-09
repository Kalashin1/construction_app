/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Dispatch, SetStateAction, useContext } from "react";
import { UserAuthContext } from "../../../../../../App";
import { ProjectPositions } from "../../../../../../types";
import { notify, NotificationComponent } from "../../../../components/notification/toast";
import { createNewDraft, updateProjectPosition } from "../../../helper";
import { Dropdown } from "../dropdown";
import { updatePosition } from "./update-position";

const MainOrderDropdown = ({
  position,
  project_id,
  trade_id,
  updateShowCommentModal,
  updateShowUploadFileModal
}: {
  project_id: string,
  position: ProjectPositions;
  trade_id: string;
  updateShowCommentModal: Dispatch<SetStateAction<boolean>>;
  updateShowUploadFileModal: Dispatch<SetStateAction<boolean>>;

}) => {
  const { user } = useContext(UserAuthContext)
  console.log(user?.creator.id)
  const billPosition = async () => {
    if (user && user.role === 'executor') {
      const [error, draft] = await createNewDraft({
        amount: parseFloat((Number(position?.crowd) * position?.price!).toFixed(2)),
        positions: [position?.external_id!],
        project: project_id,
        user_id: user?._id!,
        reciepient: user?.creator?.id,
        status: "REQUESTED"
      });
      if (error) {
        console.log(error)
        notify(
          (<NotificationComponent message={'Error creating draft'} />),
          {
            className: `bg-red-400 font-bold text-white`,
            closeOnClick: true,
          }
        );
      }

      if (draft) {
        notify(
          (<NotificationComponent message={'Draft created successfully!'} />),
          {
            className: `bg-green-500 font-bold text-white`,
            closeOnClick: true,
          }
        );
        console.log(draft)
        const [err, payload] = await updateProjectPosition(project_id, { ...position, billed: true, status: 'BILLED' }, trade_id);
        if (err) {
          notify(
            (<NotificationComponent message={'Error updating position'} />),
            {
              className: `bg-red-400 font-bold text-white`,
              closeOnClick: true,
            }
          );
          console.log(err)
        }
        if (payload) {
          console.log(payload);
          notify(
            (<NotificationComponent message={'position updated successfully!'} />),
            {
              className: `bg-green-600 font-bold text-white`,
              closeOnClick: true,
            }
          );
        }
      }

    }
  }
  const mainOrderLinks = [
    { text: 'Completed', action: updatePosition, status: "COMPLETED" },
    { text: 'Not Feasible', action: updatePosition, status: "NOT_FEASIBLE" },
    { text: 'Upload Document', handler: () => updateShowUploadFileModal(true) },
    { text: 'Bill', handler: () => billPosition() },
    { text: 'Add Comment', handler: () => updateShowCommentModal(true) },
  ];
  return (
    <div className="absolute right-6 top-8">
      <Dropdown>
        <ul>
          {mainOrderLinks.map((link, index) => {
            if (link.status)
              return (
                <li key={index}>
                  <button onClick={() => link.action(project_id, { ...position, status: link.status ? link.status : position.status }, trade_id)} className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 w-full dark:focus:bg-navy-600 dark:focus:text-navy-100">

                    <span> {link.text}</span></button>
                </li>
              )
            else return (
              <li key={index}>
                <button onClick={() => link.handler!()} className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 w-full dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">

                  <span> {link.text}</span></button>
              </li>
            )
          })}
        </ul>
      </Dropdown>
    </div>
  )
}
export default MainOrderDropdown;