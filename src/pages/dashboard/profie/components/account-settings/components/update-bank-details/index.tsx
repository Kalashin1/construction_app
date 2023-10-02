import { useRef, useState, useContext } from "react";
import { Modal } from "../..";
import { UserBankDetails } from "../../../../../../../types";
import { Input } from "../../../../../../auth/components";
import { Button } from "../../../../../components/current-projects";
import { updateUserBankDetails} from "../../../../../helper/user";
import { UserAuthContext } from "../../../../../../../App";

export const UpdateBankDetailsModal = ({
  _id,
  closeModal,
  bankDetails,
}: {
  _id: string,
  closeModal: (...args: unknown[]) => void,
  bankDetails: UserBankDetails;
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const {
    getUser, 
    setCurrentUser,
  } = useContext(UserAuthContext);

  const updateBankDetails = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    showIsLoading(true);
    const { bank: { value: bank }, iban: { value: iban }, bic: { value: bic } } = form;
    const [error, payload] = await updateUserBankDetails(_id, bankDetails, {
      bank,
      iban,
      bic
    })
    showIsLoading(false)
    if (error) {
      alert('oops something happened!');
      console.log(error);
    } else if (payload) {
      console.log(payload)
      alert('bank details updated successfuly')
      closeModal()
      const [, _user] = await getUser!();
      if (_user)
        setCurrentUser!(_user)
    }
  }

  return (
    <Modal
      title="Select New Stand In"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <Input
          placeholder="deutshbank"
          type="text"
          defaultValue={bankDetails.bank}
          name="bank"
        />
        <Input
          placeholder="Iban"
          type="text"
          defaultValue={bankDetails.iban}
          name="iban"
        />
        <Input
          placeholder="bic"
          defaultValue={bankDetails.bic}
          type="text"
          name="bic"
        />
        <Button
          label="Add Bank Details"
          action={(e) => { updateBankDetails(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}