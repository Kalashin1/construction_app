import { FC } from "react";
import { Modal } from "../../../profie/components/account-settings";
import { Button } from "../../../components/current-projects";

type AssignInvoiceIdModalProps = {
  closeModal: (...args: unknown[]) => void
}

const AssignInvoiceIdModal: FC<AssignInvoiceIdModalProps> = ({
  closeModal
}) => {
  return (
    <Modal
      closeModal={closeModal}
      title="Assign Invoice ID"
    >
      <div>
        <label className="block my-4">
          <input
            className="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
            placeholder="Invoice ID"
            type="text"
          />
        </label>
        <Button 
          action={() => {}}
          label="Assign Invoice ID"
        />
      </div>
    </Modal>
  )
}

export default AssignInvoiceIdModal;