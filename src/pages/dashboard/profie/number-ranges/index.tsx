import { useContext } from "react";
import { SidebarContext } from "../../../../App";
import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";
import Sidebar from '../components/sidebar'
import NumberRangeComponent from "./components/number-range";

const NumberRanges = () => {
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
          <Sidebar

            closeSidebar={
              deviceWidth && deviceWidth > 560 ?
                () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
                () => updateShowSidebar && updateShowSidebar(!showSidebar)
            }
            headerText="Settings"
          />
        )
      }
    >
      <main className="p-6">
        <BreadCrumb
          pageName="Your Profile"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: '', text: '' }}
        />

        <section>
          <NumberRangeComponent />
        </section>
      </main>
    </Layout>
  );
};

export default NumberRanges;