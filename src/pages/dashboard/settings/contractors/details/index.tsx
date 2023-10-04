import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import Tab from "./components/tab";
import { SCREENS } from "../../../../../navigation/constants";
import { useContext } from "react";
import { SidebarContext } from "../../../../../App";
import SidebarPanel from "./components/sidebar";

const ContractorDetails = () => {
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
      <main className="p-6">
        <BreadCrumb
          pageName="Contractor Details"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.CONTRACTORS, text: 'General Contractor' }}
          thirdLevel={{ link: SCREENS.CONTRACTOR_DETAILS, text: 'General contractor details' }}
        />

        <section className="my-8 w-full border-red-900">
          <Tab />
        </section>
      </main>
    </Layout>
  );
};

export default ContractorDetails;