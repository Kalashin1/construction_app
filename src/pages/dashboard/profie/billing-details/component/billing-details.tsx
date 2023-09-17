import { Button } from "../../../components/current-projects";

const BillingDetails = () => {
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

        <div>
          <span className="bg-green-400 px-4 py-1 rounded-md text-white">checked</span>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="grid grid-cols-2 p-6 space-y-8 justify-between items-center">
        <span>Cash Discount</span><span>-</span>
        <span>Discount Period</span><span>-</span>
        <span>Payment Deadline</span><span>7 days</span>
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