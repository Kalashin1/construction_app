/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useContext
} from "react";
import { User } from "../../../../../../types";
import { Button } from "../../../../../auth/components/index";
import { getUserById } from "../../../../helper/user";
import { Modal } from "../../../components/account-settings";
import { uploadPostionFile } from "../helper";
import { UserAuthContext } from "../../../../../../App";
import { getFile } from "../../../../helper/uploads";
import { CreateContractPayload, createContract } from "../../../../settings/contractors/details/frameworks/helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";

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
  const [files, setFiles] = useState<File[] | null>(null)

  const { user } = useContext(UserAuthContext)

  console.log(user)


  const assignTradeToUser = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    const [, user] = await getUserById(_id);
    console.log(user)
    setUser(user!);
    const [error, positions] = await uploadPostionFile(user?._id!, files!)
    if (error) {
      notify(
        (<NotificationComponent message={'oops something happened!'} />),
        {
          className: 'bg-red-500 font-bold text-white',
        }
      );
      console.log(error);
    }

    if (positions) {
      console.log(positions)
      notify(
        (<NotificationComponent message={'Positions uploaded successfully!'} />),
        {
          className: 'bg-primary font-bold text-white',
        }
      );
      await Promise.all(positions.map(async (_positions) => {
        return await createNewContract({
          positions: _positions,
          contractor_id: user?._id!,
          trade_id: _positions[0].trade,
          executor_id: executor
        });
      }))
      notify(
        (<NotificationComponent message={'contract created successfully!'} />),
        {
          className: 'bg-primary font-bold text-white',
        }
      );
    }
  }

  const uploadPositions = async (e: Event) => {
    e.preventDefault()
    const [, file] = await getFile(
      {
        'application/*': ['.xlsx', '.xls']
      },
      'position',
      true
    );

    if (file) {
      console.log(file)
      setFiles(file);
      notify(
        (<NotificationComponent message={`${file.length} files uploaded`} />),
        {
          className: 'bg-primary font-bold text-white',
          autoClose: false
        }
      )
    }
  }

  const createNewContract = async (params: CreateContractPayload) => {
    console.log(params)
    const [error] = await createContract(params);
    if (error) {
      notify(
        (<NotificationComponent message={'oops something happened'} />),
        {
          className: 'bg-red-500 font-bold text-white',
        }
      )
      console.log(error);
    }
    notify(
      (<NotificationComponent message={`Contract generated`} />),
      {
        className: 'bg-primary font-bold text-white',
      }
    )
    closeModal()
  }


  return (
    <Modal
      title="Send Contract"
      closeModal={closeModal}
    >
      <form className="space-y-4" ref={form}>
        <Button
          label="upload Trades file"
          action={(e) => uploadPositions(e as Event)}
          extraClass="bg-gray-600 hover:bg-gray-600 focus:bg-green-500"
        />
        {files && files?.length > 1 && (<button className="text-left w-full py-2 px-4 my-2" onClick={() => setFiles([])}>Delete All Files</button>)}
        {files && files.map((file) => (
          <div className="flex px-4 items-center justify-between">
            <div className="flex justify-start">

            <span className="mr-4">
              <i className="fas fa-paperclip" />
            </span>

            <span>
              {file.name} {Math.floor(file.size/1000)}kb
            </span>
            </div>

            <span className="cursor-pointer" onClick={() => setFiles(files.filter((f) => f.name !== file.name))}>
              <i className="fas fa-times" />
            </span>
          </div>
        ))}
        <Button
          label="Send Contract"
          action={(e) => { assignTradeToUser(e as Event) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

export default AddTradeModal;