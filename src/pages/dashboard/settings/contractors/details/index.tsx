import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import Tab from "./components/tab";
import { SCREENS } from "../../../../../navigation/constants";

const ContractorDetails = () => {
  return (
    <Layout>
      <main className="p-6">
        <BreadCrumb
          pageName="Contractor Details"
          firstLevel={{link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{link: SCREENS.CONTRACTORS, text: 'General Contractor'}}
          thirdLevel={{link: SCREENS.CONTRACTOR_DETAILS, text: 'General contractor details'}}
        />

        <section className="my-8 w-full border-red-900">
         <Tab />
        </section>
      </main>
    </Layout>
  );
};

export default ContractorDetails;