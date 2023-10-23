/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  useContext, useEffect, useState
} from "react";
import { TradeIcons, deletePositons, getPositions, removeUserTrade } from "./helper";
import * as XLSX from 'xlsx'
import { UserAuthContext } from "../../../../../App";
import { getContract } from "../../../settings/contractors/details/frameworks/helper";
import { CONTRACT_STATUS, Contract } from "../../../../../types";
import { Link } from "react-router-dom";

const Trades = () => {
  const { user, setCurrentUser } = useContext(UserAuthContext);
  const [contracts, setContracts] = useState<Contract[] | null>();

  useEffect(() => {
    const setUp = async () => {
      const [error, data] = await getContract({
        contractor: user?.creator.id!,
        executor: user?._id!,
        status: CONTRACT_STATUS[0]
      })
      const [err, acceptedContracts] = await getContract({
        contractor: user?.creator.id!,
        executor: user?._id!,
        status: CONTRACT_STATUS[1]
      })

      if (error || err) {
        alert('error fetching contracts');
        console.log('error', error);
        console.log('err', err);
      }

      if (data) {
        console.log(data)
        setContracts([...data, ...acceptedContracts]);
      }
    }

    setUp()
  }, [user?._id, user?.creator.id])

  const deleteTrade = async (trade_id: string) => {
    if (confirm('delete this trade?')) {
      const [error, payload] = await removeUserTrade(user?._id!, trade_id);
      if (error) {
        alert('oops something happened!');
        alert(error)
      } else if (payload) {
        alert('trade deleted successfully!')
        const [err, response] = await deletePositons({ trade_id, contractor_id: user?._id! })
        if (err) {
          alert('oops something happened!');
          alert(err)
        } else if (response) {
          setCurrentUser!(payload)
          alert('positions removed successfully!')
        }
      }
    }
  }

  const getTradePositions = async (trade_id: string) => {
    console.log(trade_id)
    const [error, payload] = await getPositions(trade_id);
    if (error) {
      alert('oops something happened!');
      console.log(error);
    } else {
      const worksheet = XLSX.utils.json_to_sheet(payload);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Positions");
      XLSX.writeFile(workbook, `${user?.first_name}-${trade_id}-positions.xlsx`, { compression: true });
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
          <button>
            <span>
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <ul className="list-disc">

          {contracts && contracts.map(({ trade, _id }) => (
            <li className={`flex flex-row justify-between items-center rounded-md my-4 border-${trade.color} border-2 p-4`}>
              <div className={`text-${trade.color} text-lg cursor-pointer`} onClick={() => getTradePositions(trade._id)}>
                <span className="mr-2">
                  <i className={TradeIcons[trade.name]} />
                </span>
                <span>
                  {trade.name.slice(0, 1).toUpperCase() + trade.name.slice(1)} (i)
                </span>
              </div>

              <div>
                <Link to={`/contract/${_id}`}>
                  <i className="fa-solid fa-arrow-up-right-from-square mr-4" />
                </Link>
                <button onClick={() => deleteTrade(trade._id)}>
                  <i className="fas fa-times" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trades;