import { Button } from "../../../../../components/current-projects";

const TargetSales = () => {
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800">
      <div className="p-8 flex flex-row justify-between">
        <h3>
          <span className="mr-2">
            <i className="fas fa-euro" />
          </span>
          <span className="text-md">
            Target Sales
          </span>
        </h3>

        
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="grid grid-cols-2 p-6 space-y-8 justify-between items-center h-44">
        
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-8">
        <Button 
          action={() => {}}
          label="Add/Change target sales"
          color="bg-primary"
          textColor="text-white text-xs"
        />
      </div>
    </div>
  );
};

export default TargetSales;