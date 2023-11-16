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
import { acceptProject, rejectProject } from "../helper";
import { notify, NotificationComponent } from "../../components/notification/toast";

const ProjectDetails = () => {

  const navigate = useNavigate();
  const [showDownloadOption, updateShowDownloadOption] = useState(false);
  const [project, setProject] = useState<IProject | null>(null);
  const [positions, setPositions] = useState<ProjectPositions[] | null>(null);
  const [extraPositions, setExtraPositions] = useState<ProjectPositions[] | null>(null)
  const [showAcceptButton, updateShowAcceptButton] = useState(false)
  const { user } = useContext(UserAuthContext)
  const { id } = useParams();
  const [assignedPositions, setAssignedPositions] = useState<string[]>([])

  const interactWithProject = async (project_id: string, user_id: string, action: "accept" | "reject") => {
    let error, payload;
    const isAccept = action === 'accept'
    if (isAccept) {
      [error, payload] = await acceptProject(
        project_id,
        user_id,
        assignedPositions
      )
    } else {
      [error, payload] = await rejectProject(
        project_id,
        user_id,
        assignedPositions
      )
    }
    if (error) {
      notify(
        (<NotificationComponent message={`Error ${isAccept ? 'accepting' : 'rejecting'} project`} />),
        {
          className: `bg-red-500 font-bold text-white`,
          closeOnClick: true,
        }
      );
      console.log(error);
    }

    if (payload) {
      setProject(payload)
      if (isAccept) updateShowAcceptButton(false)
      if (!isAccept) navigate(SCREENS.PROJECTS)
      notify(
        (<NotificationComponent message={`Project ${isAccept ? 'accepted' : 'rejected'} successfully!`} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      );
      console.log(payload);
    }
  }

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(id!);
      if (error) {
        alert('oops error getting project')
        console.log(error)
      } else if (_project) {
        if (user?.role === 'executor' && !_project.executors.find((exe) => exe === user?._id)) {
          navigate(SCREENS.DASHBOARD)
        }
        setProject(_project);
        const _assingedPositions: string[] = []
        const positions: ProjectPositions[] = [];
        const extraPositions: ProjectPositions[] = []

        for (const key in _project.positions) {
          const _positions = _project.positions[key].positions
          _positions.forEach((pos) => {
            pos.tradeName = key
            pos.executor = _project.positions[key].executor
          })

          if (
            _project.positions[key].accepted == false &&
            _project.positions[key].executor === user?._id
          ) {
            _assingedPositions.push(key);
          }

          positions.push(..._positions);
        }

        for (const key in _project.extraPositions) {
          const _positions = _project.extraPositions[key].positions
          _positions.forEach((pos) => {
            pos.tradeName = key
            pos.executor = _project.positions[key].executor
          })
          extraPositions.push(..._positions);
        }
      
        setAssignedPositions(_assingedPositions)
        setPositions(positions)
        setExtraPositions(extraPositions)

        if (_assingedPositions[0]) {
          console.log(_assingedPositions)
          updateShowAcceptButton(true);
        }
      }
    }
    setUp();
  }, [id, navigate, user?._id, user?.role])

  return (
    <Layout>
      <main className="p-4 md:p-8 relative">
        <BreadCrumb
          pageName="Project Detail"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
          thirdLevel={{ link: '', text: project?._id.slice(0, 10) as string }}
        />
        {showAcceptButton ? (
          <>
            <AcceptProjectFloatingActionButton action={() => interactWithProject(project?._id!, user?._id!, "accept")} />
            <DeclineProjectFloatingActionButton action={() => interactWithProject(project?._id!, user?._id!, "reject")} />
          </>
        ) : (<></>)}
        <div className="my-6">

          {project && (<ProjectCard project={project} />)}
          <ConstructionSchedule />
          <Documents />

          {project && (<ScopeOfService project={project} updatePositions={setPositions} />)}
          {project && positions && (<MainOrderItem positions={positions} projectId={project._id} />)}
          {project && extraPositions && (<ExtraOrders positions={extraPositions} projectId={project._id} />)}
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