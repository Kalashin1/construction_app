import Layout from "../../layout";
import BreadCrumb from "../../components/bread-crumb";
import { SCREENS } from "../../../../navigation/constants";
import ProjectCard from "./components/project-card";
import ConstructionSchedule from "./components/construction-schedule";
import Documents from "./components/documents";
import ScopeOfService from "./components/scope-of-service";
import MainOrderItem from "./components/main-order-item";
import ExtraOrders from "./components/extra-orders";
import FloatingActionButton from "./components/floating-action-button";
import AcceptProjectFloatingActionButton from "./components/accept-project";
import DeclineProjectFloatingActionButton from "./components/decline-project";
import DownloadProjectActionButton from "./components/download-button";
import ProjectDownloadAction from "./components/project-download-action";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  
  const navigate = useNavigate();
  const [showDownloadOption, updateShowDownloadOption] = useState(false);

  return (
    <Layout>
      <main className="p-4 md:p-8 relative">
        <BreadCrumb
          pageName="Project Detail"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
          thirdLevel={{ link: '', text: 'Detail' }}
        />
        <AcceptProjectFloatingActionButton />
        <DeclineProjectFloatingActionButton />

        <ProjectCard />
        <ConstructionSchedule />
        <Documents />
        <ScopeOfService />
        <MainOrderItem />
        <ExtraOrders />
        { showDownloadOption && (<ProjectDownloadAction />)}
        <FloatingActionButton 
          action={() => navigate(SCREENS.CHAT)}
        />
        <DownloadProjectActionButton 
          action={
            () => updateShowDownloadOption(!showDownloadOption)
          }
        />
      </main>
    </Layout>
  )
}

export default ProjectDetails;