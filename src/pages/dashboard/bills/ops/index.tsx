import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";

const OPSAdministration = () => {
  return (
    <Layout>
      <main className="py-4 md:py-8">
        <BreadCrumb
          pageName="OPS Administration"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
          thirdLevel={{ link: SCREENS.OPS_ADMINISTRATION, text: 'OPS Administration'}}
        />
      </main>
    </Layout>
  );
};

export default OPSAdministration;