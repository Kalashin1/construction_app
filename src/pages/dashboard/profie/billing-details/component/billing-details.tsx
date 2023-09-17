import { Button } from "../../../components/current-projects";
import { DisabledInput } from "../../number-ranges/components/number-range";

const BillingDetails = () => {
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
          <span className="bg-green-400 px-4 py-1 rounded-md text-white">
            <i className="fas fa-pen-to-square" />
          </span>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <DisabledInput label="tax number" />
        <DisabledInput label="Tax ID" />
        <DisabledInput label="Cash Discount" />
        <DisabledInput label="Discount Period" />
        <DisabledInput label="Payment Deadline" />
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