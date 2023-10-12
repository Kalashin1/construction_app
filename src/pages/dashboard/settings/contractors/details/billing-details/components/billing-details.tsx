import { useParams } from "react-router-dom";
import { Button } from "../../../../../components/current-projects";
import { getUserById } from "../../../../../helper/user";
import { useEffect, useState } from "react";
import { User } from "../../../../../../../types";

const BillingDetails = () => {
  const {id} = useParams();
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    const getUserDetails = async (id: string) => {
      const [error, _user] = await getUserById(id)
      if(error) {
        alert('error getting user account');
        console.log(error);
      }

      if (_user) {
        console.log(_user);
        setUser(_user)
      }
    }

    getUserDetails(id!)
  }, [id])
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between">
        <h3>
          <span className="mr-2">
            <i className="fas fa-file-lines" />
          </span>
          <span className="text-md">
            Agreed terms of payment
          </span>
        </h3>

      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="grid grid-cols-2 p-6 space-y-8 justify-between items-center">
        <span>Cash Discount</span><span>{user?.billingDetails?.cashDiscount ?? 'NIL'}</span>
        <span>Discount Period</span><span>{user?.billingDetails?.discountPeriod ?? 'NIL'}</span>
        <span>Payment Deadline</span><span>{user?.billingDetails?.paymentDeadline ?? 'NIL'}</span>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-8">
        <Button 
          action={() => {}}
          label="Change payment terms"
          color="bg-primary"
          textColor="text-white text-xs"
        />
      </div>
    </div>
  );
};

export default BillingDetails;