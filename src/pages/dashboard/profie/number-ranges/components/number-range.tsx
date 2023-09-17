const HeaderBar = () => (
  <>
    <div className="my-4 px-4 bg-white rounded shadow-sm font-bold py-4 dark:bg-navy-600 dark:text-white">
      <div className="flex flex-row justify-between">
        <h3>
          <span className="font-bold">Note :</span>
          <span className="font-normal">If you want to change the number ranges, please contact the MAGGA Support Team.</span></h3>

        <span>
          <i className="fas fa-times" />
        </span>
      </div>
    </div>
    <div className="bg-white rounded-md shadow-sm my-4 dark:bg-navy-600">
      <div className="flex flex-row justify-between p-4">
        <h3 className="px-2">
          <span>
            <i className="fas fa-list" />
          </span>
          <span className="pl-2">
            Number Ranges
          </span>
        </h3>

        
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between w-full">
        <h3>Logo</h3>
        <h3>Icon</h3>
        <h3>Invoice Logo</h3>
      </div>
      <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between">
        <span>
          No Image
        </span>
        <span>
          No Image
        </span>
        <span>
          No Image
        </span>

      </div>
    </div>
  </>
)

const NumberRangeComponent = () => {
  return (
    <div>
      <HeaderBar />
    </div>
  );
};

export default NumberRangeComponent;