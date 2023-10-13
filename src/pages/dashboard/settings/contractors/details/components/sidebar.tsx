import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../../../../../../types";
import { getUserById } from "../../../../helper/user";
import { CreateAccountModal } from "../../../../components/create-account";

type SidebarPanelHeaderProps = {
  headerText?: string;
  closeSidebar: (...args: unknown[]) => void
}

const SidebarPanelHeader = ({
  headerText = 'Contractor Details',
  closeSidebar
}: SidebarPanelHeaderProps) => {
  return (
    <div
      className="flex h-10 w-full items-center justify-between pl-4 pr-1 pt-2"
    >

      <p className="text-lg ml-10 font-medium tracking-wider text-slate-800 dark:text-navy-100">
        {headerText}
      </p>
      <button
        onClick={closeSidebar}
        className="sidebar-close btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  )
}

type SidebarPanelBodyProps = {
  links?: Array<number>
  closeSidebar: (...args: unknown[]) => void;
}



export const SecondList = ({id}:{id: string}) => (
  <ul className="space-y-1.5 px-2 font-inter text-xs+ font-medium">
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" to={`/contractor/${id}`}>
        <i className="fas fa-user" />
        <span className="text-slate-800 dark:text-navy-100">Base Data</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" to={`/target-sales/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Target Sales</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" to={`/billing-details/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Billing Details</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600" to={`/frameworkd/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
        </svg>
        <span className="text-slate-800 dark:text-navy-100">Frameworks and Project Contracts</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-error/20 focus:bg-error/20" to={`/contact-person/${id}`}>
        <i className="fas fa-phone" />
        <span>Contact Person</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-error/20 focus:bg-error/20" to={`/user-documents/${id}`}>
        <i className="fas fa-file"/>
        <span>Documents</span>
      </Link>
    </li>
    <li>
      <Link className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-error/20 focus:bg-error/20" to={`/user-employee/${id}`}>
        <i className="fas fa-users" />
        <span>Employees</span>
      </Link>
    </li>
  </ul>
)

type _SidebarPanelBodyProps = {
  showCreateAccountModal: (...args: unknown[]) => void;
};

export const SidebarPanelBody = ({
  showCreateAccountModal
}:_SidebarPanelBodyProps) => {
  const {id} = useParams();
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    const getUserDetails = async (id: string) => {
      const [error, _user] = await getUserById(id)
      if(error) {
        alert('error getting user account');
        console.log(error);
      }

      if (_user) {
        console.log(_user);
        setUser(_user)
      }
    }

    getUserDetails(id!)
  }, [id])
  return (
    <div
      className="nav-wrapper h-[calc(100%-4.5rem)] min-h-screen overflow-x-hidden pb-6"
      data-simplebar
    >
      <div className="mt-4 flex px-4 pb-4 shadow-sm">
        <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          onClick={() => {showCreateAccountModal()}}
        >
          
          <span>Create Account</span>
        </button>
      </div>
      <SecondList id={user?._id as string} />
      <div className="mx-4 my-3 h-px bg-slate-200 dark:bg-navy-500"></div>
      
    </div>
  )
}



type SidebarPanelProps = SidebarPanelHeaderProps & SidebarPanelBodyProps 

const SidebarPanel = ({
  headerText,
  closeSidebar,
}: SidebarPanelProps) => {
  const [showAccountModal, updateShowAccountModal] = useState(false)
  return (
    <div className="w-72 py-2 shadow-md absolute" style={{ top: '-.45rem' }}>
      <div
        className="flex h-full w-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
      >
        {/* <!-- Sidebar Panel Header --> */}
        <SidebarPanelHeader headerText={headerText} closeSidebar={closeSidebar} />
        {/* <!-- Sidebar Panel Body --> */}
        <SidebarPanelBody showCreateAccountModal={() => updateShowAccountModal(true)} />
        {showAccountModal && (<CreateAccountModal action={() => {
          updateShowAccountModal(false)
        }} />)}
      </div>
    </div>
  );
};

export default SidebarPanel;