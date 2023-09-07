import Layout from "../../layout";
import BreadCrumb from "../../components/bread-crumb";
import { SCREENS } from "../../../../navigation/constants";
import ProjectCard from "./components/project-card";
import ConstructionSchedule from "./components/construction-schedule";
import Documents from "./components/documents";
import ScopeOfService from "./components/scope-of-service";
import MainOrderItem from "./components/main-order-item";

const ProjectDetails = () => {
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <BreadCrumb
          pageName="Project Detail"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
          thirdLevel={{ link: '', text: 'Detail' }}
        />

        <ProjectCard />
        <ConstructionSchedule />
        <Documents />
        <ScopeOfService />
        <MainOrderItem />
      </main>
    </Layout>
  )
}

export default ProjectDetails;