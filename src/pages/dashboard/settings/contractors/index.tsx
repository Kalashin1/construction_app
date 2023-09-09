import Layout from "../../layout";
import BreadCrumb from "../../components/bread-crumb";
import ContractorsOverview from './components/contractors-overview';
import { SCREENS } from "../../../../navigation/constants";

const Contractors = () => {
  return (
    <Layout>
      <main className="p-6">
        <BreadCrumb
          pageName="General Contractor"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: '', text: 'General Contractor'}}
        />

        <section>
          <ContractorsOverview />
        </section>
      </main>
    </Layout>
  );
};

export default Contractors;