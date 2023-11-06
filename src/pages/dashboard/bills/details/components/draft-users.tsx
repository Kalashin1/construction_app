import { User } from "../../../../../types";

const DraftUsers = ({
  type,
  number,
  createdAt,
  sentTo
}: {
  type: "INVOICE"|"DRAFT";
  number: number;
  createdAt: string;
  sentTo: Pick<User, '_id' | 'email' | 'first_name' | 'address'>
}) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold uppercase text-slate-600 dark:text-navy-100">
          {type}
        </h2>
        <div className="space-y-1 pt-2">
          <p>Invoice #: <span className="font-semibold">{number ?? 0}</span></p>
          <p>
            Created: <span className="font-semibold">{new Date(createdAt).toDateString()}</span>
          </p>
          <p>Due: <span className="font-semibold"> July 23, 2021</span></p>
        </div>
      </div>
      <div className="mt-4 text-center sm:mt-0 sm:text-right">
        <p className="text-lg font-medium text-slate-600 dark:text-navy-100">
          Invoiced To:
        </p>
        <div className="space-y-1 pt-2">
          <p className="font-semibold">{sentTo.first_name}</p>
          <p>{sentTo.email}</p>
          <p>{sentTo?.address?.street} {sentTo?.address?.zip} {sentTo?.address?.province}</p>
        </div>
      </div>
    </div>
  )
}

export default DraftUsers;