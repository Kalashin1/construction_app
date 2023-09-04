import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";
import ProjectInformation from "./components/project-information";
import ProjectSummary from "./components/project-summary";

const Dashboard = () => {
  return (
   <Layout>
    <div className="py-10 px-6">
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