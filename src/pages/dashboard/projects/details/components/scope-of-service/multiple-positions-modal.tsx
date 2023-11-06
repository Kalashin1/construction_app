import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../../../components/current-projects";
import { Modal } from "../../../../profie/components/account-settings";
import { TradeIcons } from "../../helper";
import { useState } from "react";
import { _ProjectPosition } from "../../../components/project-lists/components/assing-executor";
import { updatePositionsByTrade } from "../../../helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";

const MultiplePositionModal = ({
  closeModal,
  positions,
  project_id
}: {
  closeModal: (...args: unknown[]) => void;
  positions: _ProjectPosition;
  project_id: string
}) => {
  const [showPositions, updateShowPositions] = useState(false);
  const [showActions, updateShowActions] = useState(false);
  const [selectedIds, updateSelectedIds] = useState<string[]>([]);
  const actions = [{text: 'BILL', action: "BILLED"}, { text: 'COMPLETE', action: "COMPLETED"},{text: "NOT FEASIBLE", action: "NOT FEASIBLE"}] as const;
  const [action, setAction] = useState<typeof actions[number]>(actions[2])
  const updateMultiplePositionStatus = async (trade: string, action: string) => {
    const [error, payload] = await updatePositionsByTrade(project_id, trade, action);
    if (error) {
      notify(
        (<NotificationComponent message={'Error updating multiple positions'} />),
        {
          className: `bg-red-400 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (payload) {
      notify(
        (<NotificationComponent message={'multiple positions updated successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(payload);
    }
  }

  const updateForMultipleTrade = async (trades: string[], action: typeof actions[number]) => {
    await Promise.all(trades.map((trade) => updateMultiplePositionStatus(trade, action.action)))
  }
  return (
    <Modal
      title="Select Exectutor"
      closeModal={closeModal}
    >
      <div>
        <div className="my-6">
          <button className="px-6 py-4 my-4 text-left flex flex-row justify-between items-center w-full border-2 rounded-md" onClick={() => updateShowPositions(!showPositions)}>
            <span>
              Positions
            </span>

            <span>
              <i className="fas fa-chevron-down" />
            </span>
          </button>
          <AnimatePresence>
            {showPositions && Object.keys(positions).map((position, index) => (
              <motion.div
                exit={{ y: 400 }}
                initial={{ y: -400 }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                key={index}
                className={`px-6 py-2 my-1 text-left flex flex-row justify-between items-center w-full ${TradeIcons[position]?.border} border-2 rounded-md`}>
                <span className={`m-2 capitalize`}>
                  {position}
                </span>

                <div>
                  <input type="checkbox" onChange={(e) => {
                    if (e.target.checked) {
                      updateSelectedIds([...selectedIds, position])
                    } else {
                      updateSelectedIds(selectedIds.filter((selectedId) => selectedId !== position))
                    }
                  }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="my-6">
        <button className="px-6 py-4 my-4 text-left flex flex-row justify-between items-center w-full border-2 rounded-md" onClick={() => updateShowActions(!showActions)}>
          <span>
            Action
          </span>

          <span>
            <i className="fas fa-chevron-down" />
          </span>
        </button>
        <AnimatePresence>
          {showActions && actions.map((_action, index) => (
            <motion.button
              exit={{ y: 400 }}
              initial={{ y: -400 }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              key={index}
              className={`${action.action === _action.action ? 'bg-black': 'bg-gray-500'} px-6 py-2 my-1 text-left text-white flex flex-row justify-between items-center w-full border-2 rounded-md`}
              onClick={() => setAction(_action)}  
            >
              <span className={`m-2 capitalize font-bold`}>
                {_action.text}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>

        <Button action={() => updateForMultipleTrade(selectedIds, action)} label="Assign Positions" />
      </div>
    </Modal>
  )
}

export default MultiplePositionModal;