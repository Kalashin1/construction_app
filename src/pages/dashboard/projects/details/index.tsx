/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
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
import { IProject, ProjectPositions } from "../../../../types";
import { getProject } from "../../helper/project";
import { UserAuthContext } from "../../../../App";
import { acceptProject } from "../helper";

const ProjectDetails = () => {

  const navigate = useNavigate();
  const [showDownloadOption, updateShowDownloadOption] = useState(false);
  const [project, setProject] = useState<IProject | null>(null);
  const [positions, setPositions] = useState<ProjectPositions[] | null>(null);
  const [isAccepted, updateIsAccepted] = useState(true)
  const { user } = useContext(UserAuthContext)
  const { id } = useParams();
  const [assignedPositions, setAssignedPositions] = useState<string[]>([])

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(id!);
      if (error) {
        alert('oops error getting project')
        console.log(error)
      } else if (_project) {
        setProject(_project);
        const positions: ProjectPositions[] = [];
        for (const key in _project.positions) {
          const _positions = _project.positions[key].positions
          _positions.forEach((pos) => {
            pos.tradeName = key
            pos.executor = _project.positions[key].executor
          })
          if (_project.positions[key].accepted &&
            _project.positions[key].executor === user?._id) {
            console.log('not accepted')
          }

          if (
            _project.positions[key].accepted == false &&
            _project.positions[key].executor === user?._id 
          ) {
            updateIsAccepted(false)
            setAssignedPositions([...assignedPositions, key])
          }
          positions.push(..._positions)
          setAssignedPositions([...assignedPositions, key])
        }
        setPositions(positions)
      }
    }
    setUp();
  }, [id, user?._id])

  return (
    <Layout>
      <main className="p-4 md:p-8 relative">
        <BreadCrumb
          pageName="Project Detail"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
          thirdLevel={{ link: '', text: project?._id.slice(0, 10) as string }}
        />
        {user && (user.role === "executor") && (!isAccepted) && (
          <>
            <AcceptProjectFloatingActionButton action={() => acceptProject(project?._id!, user?._id!, assignedPositions)} />
            <DeclineProjectFloatingActionButton action={() => acceptProject(project?._id!, user?._id!, assignedPositions)} />
          </>
        )}
        <div className="my-6">

          {project && (<ProjectCard project={project} />)}
          <ConstructionSchedule />
          <Documents />
          <ScopeOfService />
          {project && positions && (<MainOrderItem positions={positions} projectId={project._id} />)}
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