import { CONTRACT_STATUS, Contract } from "../../../../../../../../types";
import { getPositions } from "../../../../../../profie/trades/components/helper";
import * as XLSX from 'xlsx';
import { acceptContract, acceptContractParams, rejectContract, terminateContract } from "../../helper";
import { Dispatch, SetStateAction, useContext } from 'react';
import { notify, NotificationComponent } from "../../../../../../components/notification/toast";
import { UserAuthContext } from "../../../../../../../../App";

const ContractHeader = ({
  contract,
  updateContract
}: {
  contract: Contract,
  updateContract: Dispatch<SetStateAction<Contract>>
}) => {
  const {user} = useContext(UserAuthContext)
  const accept = async (params: acceptContractParams) => {
    const [error, payload] = await acceptContract(params);
    if (error) {
      notify(
        (<NotificationComponent message={`error something happened`} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,

        }
      )
    } else if (payload) {
      notify(
        (<NotificationComponent message={`contract accepted successfully!`} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,

        }
      )
      updateContract(payload);
    }
  }

  const reject = async (params: acceptContractParams) => {
    const [error, payload] = await rejectContract(params);
    if (error) {
      notify(
        (<NotificationComponent message={`oops something happened!`} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,

        }
      )
      console.log(error)
    } else if (payload) {
      notify(
        (<NotificationComponent message={`contract accepted successfully!`} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,

        }
      )
      updateContract(payload)
    }
  }

  const terminate = async (params: Pick<acceptContractParams, 'contract_id'>) => {
    const [error, payload] = await terminateContract(params);
    if (error) {
      notify(
        (<NotificationComponent message={'oops something happened!'} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,

        }
      )
      console.log(error);
    } else if (payload) {
      notify(
        (<NotificationComponent message={'contract accepted successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,

        }
      );
      updateContract(payload);
    }
  }

  const getTradePositions = async (trade_id: string, contract: Contract) => {
    console.log(trade_id)
    const [error, payload] = await getPositions(trade_id);
    if (error) {
      alert();
      notify(
        (<NotificationComponent message={'oops something happened!'} />),
        {
          className: `bg-red-500 font-bold text-white`,
          closeOnClick: true,

        }
      );
      console.log(error);
    } else {
      const worksheet = XLSX.utils.json_to_sheet(payload);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Positions");
      XLSX.writeFile(workbook, `${contract._id}-${trade_id}-positions.xlsx`, { compression: true });
    }
  }

  const isContractExecutor = user?._id === contract.executor._id


  return (
    <div className="bg-white dark:bg-navy-800 rounded-md shadow-sm">
      <div className="p-4">
        MAGGA contract Valid since: {contract.acceptedAt ? new Date(contract.acceptedAt).toDateString() : 'Not accepted'}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800 dark:bg-navy-500"></div>
      <div className="my-4 grid grid-cols-2 gap-x-2 px-4 gap-y-2">

        <h3>
          General Contractor
        </h3>

        <span>
          {contract.contractor.first_name}
        </span>

        <h3>
          trade
        </h3>

        <span>
          {contract.trade.name}
        </span>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-800"></div>

      <div className="flex justify-between p-4">
        <button className="border border-gray-800 px-4 py-1 rounded-md shadow" onClick={() => getTradePositions(contract.trade._id, contract)}>
          <span className="mr-2">
            <i className="fas fa-download" />
          </span>
          Download
        </button>
        {contract.status === CONTRACT_STATUS[1] && isContractExecutor && ((
          <button className="bg-red-500 text-white px-4 py-1 rounded-md shadow" onClick={() => terminate({ contract_id: contract._id })}>
            <span className="mr-2">
              <i className="fas fa-times" />
            </span>
            terminate contract
          </button>
        ))}
        {
          contract.status === CONTRACT_STATUS[0] && isContractExecutor && (
            <div>
              <button className="bg-green-500 text-white px-4 py-1 rounded-md shadow"
                onClick={() => accept({ contract_id: contract._id, executor_id: contract.executor._id! })}
              >
                <span className="mr-2">
                  <i className="fas fa-check" />
                </span>
                Accept contract
              </button>
              <button className="ml-4 bg-red-500 text-white px-4 py-1 rounded-md shadow"
                onClick={() => reject({ contract_id: contract._id, executor_id: contract.executor._id! })}
              >
                <span className="mr-2">
                  <i className="fas fa-times" />
                </span>
                Reject contract
              </button>

            </div>
          )}
      </div>
    </div>
  )
};


export default ContractHeader;
