/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../../../../../App";
import { ProjectPositions, User } from "../../../../../../types";
import { Button } from "../../../../components/current-projects";
import { notify, NotificationComponent } from "../../../../components/notification/toast";
import { Modal } from "../../../../profie/components/account-settings";
import { TradeIcons } from "../../../details/helper";
import { assignProjectToExecutor } from "../../../helper";
import ExecutorList from "./executor-list";

export type _ProjectPosition = {
  [key: string]: {
    positions: ProjectPositions[];
    billed: false;
    executor: string;
  };
}

const AssignExecutorModal = ({
  closeModal,
  project_id,
  positions
}: {
  closeModal: (...args: unknown[]) => void;
  project_id: string;
  positions: _ProjectPosition
}) => {
  console.log(project_id)
  console.log("positions", positions);
  const { user } = useContext(UserAuthContext)

  const [selectedIds, updateSelectedIds] = useState<string[]>([])
  const [showPositions, updateShowPositions] = useState(false)
  const [selectedUser, updateSelectedUser] = useState<User | null>(null)

  const assingPositions = async () => {
    const [error, response] = await assignProjectToExecutor(project_id, selectedUser?._id!, selectedIds, user?._id!);
    if (error) {
      notify(
        (<NotificationComponent message={'oops something happened!'} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (response) {
      notify(
        (<NotificationComponent message={'Positions assinged successfully!'} />),
        {
          className: `bg-success font-bold text-white`,
          closeOnClick: true,
        }
      )
      window.location.reload()
    }
  }
  return (
    <Modal
      title="Select Exectutor"
      closeModal={closeModal}
    >
      <div>
        <ExecutorList userLists={user?.executors!} selectedUser={selectedUser} updateSelectedUser={updateSelectedUser} />
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
            {showPositions && Object.keys(positions).map((position, index) => {
              if (!positions[position].executor) {
                return (
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
                )
              }
            })}
          </AnimatePresence>
        </div>
        <Button action={assingPositions} label="Assign Positions" />
      </div>
    </Modal>
  )
}


export default AssignExecutorModal