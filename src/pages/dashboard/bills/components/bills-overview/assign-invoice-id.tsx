/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { FC, useContext, useState } from "react";
import { Modal } from "../../../profie/components/account-settings";
import { Button } from "../../../components/current-projects";
import { createInvoice } from "../../helper";
import { UserAuthContext } from "../../../../../App";
import { notify, NotificationComponent } from "../../../components/notification/toast";

type AssignInvoiceIdModalProps = {
  closeModal: (...args: unknown[]) => void;
  draft_id: string;
}

const AssignInvoiceIdModal: FC<AssignInvoiceIdModalProps> = ({
  closeModal,
  draft_id
}) => {
  const [external_id, setExternal_id] = useState('');
  const { user } = useContext(UserAuthContext);
  console.log(draft_id)
  const makeInvoice = async () => {
    const [error, payload] = await createInvoice(draft_id, user?._id!, external_id, user?.creator?.id!);
    if (error) {
      notify(
        (<NotificationComponent message={'error creating invoice!'} />),
        {
          className: `bg-red-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }
    if (payload) {
      notify(
        (<NotificationComponent message={'Invoice created successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(payload)
      closeModal()
    }
  }
  return (
    <Modal
      closeModal={closeModal}
      title="Assign Invoice ID"
    >
      <div>
        <label className="block my-4">
          <input
            className="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
            onChange={(e) => setExternal_id(e.target.value)}
            placeholder="Invoice ID"
            value={external_id}
            type="text"
          />
        </label>
        <Button
          action={makeInvoice}
          label="Assign Invoice ID"
        />
      </div>
    </Modal>
  )
}

export default AssignInvoiceIdModal;