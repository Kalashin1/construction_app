/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Button } from "../../../components/current-projects";
import { Modal } from "../../../profie/components/account-settings"
import { MESSAGE_STATUS, Message, ProjectPositions } from "../../../../../types";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../../../../App";
import { getProject } from "../../../helper/project";
import { NotificationComponent, notify } from "../../../components/notification/toast";

const AddCommentModal = ({
  closeModal,
  position,
  project_id,
  trade_id,
  executor,
  action
}: {
  closeModal: (...args: unknown[]) => void;
  position: ProjectPositions;
  project_id: string;
  trade_id: string;
  executor: string;
  action: (message: Message, closeModal: (...args: unknown[]) => void) => Promise<void>
}) => {
  const [comment, updateComment] = useState('');
  const { user } = useContext(UserAuthContext);
  const [receivers, setReceivers] = useState<string[]>([]);

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(project_id);
      if (error) {
        notify(
          (<NotificationComponent message="Error fetching project" />),
          { className: "bg-red-500 text-white" }
        )
      }

      if (_project) {
        if (user?.role === 'contractor') {
          setReceivers([executor])
        } else if (user?.role === 'executor') {
          setReceivers([_project.contractor])
        }

      }
    }

    setUp();
  }, [executor, project_id, user?.role])


  const generatePayload = (): Message => ({
    content: comment,
    owner_id: user?._id!,
    status: MESSAGE_STATUS[0],
    position_id: position._id,
    project_id: project_id,
    trade_id: trade_id,
    reciever_id: receivers
  })

  return (
    <Modal
      title="Add comment"
      closeModal={closeModal}
    >
      <div className="card">
        <label className="block">
          <textarea
            rows={4}
            placeholder=" Enter Text"
            value={comment}
            onChange={e => updateComment(e.target.value)}
            className="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          ></textarea>
        </label>

        <Button action={() => { action(generatePayload(), closeModal) }} label="Add Comment" />
      </div>
    </Modal>
  )
}

export default AddCommentModal;