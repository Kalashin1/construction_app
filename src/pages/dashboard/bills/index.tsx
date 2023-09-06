import { SCREENS } from "../../../navigation/constants";
import BreadCrumb from "../components/bread-crumb";
import Layout from "../layout";
import HomeCards from "./components/home-cards";
import BillsOverview from "./components/bills-overview";

const Bills = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <div className="px-8">
          <BreadCrumb
            pageName="Outgoing Invoices"
            firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
            secondLevel={{ link: SCREENS.BILLS, text: 'Bills'}}
          />

        </div>

        <section className="p-4 md:p-8">
          <HomeCards

          />
        </section>
        <section className="p-4 md:p-8">
          <BillsOverview 
          
          />
        </section>
      </main>
    </Layout>
  );
}

export default Bills;