import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";
import HomeCards from "./components/home-cards";
import OPSOverview from './components/ops-table'

const OPSAdministration = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="OPS Administration"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
          thirdLevel={{ link: SCREENS.OPS_ADMINISTRATION, text: 'OPS Administration'}}
        />

        <HomeCards

        />
        <OPSOverview />
      </main>
    </Layout>
  );
};

export default OPSAdministration;