/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Timeline, User } from "../../../../../types";
import "flatpickr/dist/themes/material_green.css";
import { Dispatch, SetStateAction } from "react";
import Flatpickr from "react-flatpickr";

const DraftUsers = ({
  type,
  number,
  createdAt,
  sentTo,
  timeline,
  setTimeline
}: {
  type: "INVOICE" | "DRAFT";
  number: number;
  createdAt: string;
  timeline?: {
    startDate: string;
    endDate: string;
  };
  setTimeline: Dispatch<SetStateAction<Timeline>>
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
      <div>
        <span className="flex flex-row space-x-2 items-center">
          <h3>Start Date</h3>
          <div className={`px-4 py-2 border border-gray-300 rounded-md my-4 ml-4`}>
            <Flatpickr
              data-enable-time
              value={timeline?.startDate ?? new Date()}
              onChange={([date]) => {
                setTimeline({ startDate: date, endDate: timeline?.endDate! })
              }}
            />
          </div>
        </span>
        <span className="flex flex-row space-x-2 items-center">
          <h3>End Date</h3>
          <div className={`px-4 py-2 border border-gray-300 rounded-md my-4 ml-4`}>
            <Flatpickr
              data-enable-time
              value={timeline?.endDate ?? new Date()}
              onChange={([date]) => {
                setTimeline({ startDate: timeline?.endDate!, endDate: date })
              }}
            />
          </div>
        </span>
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