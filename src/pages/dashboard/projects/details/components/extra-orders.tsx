import { useEffect, useState } from "react";
import { ProjectPositions, User } from "../../../../../types";
import ProjectDetailCard from "./main-order-item/project-detail-card";
import { getUserById } from "../../../helper/user";
import { NotificationComponent, notify } from "../../../components/notification/toast";

const ExtraOrders = ({ positions, projectId, createdAt, extraOrderId, createdBy }: {
  positions: ProjectPositions[];
  projectId: string;
  createdAt: number;
  extraOrderId: string;
  createdBy: string;
}) => {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    const setUp = async () => {
      const [error, _user] = await getUserById(createdBy);
      if (error) {
        notify(
          (<NotificationComponent message="error fetching addendum creator" />),
          { className: 'bg-red-400 text-white' }
        );
        console.log(error);
      }

      if (_user) {
        setUser(_user);
      }
    }

    setUp();
  }, [createdBy])

  return (
    <div className="bg-white rounded-lg shadow-md my-8 py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-6 m">
        <h3>
          <span>Addendum</span>(main order items) - <span>{user && user.first_name}</span>
        </h3>
        <h3>
          <span>Created At :</span>
          <span>{new Date(createdAt).toDateString()}</span>
        </h3>
        <h3>
          <span>Comment: </span>
          <span>See chat history</span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="">
        {positions && positions.map((position, index) => (
          <ProjectDetailCard extraOrderId={extraOrderId} type="extraPosition" position={position} index={index + 1} project_id={projectId} />
        ))}
      </div>
    </div>
  );
};

export default ExtraOrders;