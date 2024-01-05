import { useContext } from "react";
import Layout from "../../layout";
import { SidebarContext, UserAuthContext } from "../../../../App";
import SidebarPanel from "../components/sidebar";
import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import EmployeesOverview from "../../settings/contractors/details/employees-overview/employee-slider";
import EmployeeSummary from "../../settings/contractors/details/employees-overview/employee-table";

const Employees = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar,
  } = useContext(SidebarContext);
  const { user } = useContext(UserAuthContext)
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
            headerText="Settings"
          />
        )
      }
    >
      <section className="p-8 md:p-20">

        <BreadCrumb
          pageName="Contractor Details"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.CONTRACTORS, text: 'General Contractor' }}
          thirdLevel={{ link: SCREENS.CONTRACTOR_DETAILS, text: 'General contractor details' }}
        />
        <main className="my-6">
          <EmployeesOverview owner_id={user?._id} />
          <div className="my-4">
            <EmployeeSummary owner_id={user?._id} />
          </div>
        </main>
      </section>
    </Layout>
  )
}

export default Employees;