import { Button } from "../../../components/current-projects";
import { Modal } from "../../../profie/components/account-settings"
import { ProjectPositions } from "../../../../../types";
import { useState } from "react";

const AddCommentModal = ({
  closeModal,
  position,
  project_id,
  trade_id,
  action
}: {
  closeModal: (...args: unknown[]) => void;
  position: ProjectPositions;
  project_id: string;
  trade_id: string;
  action: (project_id: string, position: ProjectPositions, trade_id: string) => Promise<void>
}) => {
  const [comment, updateComment] = useState('')
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

        <Button action={() => { action(project_id, {...position, comment }, trade_id)}} label="Add Comment" />
      </div>
    </Modal>
  )
}

export default AddCommentModal;