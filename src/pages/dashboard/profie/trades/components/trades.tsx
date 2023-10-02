/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Modal } from "../../components/account-settings";
import { Button } from "../../../../auth/components";
import { TradeInterface, User } from "../../../../../types";
import { getUserById, getUserFromToken } from "../../../helper/user";
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../../../navigation/constants";
import { TradeIcons, assignUserTrade, getAllTrades, removeUserTrade } from "./helper";

const AddTradeModal = ({
  closeModal,
  _id,
  setUser
}: {
  closeModal: (...args: unknown[]) => void;
  _id: string;
  setUser: Dispatch<SetStateAction<User | null>>
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trades, setTrades] = useState<TradeInterface[]>()

  useEffect(() => {
    const getTrades = async () => {
      const [error, _trades] = await getAllTrades();

      if (error) {
        alert('oops something happened!')
        console.log(error)
      } else if (_trades) {
        console.log(_trades);
        setTrades(_trades)
      }
    }
    getTrades();
  }, [])

  const assignTradeToUser = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    setIsLoading(true)
    const { trade: { value: selectedTrade } } = form;
    const [error, payload] = await assignUserTrade(_id, selectedTrade);
    setIsLoading(false)
    if (error) {
      alert('oops something happened!')
    } else if (payload) {
      alert('trade addedd successfully!');
      const [, user] = await getUserById(_id);
      closeModal();
      setUser(user);
    }
  }


  return (
    <Modal
      title="Add Trade"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <label>
          <p className="text-left">Please Select your Trade</p>
          <select name="trade" className="w-full py-2">
            {trades && trades.map((trade) => (
              <option className="p-2" value={trade._id}>{trade.name}</option>
            ))}

          </select>
        </label>
        <Button
          label="Add Trade"
          action={(e) => { assignTradeToUser(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}
const Trades = () => {
  const navigate = useNavigate()
  const [showModal, updateShowModal] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const token = useMemo(() => sessionStorage.getItem('userToken'), [])
  const visitLoginPage = useCallback(() => navigate(SCREENS.LOGIN), [navigate])

  useEffect(() => {
    const setUp = async (token: string) => {
      const [err, _user] = await getUserFromToken(token);

      if (err) {
        visitLoginPage()
      } else if (_user) {
        setUser(_user);
      }
    }

    setUp(token!);
  }, [token, visitLoginPage]);

  const deleteTrade = async (trade_id: string) => {
    if (confirm('delete this trade?')) {
      const [error, payload] = await removeUserTrade(user?._id!, trade_id);
      if (error) {
        alert('oops something happened!');
        alert(error)
      } else if (payload) {
        alert('trade deleted successfully!')
        setUser(payload);
      }
    }
  }
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between items-center">
        <h3>
          <span className="mr-2">
            <i className="fas fa-file-lines text-xl" />
          </span>
          <span className="text-md">
            Trades
          </span>
        </h3>

        <div className="flex flex-row">
          <button className="bg-blue-700 px-4 py-2 rounded-md text-white mr-3">
            <i className="fas fa-pen-to-square" />
            <span className="ml-1">Capacity Planning</span>
          </button>
          <button onClick={() => updateShowModal(true)}>
            <span>
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <ul className="list-disc">

          {user && user.trades.map((trade) => (
            <li className="flex flex-row justify-between items-center my-4">
              <div className={`text-${trade.color} text-lg`}>
                <span className="mr-2">
                  <i className={TradeIcons[trade.name]} />
                </span>
                <span>
                  {trade.name.slice(0, 1).toUpperCase() + trade.name.slice(1)} (i)
                </span>
              </div>

              <button onClick={() => deleteTrade(trade._id)}>
                <i className="fas fa-times" />
              </button>
            </li>
          ))}

        </ul>
      </div>
      {showModal && user && (
        <AddTradeModal
          _id={user._id!}
          setUser={setUser}
          closeModal={() => updateShowModal(false)}
        />)}
    </div>
  );
};

export default Trades;