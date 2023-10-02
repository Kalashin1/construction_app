import { useContext, useState } from "react";
import { UserBankDetails } from "../../../../../../../types";
import { deleteUserBankDetails } from "../../../../../helper/user";
import { CreateBankDetailsModal } from "../create-bank-details";
import { UpdateBankDetailsModal } from "../update-bank-details";
import { UserAuthContext } from "../../../../../../../App";

type BankDetailsProps = {
  _id?: string;
  bankDetails?: UserBankDetails[];
};

export const BankDetails = (Props: BankDetailsProps) => {
  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);
  const [showBankDetailsUpdateModal, setShowBankDetailsUpdateModal] = useState(false);
  const [selectedBankDetails, updateSelectedBankDetails] = useState<UserBankDetails | null>(null);

  const {
    getUser,
    setCurrentUser,
  } = useContext(UserAuthContext);

  const deleteBankDetails = async (bankDetails: UserBankDetails) => {
    console.log(bankDetails)
    if (confirm('are you sure you want to delete this bank detail')) {
      const [error, payload] = await deleteUserBankDetails(
        Props._id!,
        bankDetails
      );
      if (error) {
        alert('oops something happened!')
        console.log(error);
      } else if (payload) {
        console.log(payload);
        alert('bank details deleted successfully!')
        // location.reload();
        const [, _user] = await getUser!();
        if (_user)
        setCurrentUser!(_user)
      }
    }
  }

  return (
    <div className="bg-white dark:bg-navy-600 my-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between px-4 py-4">
        <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          <span>
            <i className="fas fa-credit-card" />
          </span>
          <span className="ml-4">
            Bank Details
          </span>
        </h3>


        <button onClick={() => setShowBankDetailsModal(true)}>
          <i className="fas fa-plus text-lg font-medium" />
        </button>
      </div>
      <div className="p-6">
        <div className="text-lg font-medium tracking-wide text-center text-slate-700 dark:text-navy-100 dark:text-black dark:bg-transparent bg-gray-300 py-2 my-1 flex flex-row justify-between px-2">
          <span>
            Surname
          </span>
          <span>
            Iban
          </span>
          <span>
            BIC
          </span>
          <span>
            &nbsp;
          </span>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {Props.bankDetails && Props.bankDetails.map((bankD) => (
          <div className="flex flex-row justify-between py-2 px-2">
            <h3>{bankD.bank!}</h3>

            <h3>{bankD.iban}</h3>

            <h3>{bankD.bic}</h3>

            <div>
              <button
                className="py-1 px-2 my-2 rounded-md bg-gray-500"
                onClick={() => {
                  updateSelectedBankDetails(bankD);
                  setShowBankDetailsUpdateModal(true)
                }}
              >
                <i className="fas fa-pen-to-square text-white" />
              </button>
              <button
                className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600"
                onClick={() => deleteBankDetails(bankD)}
              >
                <i className="fas fa-times text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showBankDetailsModal && (
        <CreateBankDetailsModal
          _id={Props._id!}
          closeModal={() => setShowBankDetailsModal(false)}
        />)}
      {showBankDetailsUpdateModal && (
        <UpdateBankDetailsModal
          _id={Props._id!}
          bankDetails={selectedBankDetails!}
          closeModal={() => setShowBankDetailsUpdateModal(false)}
        />)}
    </div>
  )
}