import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

type ProjectStatsProps = {
  title: string;
  figure: number;
  progressWidth?: string;
}

const ProjectStats = ({
  title,
  figure,
  progressWidth = 'w-4/12'
}: ProjectStatsProps) => {
  return (
    <div className="flex my-4 flex-row w-full justify-between items-center">
      <h3 className="md">{title}</h3>
      <div className="flex flex-row w-3/6 sm:w-3/5 justify-between items-center">
        <h3 className="mr-2 w-2/12 sm:w-1/12">{figure}</h3>
        <div className="progress h-2 bg-slate-150 dark:bg-navy-500">
          <div className={`${progressWidth} rounded-full bg-slate-500 dark:bg-navy-400`}></div>
        </div>
      </div>
    </div>
  );
};

type ButtonProps = {
  label: string;
  action: (...args: unknown[]) => void;
  color?: string;
  textColor?: string;
  disabled?: boolean
}

export const Button = ({
  label,
  action,
  color='bg-slate-150',
  textColor='text-slate-800',
  disabled
}: ButtonProps) => (
  <button
    className={`btn ${color} font-medium ${textColor} hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 mr-4 my-2`}
    onClick={action}
    disabled={disabled}
  >
    {label}
  </button>
)

const projectStatsData = [
  {
    title: 'Total Project Positions',
    figure: 512,
    progressWidth: 'w-4/12'
  },
  {
    title: 'Not Accepted',
    figure: 0,
    progressWidth: 'w-0'
  },
  {
    title: 'Pending Supplements',
    figure: 0,
    progressWidth: 'w-0'
  },
  {
    title: 'Completed',
    figure: 0,
    progressWidth: 'w-0'
  },
  {
    title: 'Billed',
    figure: 61,
    progressWidth: 'w-3/12'
  },
]

const CurrentProjects = () => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-sm shadow-md bg-white py-2 lg:w-2/4 my-2 lg:my-0 dark:border-navy-700 dark:bg-navy-800 dark:text-white"
    >
      <h3 className="text-md font-bold mx-4 mt-2 mb-2">Current Projects</h3>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="mx-4 my-4">
        {projectStatsData.map((p, index) => (
          <ProjectStats
            key={index}
            title={p.title}
            figure={p.figure}
            progressWidth={p.progressWidth}
          />
        ))}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="flex flex-row justify-end py-4 px-4 items-center">
        <Button 
          label="Filter Positions"
          action={() => {{
            sessionStorage.setItem('showProjectFilter', 'yes');
            navigate(SCREENS.PROJECTS)
          }}}
        />
        <Button 
          label="All Projects"
          action={() => {}}
        />
      </div>
    </div>
  );
};

export default CurrentProjects;