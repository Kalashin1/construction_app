import Layout from "./layout";
import HomeCards from "./components/home-cards";

const Dashboard = () => {
  return (
   <Layout>
    <div className="py-10 px-6">
      <div>
        <HomeCards />
      </div>
    </div>
   </Layout>
  )
}


export default Dashboard;