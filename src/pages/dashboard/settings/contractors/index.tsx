import Layout from "../../layout";
import BreadCrumb from "../../components/bread-crumb";
import ContractorsOverview from './components/contractors-overview';
import { SCREENS } from "../../../../navigation/constants";

const Contractors = () => {
  return (
    <Layout>
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="General Contractor"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: '', text: 'General Contractor' }}
        />
        <main className="my-6">
          <ContractorsOverview />
         
        </main>
      </section>
    </Layout>
  );
};

export default Contractors;