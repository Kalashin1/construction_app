/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useRef, useState } from "react";
import { BillingDetails as BillingDetailsType } from "../../../../../types";
import { Button } from "../../../components/current-projects";
import { DisabledInput } from "../../number-ranges/components/number-range";
import { User } from "../../../../../types";
import { getUserFromToken, updateUserProfile } from "../../../helper/user";

const BillingDetails = () => {
  const [editDetails, showEditDetails] = useState(false);
  const token = sessionStorage.getItem('userToken')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const abrtCnt = new AbortController();

    const setUp = async () => {
      const [err, _user] = await getUserFromToken(token!, abrtCnt);
      if (err) {
        console.log(err);
      } else if (_user) {
        setUser(_user);
        console.log(_user);
        user?.billingDetails && setBillingDetails(_user?.billingDetails!);
      }
    }

    setUp();
  }, [token]);

  const [isLoading, setIsLoading] = useState(false)

  const editBillingDetials = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault()
    setIsLoading(true);
    const { 
      taxNumber: { value: taxNumber }, 
      taxId: { value: taxId }, 
      cashDiscount: { value: cashDiscount }, 
      discountPeriod: { value: discountPeriod }, 
      paymentDeadline: { value: paymentDeadline }
    } = form;
    const [err, _user] = await updateUserProfile({
      _id: user?._id,
      billingDetails: {
        taxNumber, taxId, cashDiscount, discountPeriod, paymentDeadline
      }
    });
    setIsLoading(false);
    if (err) {
      alert('oops something happened!');
      console.log(err);
    } else if (_user) {
      alert('your billing details have been updated successfully!');
      setUser(_user);
      showEditDetails(true)
      console.log(_user);
    }
  }

  const form = useRef<HTMLFormElement | null>(null)

  const [billingDetails, setBillingDetails] = useState<BillingDetailsType | null>(null);
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between">
        <h3>
          <span className="mr-2">
            <i className="fas fa-file-lines text-xl" />
          </span>
          <span className="text-md">
            Billing details & payment terms
          </span>
        </h3>

        <div>
          <button className="bg-green-400 px-4 py-1 rounded-md text-white" onClick={() => showEditDetails(false)}>
            <i className="fas fa-pen-to-square" />
          </button>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <form className="p-6" ref={form}>
        <DisabledInput
          name="taxNumber"
          defaultValue={billingDetails?.taxNumber}
          disabled={editDetails}
          label="tax number"
        />
        <DisabledInput
          name="taxId"
          defaultValue={billingDetails?.taxId}
          disabled={editDetails}
          label="Tax ID"
        />
        <DisabledInput
          name="cashDiscount"
          defaultValue={billingDetails?.cashDiscount}
          disabled={editDetails}
          label="Cash Discount"
        />
        <DisabledInput
          name="discountPeriod"
          defaultValue={billingDetails?.discountPeriod}
          disabled={editDetails}
          label="Discount Period"
        />
        <DisabledInput
          name="paymentDeadline"
          disabled={editDetails}
          label="Payment Deadline"
          defaultValue={billingDetails?.paymentDeadline}
        />
      </form>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-8">
        <Button
          action={(e) => { editBillingDetials(e as Event, form.current!) }}
          disabled={isLoading}
          label="Change payment terms"
          color="bg-primary"
          textColor="text-white text-xs"
        />
      </div>
    </div>
  );
};

export default BillingDetails;