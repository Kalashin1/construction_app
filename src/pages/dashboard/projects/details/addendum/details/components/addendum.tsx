import { useParams } from "react-router-dom";
import ExtraOrders from "../../../components/extra-orders";
import { getProject } from "../../../../../helper/project";
import { NotificationComponent, notify } from "../../../../../components/notification/toast";
import { ExtraProjectPositionSuper, ProjectPositions } from "../../../../../../../types";
import { useEffect, useState } from "react";

const AddendumPage = () => {
  const { project_id, id } = useParams();
  const [addendum, setAddendum] = useState<ExtraProjectPositionSuper>()
  const [positions, setPositions] = useState<ProjectPositions[]>([])

  useEffect(() => {
    const setUp = async () => {
      const [error, payload] = await getProject(project_id!);
      if (error) {
        notify(
          (<NotificationComponent message="Error fetching project" />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(payload)
      }

      if (payload) {
        const extraPosition = payload.extraPositions.find((extraPos) => extraPos.id === id);
        setAddendum(extraPosition);
        const _positions: ProjectPositions[] = []
        for (const key in extraPosition?.positions) {
          for (const pos of extraPosition.positions[key].positions) {
            pos.tradeName = key
            pos.executor = extraPosition.positions[key].executor
            _positions.push(pos)
          }
        }
        setPositions(_positions)
      }
    }

    setUp()
  }, [id, project_id])
  return (
    <div>
     {addendum && positions && ( <ExtraOrders
        createdAt={addendum?.createdAt}
        extraOrderId={id!}
        positions={positions}
        projectId={project_id!}

      />)}
    </div>
  );
};

export default AddendumPage;