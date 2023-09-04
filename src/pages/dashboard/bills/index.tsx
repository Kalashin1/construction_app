import { SCREENS } from "../../../navigation/constants";
import BreadCrumb from "../components/bread-crumb";
import Layout from "../layout";
import HomeCards from "./components/home-cards";


const Bills = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="Outgoing Invoices"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
        />

        <section className="p-4 md:p-8">
          <HomeCards

          />
        </section>
      </main>
    </Layout>
  );
}

export default Bills;