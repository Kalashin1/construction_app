/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../../../navigation/constants";
import { FormEvent, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useUpateProfile } from "../../hooks";
import { UserBankDetails } from "../../../../../types";
import HeaderBar from "./components/header-bar";
import FooterBar  from "./components/footer-bar";
import { BankDetails } from "./components/bank-details";
import { UserAuthContext } from "../../../../../App";
import { getFile, uploadProfilePhoto } from "../../../helper/uploads";


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

const AccountSettings = () => {

  const navigate = useNavigate()


  const [email, setEmail] = useState('');

  const formRef = useRef<HTMLFormElement | null>(null)


  const {
    makeUpdate,
  } = useUpateProfile();

  const {user, setCurrentUser, getUser} = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      const token = sessionStorage.getItem('userToken');
      const [err, _user] = await getUser!(null, token!);
      if (_user) {
        setCurrentUser!(_user);
        setEmail(_user.email);
      } else if (err) {
        navigate(SCREENS.LOGIN);
      }
    }

    setUp();
  }, [])

  const updateUserProfile = async (e: FormEvent, form: HTMLFormElement) => {
    e.preventDefault()
    const { 
      username: { value: username }, 
      phone: { value: phone }, 
      first_name: { value: first_name }, 
      last_name: { value: last_name },
      province: {value: province },
      zip: {value: zip},
      street: {value: street }
    } = form;
    const [error, _user] = await makeUpdate({
      _id: user?._id,
      username,
      phone,
      first_name,
      last_name,
      address: {
        street,
        zip,
        province
      }
    });

    if (error) {
      alert('oops something happened, try again!')
      console.log(error)
    } else if (_user) {
      alert('profile updated successfully!')
      console.log(_user);
    }
  }

  const uploadImage = async () => {
    const [err, file] = await getFile();
    if (err) {
      console.log(err)
    } else if (file) {
      const [error, payload] = await uploadProfilePhoto(
        user?._id!,
        file
      )
      if (error) {
        alert('oops something happened!');
        console.log(error)
      } else if (payload) {
        console.log(payload);
        alert(`profile photo updated successfully!`);
        setCurrentUser!(payload.user);
      }
      console.log(file)
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
                  onClick={uploadImage}
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
            <label className="block">
              <span>Street</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Street"
                  name="street"
                  defaultValue={user?.address?.street}
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
              <span>Zip</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Zip code"
                  name="zip"
                  defaultValue={user?.address?.zip}
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
              <span>Province</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Province"
                  name="province"
                  defaultValue={user?.address?.province}
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
        standIns={user?.standIn!}
        employee={user?.employees!}
      />
      <BankDetails
        bankDetails={user?.bankDetails! as UserBankDetails[]}
        _id={user?._id}
      />
    </div>
  );
};

export default AccountSettings;