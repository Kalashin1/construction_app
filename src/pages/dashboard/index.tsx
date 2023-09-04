import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";
import ProjectInformation from "./components/project-information";
import ProjectSummary from "./components/project-summary";
import BreadCrumb from "./components/bread-crumb";
import { SCREENS } from "../../navigation/constants";

const Dashboard = () => {
  return (
   <Layout>
    <div className="py-10 px-6">
      <div className="m-4">
        <BreadCrumb
          pageName="Dashboard"
          firstLevel={{link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{link: '', text: ''}}
        />
      </div>
      <div>
        <HomeCards />
      </div>
      <div className="my-12 lg:flex flex-col lg:flex-row justify-between items-start">
        <ProjectInformation />
        <CurrentProjects />
      </div>
      <div className="my-12">
        <ProjectSummary />
      </div>
    </div>
   </Layout>
  )
}


export default Dashboard;