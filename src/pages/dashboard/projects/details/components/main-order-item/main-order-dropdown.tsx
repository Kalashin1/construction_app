/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Dispatch, SetStateAction, useContext } from "react";
import { UserAuthContext } from "../../../../../../App";
import { ProjectPositions } from "../../../../../../types";
import { Dropdown } from "../dropdown";
import { changeExtraPosition, updatePosition } from "./update-position";

const MainOrderDropdown = ({
  position,
  project_id,
  trade_id,
  updateShowCommentModal,
  updateShowUploadFileModal,
  type,
  extraOrderId
}: {
  project_id: string,
  position: ProjectPositions;
  trade_id: string;
  extraOrderId?: string
  updateShowCommentModal: Dispatch<SetStateAction<boolean>>;
  updateShowUploadFileModal: Dispatch<SetStateAction<boolean>>;
  type: string
}) => {
  const { user } = useContext(UserAuthContext)
  console.log('trade_id', trade_id)
  // const billPosition = async () => {
  //   if (user && user.role === 'executor') {
  //     const [error, draft] = await createNewDraft({
  //       amount: parseFloat((Number(position?.crowd) * position?.price!).toFixed(2)),
  //       positions: [position?.external_id!],
  //       project: project_id,
  //       user_id: user?._id!,
  //       reciepient: user?.creator?.id,
  //       status: "REQUESTED"
  //     });
  //     if (error) {
  //       console.log(error)
  //       notify(
  //         (<NotificationComponent message={'Error creating draft'} />),
  //         {
  //           className: `bg-red-400 font-bold text-white`,
  //           closeOnClick: true,
  //         }
  //       );
  //     }

  //     if (draft) {
  //       notify(
  //         (<NotificationComponent message={'Draft created successfully!'} />),
  //         {
  //           className: `bg-green-500 font-bold text-white`,
  //           closeOnClick: true,
  //         }
  //       );
  //       console.log(draft)
  //       const [err, payload] = await updateProjectPosition(project_id, { ...position, billed: true, status: 'BILLED' }, trade_id);
  //       if (err) {
  //         notify(
  //           (<NotificationComponent message={'Error updating position'} />),
  //           {
  //             className: `bg-red-400 font-bold text-white`,
  //             closeOnClick: true,
  //           }
  //         );
  //         console.log(err)
  //       }
  //       if (payload) {
  //         console.log(payload);
  //         notify(
  //           (<NotificationComponent message={'position updated successfully!'} />),
  //           {
  //             className: `bg-green-600 font-bold text-white`,
  //             closeOnClick: true,
  //           }
  //         );
  //       }
  //     }

  //   }
  // }
  const mainOrderLinks = [
    { text: 'Reset', action: type === 'position' ? updatePosition : changeExtraPosition, status: "ACCEPTED" },
    { text: 'In Progress', action: type === 'position' ? updatePosition : changeExtraPosition, status: "IN PROGRESS" },
    { text: 'Completed', action: type === 'position' ? updatePosition : changeExtraPosition, status: "COMPLETED" },
    { text: user?.role === 'executor' ? 'Not Feasible' : 'Cancel', action: type === 'position' ? updatePosition : changeExtraPosition, status: "NOT_FEASIBLE" },
    { text: 'Upload Document', handler: () => updateShowUploadFileModal(true) },
    { text: 'Add Comment', handler: () => updateShowCommentModal(true) },
  ];
  return (
    <div className="absolute right-6 top-8">
      <Dropdown>
        <ul>
          {mainOrderLinks.map((link, index) => {

            // if the position has been accepted you cannot reset it
            if ((position.status === 'ACCEPTED') && link.status === 'ACCEPTED') return

            // if the position has been billed or not feasable 
            // you cannot update the status of the position 
            if ((position.status == 'BILLED' || position.billed || position.status === 'NOT_FEASIBLE') && link.status && (link.status === 'COMPLETED' || link.status === 'NOT_FEASIBLE' || link.status === 'IN PROGRESS' || link.status === 'ACCEPTED')) return

            // if the position has not been accepted 
            // you cannot update the status of the position
            if ((position.status === 'CREATED' || position.status === 'ASSIGNED') && link.status && (link.status === 'COMPLETED' || link.status === 'NOT_FEASIBLE' || link.status === 'IN PROGRESS' || link.status === 'ACCEPTED')) return;

            // if the position has been completed
            // you cannot update the status of the position but 
            // you can still reset the status of the position
            if (link.status && (position.status === 'COMPLETED') && (link.status === 'COMPLETED' || link.status === 'NOT_FEASIBLE' || link.status === 'IN PROGRESS')) {
              return;
            }

            // if the position is already in progress 
            // you cannot mark it as in progress again
            if (link.status && position.status === 'IN PROGRESS' && link.status === 'IN PROGRESS') return


            if (link.status)
              return (
                <li key={index}>
                  <button onClick={() => link.action(project_id, { ...position, status: link.status ? link.status : position.status }, trade_id, extraOrderId)} className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 w-full dark:focus:bg-navy-600 dark:focus:text-navy-100">

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