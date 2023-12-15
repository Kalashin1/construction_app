import { useContext, useState } from "react"
import { Draft, INVOICE_STATUS, Timeline } from "../../../../../types"
import { formatter } from "../../../helper/tools"
import DraftFooter from "./draft-footer"
import DraftHeader from "./draft-header"
import DraftPositions from "./draft-positions"
import DraftUsers from "./draft-users"
import { UserAuthContext } from "../../../../../App"
import { notify, NotificationComponent } from "../../../components/notification/toast"
import { updateDraftStatus } from "../../helper"

const DraftDetails = ({ draft, type }: {
  draft: Draft,
  type: "DRAFT" | "INVOICE"
}) => {
  const { user } = useContext(UserAuthContext);
  const [timeline, setTimeLine] = useState<Timeline>({
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
  })
  const updateDraft = async (draft_id: string, updateType: 'accept' | 'reject' | 'confirm') => {
    let error, payload
    if (updateType === 'accept') {
      [error, payload] = await updateDraftStatus(draft_id, 2)
    }

    if (updateType === 'reject') {
      [error, payload] = await updateDraftStatus(draft_id, 3)
    }

    if (updateType === 'confirm') {
      [error, payload] = await updateDraftStatus(draft_id, 1, timeline)
    }

    if (error) {
      notify(
        (<NotificationComponent message={'error updating status!'} />),
        {
          className: `bg-red-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (payload) {
      notify(
        (<NotificationComponent message={`Status updated successfully, Draft ${updateType}ed`} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      window.location.reload();
    }
  }
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
          timeline={draft?.timeline}
          setTimeline={setTimeLine}
        />
        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <DraftPositions positions={draft.positions} />
        <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
        <DraftFooter total={formatter.format(draft.amount)} />
      </div>
      <div className="my-2 p-4 flex justify-between">
        {(draft.reciepient._id === user?._id && draft.status === INVOICE_STATUS[0]) || (draft.status === 'PENDING') && (<button className="bg-green-700 py-1 px-4 rounded text-white" onClick={() => {
          if (draft.status === 'PENDING') {
            updateDraft(draft._id, 'confirm')
          } else {
            updateDraft(draft._id, 'accept')
          }
        }}>Accept</button>)}
        {draft.reciepient._id === user?._id && draft.status === INVOICE_STATUS[0] && (<button className="bg-red-500 py-1 px-4 rounded text-white" onClick={() => updateDraft(draft._id, 'reject')}>Reject</button>)}
      </div>
    </div>
  )
}

export default DraftDetails