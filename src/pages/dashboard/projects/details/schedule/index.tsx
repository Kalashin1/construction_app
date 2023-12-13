import { SCREENS } from "../../../../../navigation/constants";
import BreadCrumb from "../../../components/bread-crumb";
import Layout from "../../../layout";
import ScheduleProject from "./components/schedule";

const ConstructionSchedule = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="Construction Schedule"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Projects' }}
          thirdLevel={{ text: 'Construction Schedule', link: '' }}
        />
        <main className="my-4 px-6">
          <ScheduleProject />
        </main>
      </main>
    </Layout>
  );
};

export default ConstructionSchedule;