import Layout from "./layout";
import HomeCards from "./components/home-cards";
import CurrentProjects from "./components/current-projects";

const Dashboard = () => {
  return (
   <Layout>
    <div className="py-10 px-6">
      <div>
        <HomeCards />
      </div>
      <div className="my-12 flex md:flex-row justify-between">
        <CurrentProjects />
      </div>
    </div>
   </Layout>
  )
}


export default Dashboard;