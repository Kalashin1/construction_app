import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";

const OPSAdministration = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="OPS Administration"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
          thirdLevel={{ link: '', text: 'OPS Administration'}}
        />
      </main>
    </Layout>
  );
};

export default OPSAdministration;