import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";
import ReportsOverview from "./components/reports-overview";

const Reports = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="Reports"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Projects'}}
          thirdLevel={{ text: 'Reports', link: ''}}
        />

        <ReportsOverview />
        </main>
    </Layout>
  );
};

export default Reports;