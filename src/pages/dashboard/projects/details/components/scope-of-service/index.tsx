import { Dispatch, SetStateAction, useContext, useState } from "react";
import MultiplePositionModal from "./multiple-positions-modal";
import { IProject, ProjectPositions } from "../../../../../../types";
import { UserAuthContext } from "../../../../../../App";

const ScopeOfService = ({ project, updatePositions }: { project: IProject, updatePositions: Dispatch<SetStateAction<ProjectPositions[]|null>> }) => {
  const [showSelectMultiplePositions, updateShowSelectMultiplePositions] = useState(false)
  const {user} = useContext(UserAuthContext);

  const showOnlyUserPositions = () => {
    const userPositions: ProjectPositions[] = []; 
    for (const key in project.positions) {
      const positions = project.positions[key].positions;
      for (const position of positions) {
        if (position.executor === user?._id) {
          userPositions.push(position);
        } else {
          project.positions[key].positions.pop()
        }
      }
    }
    updatePositions(userPositions);
  }

  return (
    <div>
      <h3 className="my-6 text-lg font-bold">Scope of services</h3>
      <div className="bg-white rounded-md shadow w-full dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <div className="p-6 flex flex-col md:flex-row justify-between">
          <h3>Actions & Filters</h3>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <div className="flex p-6 flex-col md:flex-row justify-between">
          <button
            className="my-4 md:my-0 bg-transparent border-gray-800 border py-1 px-2 md:px-4 rounded-md"
            onClick={() => updateShowSelectMultiplePositions(true)}
          >
            Multiple Selection
          </button>
          <button onClick={() => showOnlyUserPositions()} className="my-4 md:my-0 bg-transparent border-gray-800 border py-1 px-2 md:px-4 rounded-md">Show only your own positions</button>
        </div>
      </div>
      {showSelectMultiplePositions && (<MultiplePositionModal closeModal={() => updateShowSelectMultiplePositions(false)} positions={project.positions} project_id={project._id} />)}
    </div>
  );
};

export default ScopeOfService;