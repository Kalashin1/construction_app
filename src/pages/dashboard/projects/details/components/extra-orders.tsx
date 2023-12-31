import { useEffect, useState } from "react";
import { ProjectPositions, User } from "../../../../../types";
import ProjectDetailCard from "./main-order-item/project-detail-card";
import { getUserById } from "../../../helper/user";
import { NotificationComponent, notify } from "../../../components/notification/toast";
import PositionActionDropdown, { links as Links } from "./main-order-item/postion-action-dropdown";
import { updateMultipleExtraOrderPositions } from "../../helper";

const ExtraOrders = ({
  positions,
  projectId,
  createdAt,
  extraOrderId,
  createdBy,
  comment
}: {
  positions: ProjectPositions[];
  projectId: string;
  createdAt: number;
  extraOrderId: string;
  createdBy: string;
  comment: string;
}) => {
  const [user, setUser] = useState<User>()
  const [selectedIds, updateSelectedId] = useState<string[]>([]);
  const [showPositionActionDropdown, updateShowPositionActionDropdown] = useState(false);

  const updateExtraPosition = async (project_id, positions, status, addendum_id) => {
    const [error, payload] = await updateMultipleExtraOrderPositions(project_id, positions, status, addendum_id);
    if (error) {
      notify(
        (<NotificationComponent message="error updating status" />),
        { className: 'bg-red-400 text-white' }
      );
      console.log(error);
    }

    if (payload) {
      notify(
        (<NotificationComponent message="status updated successfully" />),
        { className: 'bg-green-600 text-white' }
      );
      location.reload()
    }
  }
  useEffect(() => {
    const setUp = async () => {
      const [error, _user] = await getUserById(createdBy);
      if (error) {
        notify(
          (<NotificationComponent message="error fetching addendum creator" />),
          { className: 'bg-red-400 text-white' }
        );
      }

      if (_user) {
        setUser(_user);
      }
    }

    setUp();
  }, [createdBy])

  const mainOrderLinks: Links[] = [
    { text: 'In Progress', action: (status: string) => updateExtraPosition(projectId, selectedIds, status, extraOrderId), status: "IN PROGRESS" },
    { text: 'Completed', action: (status: string) => updateExtraPosition(projectId, selectedIds, status, extraOrderId), status: "COMPLETED" },
    { text: 'Not Feasible', action: (status: string) => updateExtraPosition(projectId, selectedIds, status, extraOrderId), status: "NOT-FEASIBLE" },
  ];


  return (
    <div
      className="bg-white rounded-lg shadow-md my-8 py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white"
      onClick={() => updateShowPositionActionDropdown(false)}
    >
      <div className="p-6 relative">
        <h3>
          <span>Addendum</span>(created by) - <span>{user && user.first_name}</span>
        </h3>
        <h3>
          <span>Created At :</span>
          <span>{new Date(createdAt).toDateString()}</span>
        </h3>
        <h3>
          <span>Comment: </span>
          <span>{comment}</span>
          <button className="ml-6 outline-0 focus-within:outline-none text-black" onClick={(e) => {
            e.stopPropagation();
            updateShowPositionActionDropdown(true);
          }}>
            <i className="fas fa-chevron-down" />
          </button>
        </h3>


        {showPositionActionDropdown && (
          <div className="absolute left-32 -bottom-24">
            <PositionActionDropdown mainOrderLinks={mainOrderLinks} />
          </div>
        )}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="">
        {positions && positions.map((position, index) => (
          <ProjectDetailCard
            selectedIds={selectedIds}
            updateSelectedId={updateSelectedId}
            extraOrderId={extraOrderId}
            type="extraPosition"
            position={position}
            index={index + 1}
            project_id={projectId}
            addendum_id={extraOrderId}
          />
        ))}
      </div>
    </div>
  );
};

export default ExtraOrders;