import { useState, useEffect, useContext, Dispatch, SetStateAction } from "react";
import { ProjectPositions, User } from "../../../../../../types";
import { getUserById } from "../../../../helper/user";
import { TradeIcons } from "../../helper";
import { FileIcon } from "../../svgs";
import AddCommentModal from "../add-comment-modal";
import UploadFileModal from "../upload-file-modal";
import MainOrderDropdown from "./main-order-dropdown";
import { sendMessage } from "./update-position";
import UploadedFileModal from "./uploaded-file-modal";
import { UserAuthContext } from "../../../../../../App";
import { formatter } from "../../../../helper/tools";

/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
export const ProjectDetailCard = ({
  position,
  index,
  project_id,
  type,
  extraOrderId,
  selectedIds,
  updateSelectedId
}: {
  position: ProjectPositions;
  index: number;
  project_id: string;
  type: string;
  extraOrderId?: string;
  selectedIds?: string[];
  updateSelectedId?: Dispatch<SetStateAction<string[]>>
}) => {
  const [showDropdown, updateShowDropDown] = useState(false);
  const [showCommentModal, updateShowCommentModal] = useState(false);
  const [showUploadFileModal, updateShowUploadFileModal] = useState(false);
  const [showFileModal, updateShowFileModal] = useState(false)
  const [executor, updateExecutor] = useState<User | null>(null)
  const { user } = useContext(UserAuthContext);
  const isContractorOrOwner = user?.role === 'contractor' || user?._id === executor?._id

  useEffect(() => {
    const getExecutor = async () => {
      const [, user] = await getUserById(position?.executor!)
      if (user) {
        updateExecutor(user)
      }
    }

    getExecutor()
  }, [position?.executor])

  const isSelectd = selectedIds?.find((id => id === position.external_id));

  const selectPosition = () => {
    updateShowDropDown(false);
    if (!isSelectd && updateSelectedId) {
      updateSelectedId([...selectedIds as string[], position?.external_id!]);
      return;
    }
    updateSelectedId && updateSelectedId(selectedIds?.filter((id) => id !== position?.external_id!)!)
  }

  return (
    <div
      id={type === 'position' ? position.tradeName : `addendum-${position.tradeName}`}
      className={`${!isSelectd && TradeIcons[position?.tradeName!]?.border} rounded-md border-2 m-4 py-6 grid grid-cols-4 ${isSelectd && TradeIcons[position?.tradeName!].bg} ${isSelectd && TradeIcons[position?.tradeName!].textColor}`}
      onClick={selectPosition}
    >
      <div className={`flex flex-row items-center justify-between md:col-span-1 col-span-4 px-4 md:px-2`}>
        <span className="bg-gray-900 py-1 px-3 rounded-md text-white">
          {index}
        </span>
        <button className={`${TradeIcons[position?.tradeName!]?.bg} mx-2 px-2 py-1 text-small text-white rounded-md`}>
          {position?.external_id}
        </button>
        {position.documentURL && (<button onClick={() => updateShowFileModal(true)}>
          <FileIcon width={15} color={`${!isSelectd ? TradeIcons[position?.tradeName!]?.fileColor : 'white'}`} />
        </button>)}
        <h3 className="font-bold ml-2">{position?.status}</h3>
      </div>
      <div className="md:col-span-3 col-span-4 my-2 relative">
        <div className="flex flex-col md:flex-row justify-between md:ml-8 md:items-center px-4">
          <h3 className="mr-2 md:mr-0 mt-2 md:mt-0 font-bold">{executor?.first_name}</h3>
          <h3 className="font-bold">Apartment</h3>
          <div className="flex flex-row my-2 justify-between">
            <h3>{position?.units}&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{position?.crowd}&nbsp;|&nbsp;</h3>
            <h3>{isContractorOrOwner && (formatter.format(position?.price ?? 0))}&nbsp;|&nbsp;</h3>
            <h3>&nbsp;{isContractorOrOwner && (formatter.format((Number(position?.crowd) * position?.price!)) ?? '0.00')}</h3>
            {isContractorOrOwner && (<button className="px-2" onClick={(e) => {
              updateShowDropDown(!showDropdown)
              e.stopPropagation()
            }}>
              <i className="fas fa-ellipsis-vertical" />
            </button>)}
          </div>
        </div>
        {showDropdown && isContractorOrOwner && (
          <MainOrderDropdown
            type={type}
            extraOrderId={extraOrderId}
            updateShowUploadFileModal={updateShowUploadFileModal}
            updateShowCommentModal={updateShowCommentModal}
            position={position}
            project_id={project_id}
            trade_id={position.trade!}
          />
        )}
        {showFileModal && (
          <UploadedFileModal
            closeModal={() => updateShowFileModal(false)}
            title={position?.external_id!}
            image={position?.documentURL}
          />
        )}
        {showCommentModal && isContractorOrOwner && (
          <AddCommentModal
            action={sendMessage}
            executor={position?.executor!}
            position={position}
            project_id={project_id}
            trade_id={position.trade!}
            closeModal={() => updateShowCommentModal(false)}
          />)}
        {showUploadFileModal && isContractorOrOwner && (
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