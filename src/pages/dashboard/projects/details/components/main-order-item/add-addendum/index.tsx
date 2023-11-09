import { useEffect, useState } from "react";
import AddendumModal from "./addendum-modal";
import { PositionInterface, TradeInterface } from "../../../../../../../types";
import { TradeIcons, getAllTrades, getPositions } from "../../../../../profie/trades/components/helper";
import { NotificationComponent, notify } from "../../../../../components/notification/toast";
import { Button } from "../../../../../../auth/components";

const AddAddendum = ({
  closeModal
}: {
  closeModal: (...args: unknown[]) => void;
}) => {
  const [trades, updateTrades] = useState<TradeInterface[] | null>(null);
  const [selectedTrade, updateSelectedTrade] = useState<TradeInterface | null>();
  const [positions, updatePositions] = useState<PositionInterface[] | null>(null)
  const [selectedPositions, updateSelectedPositions] = useState<string[]>([])

  useEffect(() => {
    const setUp = async () => {
      const [error, _trades] = await getAllTrades();
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

      if (_trades) {
        updateTrades(_trades);
        console.log(_trades)
      }
    };
    setUp()
  }, [])

  const selectPosition = async (trade: TradeInterface) => {
    if (trade._id === selectedTrade?._id) {
      updateSelectedTrade(null);
      return;
    } else {
      updateSelectedTrade(trade)
    }
    const [error, positions] = await getPositions(trade._id);
    if (error) {
      notify(
        (<NotificationComponent message={'Error fetching positions'} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (positions) {
      notify(
        (<NotificationComponent message={'Positions retrived successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      updatePositions(positions);
    }
  }
  return (
    <AddendumModal
      closeModal={closeModal}
      title="Add Addendum"
    >
      <div>
        {trades && trades.map((trade, index) => (
          <div key={index} className={`cursor-pointer rounded-md my-4 ${TradeIcons[trade?.name]?.classNames} border-2 p-4`}>
            <div className="flex flex-row justify-between items-center mb-2" onClick={() => selectPosition(trade)}>
              <div className={`text-lg`}>
                <span className="mr-2">
                  <i className={TradeIcons[trade.name].icon} />
                </span>
                <span>
                  {trade.name.slice(0, 1).toUpperCase() + trade.name.slice(1)} (i)
                </span>
              </div>

              <div>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            <div className="flex items-start justify-start flex-col">
              {selectedTrade && positions && selectedTrade._id === trade._id && (<li className="list-none flex flex-row items-center justify-between w-full">
                <button onClick={() => {
                  updateSelectedPositions(positions.map((position) => position.external_id))
                }}>Select All</button>
                <div>
                  <div>
                    <i className="fas fa-check" />
                  </div>
                </div>
              </li>)}
              {selectedTrade && positions && selectedTrade._id === trade._id && positions.map((position, index) => (
                <li className="list-none flex flex-row items-center justify-between w-full text-black dark:text-gray-50 my-2 bg-gray-50 shaodw-md rounded-md dark:bg-navy px-4 py-2" key={index}>
                  <div className="w-10/12 cursor-pointer" onClick={() => {
                    if (selectedPositions.find((pos) => position.external_id === pos)) {
                      updateSelectedPositions(selectedPositions.filter((pos) => position.external_id !== pos))
                    } else {
                      updateSelectedPositions([...selectedPositions, position.external_id])
                    }
                  }}>
                    <div className="text-left">{position.external_id}</div>
                    <div className="text-left text-xs text-gray-700">{position.shortText}</div>
                  </div>
                  <div>
                    <input type="checkbox" checked={selectedPositions.find((pos) => pos === position.external_id) ? true : false} />
                  </div>
                </li>
              ))}
            </div>
          </div>
        ))}
        <Button
          label="Add Addendum"
          action={() => { }}
        />
      </div>
    </AddendumModal>
  )
}

export default AddAddendum;