export const DisabledInput = ({
  label
}: {
  label: string
}) => (
  <div className="my-2">
    <label className="flex flex-row items-center">
      <span className="text-md text-slate-400 dark:text-navy-300 mr-4 md:w-2/5">
        {label}
      </span>
      <input
        disabled
        className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
        placeholder="Disabled"
        type="text"
      />
    </label>
  </div>
)

const NumberRangeInvoice = ({
  title,
  showFooter = true
}: {
  title: string,
  showFooter?: boolean
}) => (
  <div className="bg-white rounded-md shadow-sm my-4 dark:bg-navy-600">
    <div className="flex flex-row justify-between p-4">
      <h3 className="px-2">
        <span>
          <i className="fas fa-list" />
        </span>
        <span className="pl-2">
          {title}
        </span>
      </h3>


    </div>
    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

    <div className="grid grid-cols-2 px-6 py-4 gap-x-4 justify-between w-full">
      <div>
        <h3>Draft</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <div className="my-4">
          <DisabledInput label="Prefix" />
          <DisabledInput label="Next Number" />
        </div>

      </div>
      <div>
        <h3>The Invoice</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <div className="my-4">
          <DisabledInput label="Prefix" />
          <DisabledInput label="Next Number" />
        </div>

      </div>

    </div>

    <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
    {showFooter && (<h3 className="px-8 py-2">Manual numbering was chosen for invoices.</h3>)}
  </div>
)

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
    <NumberRangeInvoice title="Number Ranges invoices" />
  <NumberRangeInvoice title="Number ranges for internal activity allocation" showFooter={false} />
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