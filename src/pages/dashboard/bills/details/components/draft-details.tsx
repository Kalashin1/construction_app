import { Draft } from "../../../../../types"
import { formatter } from "../../../helper/tools"
import DraftFooter from "./draft-footer"
import DraftHeader from "./draft-header"
import DraftPositions from "./draft-positions"
import DraftUsers from "./draft-users"

const DraftDetails = ({ draft, type }: {
  draft: Draft,
  type: "DRAFT" | "INVOICE"
}) => {
  return (
    <div className="grid grid-cols-1">
      <div className="card px-5 py-12 sm:px-18">
        <DraftHeader />
        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <DraftUsers
          createdAt={draft.createdAt}
          number={draft.number}
          sentTo={draft.reciepient}
          type={type}
        />
        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <DraftPositions positions={draft.positions} />
        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <DraftFooter total={formatter.format(draft.amount)} />
      </div>
    </div>
  )
}

export default DraftDetails