import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";
import ProjectInformation from "./components/project-information";

const Dashboard = () => {
  return (
   <Layout>
    <div className="py-10 px-6">
      <div>
        <HomeCards />
      </div>
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <ProjectInformation />
        <CurrentProjects />
      </div>
    </div>
   </Layout>
  )
}


export default Dashboard;