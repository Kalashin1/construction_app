import { SCREENS } from "../../../navigation/constants";
import BreadCrumb from "../components/bread-crumb";
import Layout from "../layout";


const Bills = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="Bills"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
        />
      </main>
    </Layout>
  );
}

export default Bills;