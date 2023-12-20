import { ProjectPositions } from "../../../../../types";
import ProjectDetailCard from "../../../projects/details/components/main-order-item/project-detail-card";


const DraftPositions = ({
  positions,
  project_id
}: {
  positions: ProjectPositions[];
  project_id: string
}) => {
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
      <div>
        <h3>Main Order Items</h3>
        {positions && positions.map((position, index) => (
          <ProjectDetailCard
            index={index + 1}
            position={position}
            project_id={project_id}
            type="position"
          />
        ))}
      </div>
    </div>
  );
};

export default DraftPositions;