import { useState, useEffect } from "react";
import { ProjectPositions, User } from "../../../../../../types";
import { getUserById } from "../../../../helper/user";
import { TradeIcons } from "../../helper";
import { FileIcon } from "../../svgs";
import AddCommentModal from "../add-comment-modal";
import UploadFileModal from "../upload-file-modal";
import MainOrderDropdown from "./main-order-dropdown";
import { updatePosition } from "./update-position";

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
export const ProjectDetailCard = ({ position, index, project_id }: {
  position: ProjectPositions;
  index: number;
  project_id: string;
}) => {
  const [showDropdown, updateShowDropDown] = useState(false);
  const [showCommentModal, updateShowCommentModal] = useState(false);
  const [showUploadFileModal, updateShowUploadFileModal] = useState(false);
  const [executor, updateExecutor] = useState<User | null>(null)

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
    <div id={position.tradeName} className={`${TradeIcons[position?.tradeName!]?.border} rounded-md border-2 m-4 py-6 grid grid-cols-4`} onClick={() => updateShowDropDown(false)}>
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

export default ProjectDetailCard;