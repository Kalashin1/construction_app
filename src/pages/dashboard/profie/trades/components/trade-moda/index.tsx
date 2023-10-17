/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
  useContext
} from "react";
import { User, TradeInterface } from "../../../../../../types";
import { Button } from "../../../../../auth/components/index";
import { getUserById } from "../../../../helper/user";
import { Modal } from "../../../components/account-settings";
import { getAllTrades, assignUserTrade, uploadPostionFile } from "../helper";
import { UserAuthContext } from "../../../../../../App";
import { getFile } from "../../../../helper/uploads";
import { CreateContractPayload, createContract } from "../../../../settings/contractors/details/frameworks/helper";

const AddTradeModal = ({
  closeModal,
  _id,
  setUser,
  executor
}: {
  closeModal: (...args: unknown[]) => void;
  _id: string;
  setUser: Dispatch<SetStateAction<User>>
  executor: string;
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trades, setTrades] = useState<TradeInterface[]>()
  const [file, setFile] = useState<File|null>(null)

  const { user } = useContext(UserAuthContext)

  console.log(user)

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
      await
      closeModal();
      setUser(user!);

      const [error, positions] = await uploadPostionFile(user?._id!, file!)
      if (error) {
        alert('oops something happened!');
        console.log(error);
      }

      if (positions) {
        console.log(positions)
        alert('positions uploaded successfully!')
        const position_ids = positions.map((position) => position._id)
        await createNewContract({
          position_ids,
          contractor_id: user?._id!,
          trade_id: selectedTrade,
          executor_id: executor
        })
      }
    }
  }

  const uploadPositions = async (e: Event) => {
    e.preventDefault()
    const [, file] = await getFile({
      'application/*': ['.xlsx', '.xls']
    }, 'position');

    if (file) {
      setFile(file);
      
    }
  }

  const createNewContract = async (params: CreateContractPayload) => {
    const [error, payload] = await createContract(params);
    if (error) {
      alert('oops something happened')
      console.log(error);
    } else if (payload) {
      alert('contract created successfully!')
      console.log(payload);
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
          <select name="trade" className="w-full py-2 border border-gray-900 rounded-md">
            {trades && trades.map((trade) => (
              <option className="p-2" value={trade._id}>{trade.name}</option>
            ))}
          </select>
        </label>

        <Button
          label="upload Trades file"
          action={(e) => uploadPositions(e as Event)}
        />
        <Button
          label="Add Trade"
          action={(e) => { assignTradeToUser(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

export default AddTradeModal;