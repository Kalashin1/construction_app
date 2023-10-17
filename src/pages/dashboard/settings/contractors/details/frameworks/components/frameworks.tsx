/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Link, useParams } from "react-router-dom";
import { UserAuthContext } from "../../../../../../../App";
import { CONTRACT_STATUS, Contract } from "../../../../../../../types";
import { getContract } from "../helper";
import { useState, useEffect, useContext } from 'react';
import { getUserById } from "../../../../../helper/user";

const Frameworks = () => {
  const [contracts, setContracts] = useState<Contract[] | null>(null)
  const { user } = useContext(UserAuthContext);
  const { id } = useParams();

  useEffect(() => {
    const setUp = async () => {
      const [, executor] = await getUserById(id!);
      console.log('executor', executor)
      const [error, _contracts] = await getContract({
        contractor: user?._id!,
        executor: executor?._id!,
        status: CONTRACT_STATUS[0]
      });
      if (error) {
        alert('oops something happened!')
        console.log(error)
      }

      if (_contracts) {
        setContracts(_contracts);
        console.log(_contracts);
      }
    }

    setUp();
  }, [id, user?._id])
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between">
        <h3>
          <span className="mr-2">
            <i className="fas fa-divide" />
          </span>
          <span className="text-md">
            Framework and project contracts
          </span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <ul className="list-disc">

        {contracts && contracts.map((contract, index) => (
          <li className="grid grid-cols-12 items-center px-8 py-4" key={index}>

            <span>
              <i className="fas fa-check text-green-700 text-2xl" />
            </span>
            <div className="col-span-6 col-start-3">
              <h3>MAGGA - (Status: {contract.status}) - {contract.trade.name} (i)</h3>
              <h5 className="text-xs">Valid since: { contract.acceptedAt ? new Date(contract.acceptedAt).toDateString(): 'Not accepted yet'}</h5>
            </div>


            <Link className="col-start-12" to={`/contract/${contract._id}`}>
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Frameworks;