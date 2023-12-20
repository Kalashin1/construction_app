/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useMemo } from "react";
import { ProjectPositions } from "../../../../../types";
import { formatter } from "../../../helper/tools";

const DraftFooter = ({
  addendums,
  positions
}: {
  total?: string;
  positions: ProjectPositions[];
  addendums: {
    id: string;
    positions: ProjectPositions[];
  }[];
}) => {
  const addendumBreakdown = useMemo(() => {
    const mapped: {
      id: string;
      amount: number
    }[] = []
    for (const addendum of addendums) {
      let amount = 0;
      for (const position of addendum.positions) {
        amount += Math.ceil(position?.price! * parseFloat(position.crowd!));
      }
      mapped.push({
        id: addendum.id,
        amount
      })
    }
    return mapped
  }, [addendums])

  const getMainOrderBreakdown = useMemo(() => {
    let total = 0;
    for (const position of positions) {
      total += Math.ceil(position?.price! * parseFloat(position.crowd!))
    }
    return total;
  }, [positions])
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
          <p>Main Order Items: <span className="font-medium">${formatter.format(getMainOrderBreakdown)}</span></p>
          {addendumBreakdown.map((addendum, index) => {
            return (
              <p>Addendum-{index + 1}: <span className="font-medium">{formatter.format(addendum.amount)}</span></p>
            )
          })}
          <p>Discount : <span className="font-medium">$0</span></p>
          <p>Tax : <span className="font-medium">0%</span></p>
          <p className="text-lg text-primary dark:text-accent-light">
            Total: <span className="font-medium">
              {formatter.format(
                getMainOrderBreakdown + addendumBreakdown.map(
                  (ad) => (ad.amount)
                ).reduce(
                  (prev, current) => (prev + current)
                )
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DraftFooter;