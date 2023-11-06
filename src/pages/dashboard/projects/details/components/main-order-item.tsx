/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ProjectPositions, User } from "../../../../../types";
import { Dropdown } from "./dropdown";
import { TradeIcons } from "../helper";
import { ChevronRightIcon, FileIcon, PlusIcon } from "../svgs";
import { Dispatch, SetStateAction, useState, useContext, useEffect } from "react";
import { createNewDraft, updateProjectPosition } from "../../helper";
import { notify, NotificationComponent } from "../../../components/notification/toast";
import AddCommentModal from "./add-comment-modal";
import UploadFileModal from "./upload-file-modal";
import { UserAuthContext } from "../../../../../App";
import { getUserById } from "../../../helper/user";

const Button = () => (
  <button className="py-2 px-4 font-bold border border-gray-800 rounded-md shadow-md flex flex-row items-center justify-between">
    <span>
      <PlusIcon width={10} color="#000" />
    </span>
    <span className="ml-2">
      Add Adenum
    </span>
  </button>
)

export const ProjectDetailCard = ({ position, index, project_id }: {
  position: ProjectPositions;
  index: number;
  project_id: string;
}) => {
  const [showDropdown, updateShowDropDown] = useState(false);
  const [showCommentModal, updateShowCommentModal] = useState(false);
  const [showUploadFileModal, updateShowUploadFileModal] = useState(false);
  const [executor, updateExecutor] = useState<User|null>(null)

  useEffect(() => {
    const getExecutor = async () => {
      const [, user] = await getUserById(position?.executor!)
      if (user) {
        updateExecutor(user)
      }
    }

    getExecutor()
  }, [position?.executor])

  return (
    <div className={`${TradeIcons[position?.tradeName!]?.border} rounded-md border-2 m-4 py-6 grid grid-cols-4`} onClick={() => updateShowDropDown(false)}>
      <div className="flex flex-row items-center justify-between md:col-span-1 col-span-4 px-4 md:px-2">
        <span className="bg-gray-900 py-1 px-3 rounded-md text-white">
          {index}
        </span>
        <button className={`${TradeIcons[position?.tradeName!]?.bg} mx-2 px-2 py-1 text-small text-white rounded-md`}>
          {position?.external_id}
        </button>
        <button>
          <FileIcon width={15} color={`${TradeIcons[position?.tradeName!]?.fileColor}`} />
        </button>
        <h3 className="font-bold ml-2">{position?.status}</h3>
      </div>
      <div className="md:col-span-3 col-span-4 my-2 relative">
        <div className="flex flex-col md:flex-row justify-between md:ml-8 md:items-center px-4">
          <h3 className="mr-2 md:mr-0 mt-2 md:mt-0 font-bold">{executor?.first_name}</h3>
          <h3 className="font-bold">Apartment</h3>
          <div className="flex flex-row my-2 justify-between">
            <h3>{position?.units}&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{position?.crowd}&nbsp;|&nbsp;</h3>
            <h3>{position?.price ?? '0.00'} €&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{(Number(position?.crowd) * position?.price!).toFixed(2) ?? '0.00'} €</h3>
            <button className="px-2" onClick={(e) => {
              updateShowDropDown(!showDropdown)
              e.stopPropagation()
            }}>
              <i className="fas fa-ellipsis-vertical" />
            </button>
          </div>
        </div>
        {showDropdown && (
          <MainOrderDropdown
            updateShowUploadFileModal={updateShowUploadFileModal}
            updateShowCommentModal={updateShowCommentModal}
            position={position}
            project_id={project_id}
            trade_id={position.trade!}
          />
        )}

        {showCommentModal && (
          <AddCommentModal
            action={updatePosition}
            position={position}
            project_id={project_id}
            trade_id={position.trade!}
            closeModal={() => updateShowCommentModal(false)}
          />)}
        {showUploadFileModal && (
          <UploadFileModal
            position={position}
            project_id={project_id}
            trade={position.trade!}
            closeModal={() => updateShowUploadFileModal(false)}
          />)}
      </div>
      <div className="p-4 col-span-4 md:col-span-1 my-4">
        <p className="font-bold">{position?.shortText}</p>
      </div>
      <div className="col-span-4 md:col-span-3 p-4">
        <p>{position?.longText ?? ''}</p>
      </div>
    </div>
  )
}

const updatePosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string
) => {
  const [error, payload] = await updateProjectPosition(
    project_id,
    position,
    trade_id
  );

  if (error) {
    notify(
      (<NotificationComponent message={'oops something happened!'} />),
      {
        className: `bg-red-700 font-bold text-white`,
        closeOnClick: true,
      }
    )
    console.log(error)
  }

  if (payload) {
    notify(
      (<NotificationComponent message={'Position updated successfully!'} />),
      {
        className: `bg-green-700 font-bold text-white`,
        closeOnClick: true,
      }
    );
    console.log(payload);
  }
}

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

const MainOrderItem = ({ positions, projectId }: {
  positions: ProjectPositions[],
  projectId: string
}) => {
  return (
    <div className="my-12">
      <div className="bg-white shadow-md rounded py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 px-4 md:px-6">
          <div className="flex flex-row items-center justify-evenly w-3/6 md:w-1/6 my-4">
            <ChevronRightIcon width={10} color="#000" />
            <h3 className="font-bold">Main order items</h3>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {positions && positions.map((position, index) => (
          <ProjectDetailCard position={position} index={index + 1} project_id={projectId} />
        ))}
      </div>
    </div>
  );
};

export default MainOrderItem;