import { useContext } from "react";
import Layout from "../../../../layout";
import { SidebarContext } from "../../../../../../App";
import SidebarPanel from "../components/sidebar";
import { SCREENS } from "../../../../../../navigation/constants";
import BreadCrumb from "../../../../components/bread-crumb";
import BillingDetails from "./components/billing-details";

const BillingDetailsPage = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar,
  } = useContext(SidebarContext);
  return (
    <Layout
      sidePanel={
        (
          <SidebarPanel

            closeSidebar={
              deviceWidth && deviceWidth > 560 ?
                () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
                () => updateShowSidebar && updateShowSidebar(!showSidebar)
            }
            headerText="Details"
          />
        )
      }
    >
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Contractor Details"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.CONTRACTORS, text: 'General Contractor' }}
          thirdLevel={{ link: SCREENS.CONTRACTOR_DETAILS, text: 'General contractor details' }}
        />
        <main className="my-6">
          <BillingDetails />
        </main>
      </section>
    </Layout>
  )
}

export default BillingDetailsPage;