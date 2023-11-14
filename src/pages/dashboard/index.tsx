/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";
import ProjectInformation from "./components/project-information";
import ProjectSummary from "./components/project-summary";
import BreadCrumb from "./components/bread-crumb";
import DashboardNotification from "./components/dashboard-notification";
import CreateAccountButton, {
  CreateAccountDropdown,
  CreateAccountModal,
  CopyTokenModal
} from "./components/create-account";
import { SCREENS } from "../../navigation/constants";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../App";

const Dashboard = () => {
  const [showAccountDropdown, updateShowAccountDropDown] = useState(false)
  const [showAccountModal, updateShowAccountModal] = useState(false)
  const [showCopyTokenModal, updateShowCopyTokenModal] = useState(false);

  const {user} = useContext(UserAuthContext);
  
  const links = [{
    text: 'Create Account',
    svg: 'fas fa-user',
    action: () => updateShowAccountModal(true)
  },
  {
    text: 'Generate ID',
    svg: 'fas fa-cog',
    action: () => updateShowCopyTokenModal(true)
  }]
  return (
    <Layout>
      <div className="py-10 px-6" onClick={() => updateShowAccountDropDown(false)}>
        <div className="m-4">
          <BreadCrumb
            pageName="Dashboard"
            firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
            secondLevel={{ link: '', text: '' }}
          />
        </div>
        <div>
          <HomeCards />
        </div>
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          {(user?.role !== 'shop') && (user?.role !== 'employee') && (<CreateAccountButton action={() => updateShowAccountDropDown(!showAccountDropdown)} />)}
          {showAccountModal && (user?.role !== 'shop') && (user?.role !== 'employee') &&  (<CreateAccountModal action={() => {
            updateShowAccountModal(false)
            updateShowAccountDropDown(false)
          }} />)}
          {showCopyTokenModal && (<CopyTokenModal userId={user?._id!} action={() => {
            updateShowCopyTokenModal(false)
            updateShowAccountDropDown(false)
          }} />)}
          {showAccountDropdown && (<CreateAccountDropdown links={links} />)}
        </div>
        <div className="my-12 lg:flex flex-col lg:flex-row justify-between items-start">
          <ProjectInformation />
          <CurrentProjects />
        </div>
        <div className="my-12">
          <DashboardNotification />
        </div>
        <div className="my-12">
          <ProjectSummary />
        </div>
      </div>
    </Layout>
  )
}


export default Dashboard;