import { ProjectPositions } from "../../../../../../types";
import { PlusIcon, ChevronRightIcon } from "../../svgs";
import ProjectDetailCard from "./project-detail-card";

const Button = () => (
  <button className="py-2 px-4 font-bold border border-gray-800 rounded-md shadow-md flex flex-row items-center justify-between">
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
  return (
    <div className="my-12">
      <div className="bg-white shadow-md rounded py-6 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 px-4 md:px-6">
          <div className="flex flex-row items-center justify-evenly w-3/6 md:w-1/6 my-4">
            <ChevronRightIcon width={10} color="#000" />
            <h3 className="font-bold">Main order items</h3>
          </div>
          <div>
            <Button />
          </div>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        {positions && positions.map((position, index) => (
          <ProjectDetailCard position={position} index={index + 1} project_id={projectId} />
        ))}
      </div>
    </div>
  );
};

export default MainOrderItem;