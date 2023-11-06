const DraftFooter = ({
  total
}: {
  total: string;
}) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
          Payment Method:
        </p>
        <div className="space-y-1 pt-2">
          <p className="font-medium">Visa **** **** 1234</p>
        </div>
      </div>
      <div className="mt-4 text-center sm:mt-0 sm:text-right">
        <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
          Total:
        </p>
        <div className="space-y-1 pt-2">
          <p>Positions : <span className="font-medium">${total}</span></p>
          <p>Discount : <span className="font-medium">$0</span></p>
          <p>Tax : <span className="font-medium">0%</span></p>
          <p className="text-lg text-primary dark:text-accent-light">
            Total: <span className="font-medium">{total}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DraftFooter;