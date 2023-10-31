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
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProject, PROJECT_STATUS, ProjectPositions } from "../../../../types";
import { getProject } from "../../helper/project";
import { UserAuthContext } from "../../../../App";

const ProjectDetails = () => {

  const navigate = useNavigate();
  const [showDownloadOption, updateShowDownloadOption] = useState(false);
  const [project, setProject] = useState<IProject | null>(null);
  const [positions, setPositions] = useState<ProjectPositions[] | null>(null);
  const { user } = useContext(UserAuthContext)
  const { id } = useParams();

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(id!);
      if (error) {
        alert('oops error getting project')
        console.log(error)
      } else if (_project) {
        console.log(_project);
        setProject(_project);
        const positions: ProjectPositions[] = [];
        for (const key in _project.positions) {
          const _positions = _project.positions[key].positions
          _positions.forEach((pos) => {
            pos.tradeName = key
          })
          positions.push(..._positions)
        }
        setPositions(positions)
      }
    }


    setUp();
  }, [id])

  return (
    <Layout>
      <main className="p-4 md:p-8 relative">
        <BreadCrumb
          pageName="Project Detail"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
          thirdLevel={{ link: '', text: project?._id.slice(0, 10) as string }}
        />
        {user && user.role === "executor" && project?.status === PROJECT_STATUS[0] && (
          <>
            <AcceptProjectFloatingActionButton />
            <DeclineProjectFloatingActionButton />
          </>
        )}
        <div className="my-6">

          {project && (<ProjectCard project={project} />)}
          <ConstructionSchedule />
          <Documents />
          <ScopeOfService />
          {project && positions && (<MainOrderItem positions={positions} />)}
          <ExtraOrders />
          {showDownloadOption && (<ProjectDownloadAction />)}
          <FloatingActionButton
            action={() => navigate(SCREENS.CHAT)}
          />
          <DownloadProjectActionButton
            action={
              () => updateShowDownloadOption(!showDownloadOption)
            }
          />
        </div>

      </main>
    </Layout>
  )
}

export default ProjectDetails;