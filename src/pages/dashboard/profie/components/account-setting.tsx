/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../../navigation/constants";
import { Dispatch, FormEvent, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { useUpateProfile } from "../hooks";
import { UserBankDetails, User, StandIn, ReferrerType } from "../../../../types";
import { assignStandIn, deleteEmployeeStandIn, deleteUserBankDetails, getUserById, getUserFromToken, retrieveEmployees, updateUserBankDetails, updateUserProfile } from "../../helper/user";
import { Button } from '../../../auth/components/index';
import { Input } from "../../../auth/components";



export const HeaderBar = ({
  id
}: {
  id: string
}) => (
  <>
    <div className="my-4 px-4 bg-white rounded shadow-sm font-bold py-4 dark:bg-navy-600 dark:text-white">
      <h3>MAGGA ID: {id}</h3>
    </div>
    <div className="bg-white rounded-md shadow-sm my-4 dark:bg-navy-600">
      <div className="flex flex-row justify-between p-4">
        <h3 className="px-2">
          <span>
            <i className="far fa-image" />
          </span>
          <span className="pl-2">
            Logo & Icon
          </span>
        </h3>

        <div className="grid grid-cols-3 gap-x-0">
          <span>
            <i className="fas fa-pen-to-square mr-2" />
            <span className="ml-2">
              Logo
            </span>
          </span>

          <span>
            <i className="fas fa-pen-to-square" />
            <span className="ml-2">
              Icon
            </span>
          </span>

          <span>
            <i className="fas fa-pen-to-square" />
            <span className="ml-2">
              Invoice logo
            </span>
          </span>

        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between w-full">
        <h3>Logo</h3>
        <h3>Icon</h3>
        <h3>Invoice Logo</h3>
      </div>
      <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between">
        <span>
          No Image
        </span>
        <span>
          No Image
        </span>
        <span>
          No Image
        </span>

      </div>
    </div>
  </>

)

const UpdateFooterBarModal = ({
  _id,
  closeModal,
  setUser,
}: {
  _id: string;
  closeModal: (...args: unknown[]) => void;
  setUser: Dispatch<SetStateAction<User | null>>
}) => {
  type Employee = Pick<User, 'email' | 'role'> & { id: string }
  const [employees, setEmployees] = useState<Employee[] | null>(null);
  useEffect(() => {
    const getEmployees = async () => {
      const [err, _employees] = await retrieveEmployees(_id);
      console.log(_employees)
      if (err) {
        alert('error fetching employees');
        console.log(err);
      } else if (_employees) {
        console.log(_employees);
        setEmployees(_employees);
      }
    }

    getEmployees()
  }, [_id])
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const assignNewStandIn = async (
    e: Event,
    form: HTMLFormElement
  ) => {
    e.preventDefault();
    showIsLoading(true);
    const { employee: { value: employee } } = form;
    const selectedEmployee = employees!.find((e) => e.id == employee);
    console.log('selectedEmployee', selectedEmployee);
    const [err, payload] = await assignStandIn(_id, { ...selectedEmployee! });
    showIsLoading(false)
    if (err) {
      alert('oops something happened');
      console.log(err);
    } else if (payload) {
      alert('Stand-in set successfully')
      console.log(payload);
      const [error, _user] = await getUserById(_id)
      if (error) {
        alert('oops error getting user');
        console.log(error);
      } else if (_user) {
        setUser(_user);
      }
      closeModal()
      showIsLoading(false);
    }
  }

  return (
    <Modal
      title="Select New Stand In"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <select name="employee">
          <option>
            Select Employee
          </option>
          {employees && employees.map((emp) => (
            <option value={emp.id}>
              {emp.email}
            </option>
          ))}
        </select>
        <Button
          label="Add Bank Details"
          action={(e) => { assignNewStandIn(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

type FooterBarProps = {
  _id: string,
  standIns: StandIn[]
  employee: ReferrerType[];
  setUser: Dispatch<SetStateAction<User | null>>
}

export const FooterBar = (Props: FooterBarProps) => {
  const [showModal, updateShowModal] = useState(false);
  console.log(Props.standIns)
  const deleteStandIn = async (employee_id: string) => {
    if (confirm('Are you sure you want to delete this stand in')) {
      const [error, payload] = await deleteEmployeeStandIn(
        Props._id,
        employee_id
      );

      if (error) {
        alert('oops something happened!');
        console.log(error);
      } else if (payload) {
        alert('deleted successfully');
        console.log(payload);
        updateShowModal(false);
        const [, user] = await getUserById(Props._id);
        Props.setUser(user);
      }
    }
  }
  return (
    <div className="bg-white dark:bg-navy-600 my-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between px-4 py-4">
        <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          <span>
            <i className="fas fa-users" />
          </span>
          <span className="ml-4">
            Stand In
          </span>
        </h3>


        <button
          onClick={() => updateShowModal(true)}
        >
          <i className="fas fa-plus text-lg font-medium" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium tracking-wide text-center text-slate-700 dark:text-navy-100 dark:text-black dark:bg-transparent bg-gray-300 py-2 my-1">Surname</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {Props.standIns && Props.standIns.map((stdIn) => (
          <div className="flex flex-row justify-between">
            <h3>{stdIn.last_name ?? stdIn.email}</h3>

            <div>

              <button
                className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600"
                onClick={() => deleteStandIn(stdIn._id)}
              >
                <i className="fas fa-times text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (<UpdateFooterBarModal
        closeModal={() => updateShowModal(false)}
        _id={Props._id}
        setUser={Props.setUser}
      />)}
    </div>
  )
}

export const Modal = ({
  closeModal,
  children,
  title,
}: {
  closeModal: (...args: unknown[]) => void,
  children: ReactNode,
  title: string
}) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 w-full"
      id="modal1"
      role="dialog"
    >
      <div className="modal-overlay absolute inset-0 bg-slate-900/60" onClick={closeModal}></div>
      <div
        className="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5 md:w-2/5"
      >


        <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
          {title}
        </h2>
        <div className="mt-4 w-full">
          {children}
        </div>
      </div>
    </div>
  )
}


export const CreateBankDetailsModal = ({ _id, closeModal, setUser }: {
  _id: string;
  closeModal: (...args: unknown[]) => void;
  setUser: Dispatch<SetStateAction<User | null>>
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const addBankDetails = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    showIsLoading(true);
    const { bank: { value: bank }, iban: { value: iban }, bic: { value: bic } } = form;
    const [err, user] = await updateUserProfile({ bankDetails: { bank, iban, bic }, _id });
    showIsLoading(false);
    if (err) {
      alert('oops something happened!');
      console.log(err);
    } else if (user) {
      alert('bank details added successfully!');
      closeModal()
      setUser(user)
    }
  }

  return (
    <Modal
      title="Add Your bank details"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <Input
          placeholder="deutshbank"
          type="text"
          name="bank"
        />
        <Input
          placeholder="Iban"
          type="text"
          name="iban"
        />
        <Input
          placeholder="bic"
          type="text"
          name="bic"
        />
        <Button
          label="Add Bank Details"
          action={(e) => { addBankDetails(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

export const UpdateBankDetailsModal = ({
  _id,
  closeModal,
  bankDetails,
  setUser
}: {
  _id: string,
  closeModal: (...args: unknown[]) => void,
  bankDetails: UserBankDetails;
  setUser: Dispatch<SetStateAction<User | null>>
}) => {
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const updateBankDetails = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    showIsLoading(true);
    const { bank: { value: bank }, iban: { value: iban }, bic: { value: bic } } = form;
    const [error, payload] = await updateUserBankDetails(_id, bankDetails, {
      bank,
      iban,
      bic
    })
    showIsLoading(false)
    if (error) {
      alert('oops something happened!');
      console.log(error);
    } else if (payload) {
      console.log(payload)
      alert('bank details updated successfuly')
      closeModal()
      const [, user] = await getUserById(_id);
      setUser(user);
    }
  }

  return (
    <Modal
      title="Select New Stand In"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <Input
          placeholder="deutshbank"
          type="text"
          defaultValue={bankDetails.bank}
          name="bank"
        />
        <Input
          placeholder="Iban"
          type="text"
          defaultValue={bankDetails.iban}
          name="iban"
        />
        <Input
          placeholder="bic"
          defaultValue={bankDetails.bic}
          type="text"
          name="bic"
        />
        <Button
          label="Add Bank Details"
          action={(e) => { updateBankDetails(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

type BankDetailsProps = {
  _id?: string;
  bankDetails?: UserBankDetails[];
  setUser: Dispatch<SetStateAction<User | null>>
};

export const BankDetails = (Props: BankDetailsProps) => {
  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);
  const [showBankDetailsUpdateModal, setShowBankDetailsUpdateModal] = useState(false);
  const [selectedBankDetails, updateSelectedBankDetails] = useState<UserBankDetails | null>(null);

  const deleteBankDetails = async (bankDetails: UserBankDetails) => {
    console.log(bankDetails)
    if (confirm('are you sure you want to delete this bank detail')) {
      const [error, payload] = await deleteUserBankDetails(
        Props._id!,
        bankDetails
      );
      if (error) {
        alert('oops something happened!')
        console.log(error);
      } else if (payload) {
        console.log(payload);
        alert('bank details deleted successfully!')
        // location.reload();
        const [, user] = await getUserById(Props._id!);
        Props.setUser && Props.setUser(user)
      }
    }
  }

  return (
    <div className="bg-white dark:bg-navy-600 my-4 rounded-md shadow-sm">
      <div className="flex flex-row justify-between px-4 py-4">
        <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
          <span>
            <i className="fas fa-credit-card" />
          </span>
          <span className="ml-4">
            Bank Details
          </span>
        </h3>


        <button onClick={() => setShowBankDetailsModal(true)}>
          <i className="fas fa-plus text-lg font-medium" />
        </button>
      </div>
      <div className="p-6">
        <div className="text-lg font-medium tracking-wide text-center text-slate-700 dark:text-navy-100 dark:text-black dark:bg-transparent bg-gray-300 py-2 my-1 flex flex-row justify-between px-2">
          <span>
            Surname
          </span>
          <span>
            Iban
          </span>
          <span>
            BIC
          </span>
          <span>
            &nbsp;
          </span>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {Props.bankDetails && Props.bankDetails.map((bankD) => (
          <div className="flex flex-row justify-between py-2 px-2">
            <h3>{bankD.bank!}</h3>

            <h3>{bankD.iban}</h3>

            <h3>{bankD.bic}</h3>

            <div>
              <button
                className="py-1 px-2 my-2 rounded-md bg-gray-500"
                onClick={() => {
                  updateSelectedBankDetails(bankD);
                  setShowBankDetailsUpdateModal(true)
                }}
              >
                <i className="fas fa-pen-to-square text-white" />
              </button>
              <button
                className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600"
                onClick={() => deleteBankDetails(bankD)}
              >
                <i className="fas fa-times text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showBankDetailsModal && (
        <CreateBankDetailsModal
          _id={Props._id!}
          closeModal={() => setShowBankDetailsModal(false)}
          setUser={Props.setUser && Props.setUser}
        />)}
      {showBankDetailsUpdateModal && (
        <UpdateBankDetailsModal
          _id={Props._id!}
          bankDetails={selectedBankDetails!}
          closeModal={() => setShowBankDetailsUpdateModal(false)}
          setUser={Props.setUser}
        />)}
    </div>
  )
}

const AccountSettings = () => {

  const navigate = useNavigate()


  const [email, setEmail] = useState('');

  const formRef = useRef<HTMLFormElement | null>(null)

  const token = sessionStorage.getItem('userToken')
  const [user, setUser] = useState<User | null>(null);

  const {
    makeUpdate,
  } = useUpateProfile();

  useEffect(() => {
    const setUp = async () => {
      const abCnt = new AbortController();
      const [err, _user] = await getUserFromToken(token!, abCnt);
      console.log(_user, err)
      if (!_user || err) {
        navigate(SCREENS.LOGIN)
      }

      if (_user) {
        setEmail(_user.email)
        setUser(_user);
      }
    }

    setUp()
  }, [navigate, token])

  const updateUserProfile = async (e: FormEvent, form: HTMLFormElement) => {
    e.preventDefault()
    const { username: { value: username }, phone: { value: phone }, first_name: { value: first_name }, last_name: { value: last_name } } = form;
    const [error, _user] = await makeUpdate({
      _id: user?._id,
      username,
      phone,
      first_name,
      last_name
    });

    if (error) {
      alert('oops something happened, try again!')
      console.log(error)
    } else if (_user) {
      alert('profile updated successfully!')
      console.log(_user);
    }
  }

  return (
    <div className="col-span-12 lg:col-span-8">
      {user && user._id && (<HeaderBar id={user._id} />)}
      <form className="card" ref={formRef} onSubmit={(e) => updateUserProfile(e, formRef.current!)}>
        <div
          className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5"
        >
          <h2
            className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100"
          >
            Account Setting
          </h2>
          <div className="flex justify-center space-x-2">
            <button
              className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            >
              Save
            </button>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex flex-col">
            <span
              className="text-base font-medium text-slate-600 dark:text-navy-100"
            >Avatar</span>
            <div className="avatar mt-1.5 h-20 w-20">
              <img
                className="mask is-squircle"
                src={user?.avatar ? user?.avatar : "images/100x100.png"}
                alt="avatar"
              />
              <div
                className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700"
              >
                <button
                  className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span>First name </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  name="first_name"
                  value={user?.first_name}
                  defaultValue={user?.first_name}
                  placeholder="Enter name"
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Last Name </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Last name"
                  name="last_name"
                  defaultValue={user?.last_name}
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Email Address </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter email address"
                  defaultValue={email}
                  readOnly
                  name="email"
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa-regular fa-envelope text-base"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Phone Number</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter phone number"
                  name="phone"
                  defaultValue={user?.phone}
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa fa-phone"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>Username</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Username"
                  name="username"
                  defaultValue={user?.username}
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa-regular fa-user text-base"></i>
                </span>
              </span>
            </label>
          </div>
          <div className="my-7 h-px bg-slate-200 dark:bg-navy-500"></div>
          <div>
            <h3
              className="text-base font-medium text-slate-600 dark:text-navy-100"
            >
              Linked Accounts
            </h3>
            <p className="text-xs+ text-slate-400 dark:text-navy-300">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-4">
                {/* <div className="h-12 w-12">
                  <img src="images/100x100.png" alt="logo" />
                </div> */}
                <p className="line-clamp-1 font-medium">
                  Sign In with Google
                </p>
              </div>
              <button
                className="btn h-8 rounded-full border border-slate-200 px-3 text-xs+ font-medium text-primary hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-accent-light dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                type="button"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </form>
      <FooterBar
        _id={user?._id!}
        standIns={user?.standIn!}
        employee={user?.employees!}
        setUser={setUser}
      />
      <BankDetails
        bankDetails={user?.bankDetails! as UserBankDetails[]}
        setUser={setUser}
        _id={user?._id}
      />
    </div>
  );
};

export default AccountSettings;