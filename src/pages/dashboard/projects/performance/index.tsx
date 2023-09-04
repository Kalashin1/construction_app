import Layout from "../../layout";
import BreadCrumb from "../../components/bread-crumb";
import { SCREENS } from "../../../../navigation/constants";
import ReportsOverview from "./components/reports-overview";

const Performance = () => {
  return (
    <Layout>
      <main className="p-4 md:p-6">
        <BreadCrumb 
          pageName="Performance report overview"
          firstLevel={{ link: SCREENS.PROJECTS, text: 'Projects'}}
          secondLevel={{ link: SCREENS.PERFORMANCE, text: 'Performance Report'}}
        />

        <div className="my-6">
          <ReportsOverview />
        </div>
      </main>
    </Layout>
  );
};

export default Performance;