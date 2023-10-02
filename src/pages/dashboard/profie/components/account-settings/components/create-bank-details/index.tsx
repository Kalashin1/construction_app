import { useContext, useRef, useState } from "react";
import { Modal } from "../..";
import { Button, Input } from "../../../../../../auth/components";
import { updateUserProfile } from "../../../../../helper/user";
import { UserAuthContext } from "../../../../../../../App";

export const CreateBankDetailsModal = ({ _id, closeModal }: {
  _id: string;
  closeModal: (...args: unknown[]) => void;
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const {
    setCurrentUser
  } = useContext(UserAuthContext);

  const addBankDetails = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    showIsLoading(true);
    const { bank: { value: bank }, iban: { value: iban }, bic: { value: bic } } = form;
    const [err, user] = await updateUserProfile({ bankDetails: { bank, iban, bic }, _id });
    showIsLoading(false);
    if (err) {
      alert('oops something happened!');
    } else if (user) {
      alert('bank details added successfully!');
      closeModal()
      setCurrentUser!(user)
    }
  }

  return (
    <Modal
      title="Add Your bank details"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <Input
          placeholder="deutshbank"
          type="text"
          name="bank"
        />
        <Input
          placeholder="Iban"
          type="text"
          name="iban"
        />
        <Input
          placeholder="bic"
          type="text"
          name="bic"
        />
        <Button
          label="Add Bank Details"
          action={(e) => { addBankDetails(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}