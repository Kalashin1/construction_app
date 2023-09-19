import { useNavigate } from "react-router-dom";
import { useGetUserFromToken } from "../../hooks/getUser";
import { SCREENS } from "../../../../navigation/constants";

export const HeaderBar = () => (
  <>
    <div className="my-4 px-4 bg-white rounded shadow-sm font-bold py-4 dark:bg-navy-600 dark:text-white">
      <h3>MAGGA ID: 49288928</h3>
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

export const FooterBar = () => (
  <div className="bg-white dark:bg-navy-600 my-4 rounded-md shadow-sm">
    <div className="flex flex-row justify-between px-4 py-4">
      <h3 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
        <span>
          <i className="fas fa-users" />
        </span>
        <span className="ml-4">
          Managing Directiors
        </span>
      </h3>


      <button>
        <i className="fas fa-plus text-lg font-medium" />
      </button>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-medium tracking-wide text-center text-slate-700 dark:text-navy-100 dark:text-black dark:bg-transparent bg-gray-300 py-2 my-1">Surname</h3>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="flex flex-row justify-between">
        <h3>Ibrahim</h3>

        <div>
          <button
            className="py-1 px-2 my-2 rounded-md bg-gray-500"
          >
            <i className="fas fa-pen-to-square text-white" />
          </button>
          <button className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600">
            <i className="fas fa-times text-white" />
          </button>
        </div>
      </div>
    </div>
    
  </div>
)
export const BankDetails = () => (
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


      <button>
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
      <div className="flex flex-row justify-between py-2 px-2">
        <h3>Sparkasse Vest Recklinghausen</h3>

        <h3>DE13426501501001079977</h3>
        
        <h3>WELADED1REK</h3>

        <div>
          <button
            className="py-1 px-2 my-2 rounded-md bg-gray-500"
          >
            <i className="fas fa-pen-to-square text-white" />
          </button>
          <button className="ml-2 py-1 px-2 my-2 rounded-md bg-red-600">
            <i className="fas fa-times text-white" />
          </button>
        </div>
      </div>
    </div>
    
  </div>
)

const AccountSettings = () => {
  
  const navigate = useNavigate()
  
  const token = sessionStorage.getItem('userToken')

  const {user, error} = useGetUserFromToken(token!)

  if (error) {
    navigate(SCREENS.LOGIN)
  }

  if (user) {
    console.log(user)
  }
  
  return (
    <div className="col-span-12 lg:col-span-8">
      <HeaderBar />
      <div className="card">
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
                src="images/100x100.png"
                alt="avatar"
              />
              <div
                className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700"
              >
                <button
                  className="btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
              <span>Display name </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
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
              <span>Full Name </span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter full name"
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
                  type="text"
                />
                <span
                  className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                >
                  <i className="fa fa-phone"></i>
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
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
      <BankDetails />
    </div>
  );
};

export default AccountSettings;