/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";
import ProjectInformation from "./components/project-information";
import ProjectSummary from "./components/project-summary";
import BreadCrumb from "./components/bread-crumb";
// import DashboardNotification from "./components/dashboard-notification";
import CreateAccountButton, {
  CreateAccountDropdown,
  CreateAccountModal,
  CopyTokenModal
} from "./components/create-account";
import { SCREENS } from "../../navigation/constants";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../App";
import { notify, NotificationComponent } from "./components/notification/toast";
import { getUserTasks, getAssignedTasks } from "./helper/dashboard";
import { Todo } from "../../types";

const Dashboard = () => {
  const [showAccountDropdown, updateShowAccountDropDown] = useState(false)
  const [showAccountModal, updateShowAccountModal] = useState(false)
  const [showCopyTokenModal, updateShowCopyTokenModal] = useState(false);

  const { user } = useContext(UserAuthContext);
  const [todos, setTodos] = useState<Todo[]>([]);
  // * there is a second component using this same exact function, 
  // TODO: later extract this hook outside of this component so the two of them are importing from another file.
  useEffect(() => {
    const setUp = async () => {
      let error, payload;
      if (user?.role === 'contractor') {
        [error, payload] = await getUserTasks(user?._id as string, -1);
      } else if (user?.role === 'executor') {
        [error, payload] = await getAssignedTasks(user?._id as string, -1);
      }
      if (error) {
        notify(
          (<NotificationComponent message='Error fetching tasks' />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(error);
      }

      if (payload) {
        console.log(payload)
        setTodos(payload);
      }
    }

    setUp()
  }, [user?._id, user?.role])

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
          <HomeCards todos={todos} />
        </div>
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          {(user?.role !== 'shop') && (user?.role !== 'employee') && (<CreateAccountButton action={() => updateShowAccountDropDown(!showAccountDropdown)} />)}
          {showAccountModal && (user?.role !== 'shop') && (user?.role !== 'employee') && (<CreateAccountModal action={() => {
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
        {/* <div className="my-12">
          <DashboardNotification />
        </div> */}
        <div className="my-12">
          <ProjectSummary todos={todos} />
        </div>
      </div>
    </Layout>
  )
}


export default Dashboard;