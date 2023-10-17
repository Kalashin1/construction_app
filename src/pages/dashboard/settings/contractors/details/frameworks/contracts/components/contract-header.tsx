import { CONTRACT_STATUS, Contract } from "../../../../../../../../types";
import { acceptContract, acceptContractParams, rejectContract, terminateContract } from "../../helper";

const ContractHeader = ({ contract }: { contract: Contract }) => {

  const accept = async (params: acceptContractParams) => {
    const [error, payload] = await acceptContract(params);
    if (error) {
      alert('oops something happened!')
      console.log(error)
    } else if (payload) {
      alert('contract accepted successfully!')
      console.log(payload)
    }
  }

  const reject = async (params: acceptContractParams) => {
    const [error, payload] = await rejectContract(params);
    if (error) {
      alert('oops something happened!')
      console.log(error)
    } else if (payload) {
      alert('contract accepted successfully!')
      console.log(payload)
    }
  }

  const terminate = async (params: Pick<acceptContractParams, 'contract_id'>) => {
    const [error, payload] = await terminateContract(params);
    if (error) {
      alert('oops something happened!')
      console.log(error)
    } else if (payload) {
      alert('contract accepted successfully!')
      console.log(payload)
    }
  }


  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="p-4">
        MAGGA contract Valid since: {contract.acceptedAt ? new Date(contract.acceptedAt).toDateString() : 'Not accepted'}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
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
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="flex justify-between p-4">
        <button className="border border-gray-800 px-4 py-1 rounded-md shadow">
          <span className="mr-2">
            <i className="fas fa-download" />
          </span>
          Download
        </button>
        {contract.status === CONTRACT_STATUS[1] && ((
          <button className="bg-red-500 text-white px-4 py-1 rounded-md shadow" onClick={() => terminate({ contract_id: contract._id})}>
            <span className="mr-2">
              <i className="fas fa-times" />
            </span>
            terminate contract
          </button>
        ))}
        {
          contract.status === CONTRACT_STATUS[0] && (
            <div>
              <button className="bg-green-500 text-white px-4 py-1 rounded-md shadow"
                onClick={() => accept({ contract_id: contract._id, executor_id: contract.executor._id!})}
              >
                <span className="mr-2">
                  <i className="fas fa-check" />
                </span>
                Accept contract
              </button>
              <button className="ml-4 bg-red-500 text-white px-4 py-1 rounded-md shadow"
                onClick={() => reject({ contract_id: contract._id, executor_id: contract.executor._id!})}
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
