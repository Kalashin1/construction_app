import { IProject, ProjectPositions } from "../../../../../../types";
import { PlusIcon, ChevronRightIcon } from "../../svgs";
import ProjectDetailCard from "./project-detail-card";
import AddAddendum from "./add-addendum";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateMultiplePositionStatus } from "../../../helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";
import PositionActionDropdown, { links as Links } from "./postion-action-dropdown";
import { UserAuthContext } from "../../../../../../App";
import { getProject } from "../../../../helper/project";

const Button = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <button
    className="py-2 px-4 font-bold border border-gray-800 rounded-md shadow-md flex flex-row items-center justify-between"
    onClick={action}
  >
    <span>
      <PlusIcon width={10} color="#000" />
    </span>
    <span className="ml-2">
      Add Adenum
    </span>
  </button>
)


const MainOrderItem = ({ positions, projectId }: {
  positions: ProjectPositions[],
  projectId: string
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(projectId);
      if (error) {
        notify(
          (<NotificationComponent message="Error fetching project" />),
          { className: 'bg-red-500 text-white' }
        );
        console.log(error);
      }

      
      if (_project) {
        setProject(_project);
      }
    }

    setUp()
  }, [projectId])
  const [showAddAddendum, updateShowAddAddendum] = useState(false)
  const [selectedIds, updateSelectedId] = useState<string[]>([]);
  const [project, setProject] = useState<IProject>()
  const { user } = useContext(UserAuthContext);

  const updatePositionsStatus = () => {
    return async (status: "COMPLETED" | "IN PROGRESS" | "NOT-FEASIBLE") => {
      const [error, payload] = await updateMultiplePositionStatus(projectId, selectedIds, status);
      if (error) {
        notify(
          (<NotificationComponent message="Error updating positions status" />),
          { className: 'bg-red-300 text-white' }
        );
        console.log(error)
        updateShowPositionActionDropdown(false)
      }
      if (payload) {
        console.log(payload);
        notify(
          <NotificationComponent message="Positions updated successfully!" />,
          { className: 'bg-green-400 text-white' }
        )
        updateShowPositionActionDropdown(false)
        location.reload()
      }
    }
  }


  const mainOrderLinks: Links[] = [
    { text: 'In Progress', action: updatePositionsStatus(), status: "IN PROGRESS" },
    { text: 'Completed', action: updatePositionsStatus(), status: "COMPLETED" },
    { text: 'Not Feasible', action: updatePositionsStatus(), status: "NOT-FEASIBLE" },
  ];

  const [showPositionActionDropdown, updateShowPositionActionDropdown] = useState(false)

  return (
    <div className="my-12">
      <div className="bg-white shadow-md rounded py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white" onClick={() => updateShowPositionActionDropdown(false)}>
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 px-4 md:px-6">
          <div className="flex flex-row items-center justify-evenly w-3/6 md:w-3/12 my-4 relative">
            <ChevronRightIcon width={10} color="#000" />
            <h3 className="font-bold">Main order items</h3>
            {user && user.role !== 'contractor' && project?.executors.find((exe) => exe === user?._id) && (<button className="outline-0 focus-within:outline-none" onClick={(e) => {
              e.stopPropagation();
              updateShowPositionActionDropdown(true);
            }}>
              <i className="fas fa-chevron-down" />
            </button>)}

            {showPositionActionDropdown && (
              <div className="absolute right-6 top-8">
                <PositionActionDropdown mainOrderLinks={mainOrderLinks} />
              </div>
            )}
          </div>
          <div>
            <Button action={() => navigate(`/addendum/${projectId}`)} />
          </div>
        </div>
        {showAddAddendum && (
          <AddAddendum
            closeModal={() => updateShowAddAddendum(false)}
          />
        )}
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {positions && positions.map((position, index) => (
          <ProjectDetailCard
            type="position"
            selectedIds={selectedIds}
            updateSelectedId={updateSelectedId}
            position={position}
            index={index + 1}
            project_id={projectId}
          />
        ))}
      </div>
    </div>
  );
};

export default MainOrderItem;