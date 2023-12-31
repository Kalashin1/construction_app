/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../../App";
import { ProjectPositions } from "../../../types";
import { getUserProjectStats } from "../helper/dashboard";

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
  action?: (...args: unknown[]) => void;
  color?: string;
  textColor?: string;
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  label,
  action,
  color = 'bg-slate-150',
  textColor = 'text-slate-800',
  disabled,
  type = "button"
}: ButtonProps) => (
  <button
    className={`btn ${color} font-medium ${textColor} hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90 mr-4 my-2`}
    onClick={action}
    type={type}
    disabled={disabled}
  >
    {label}
  </button>
)


const CurrentProjects = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserAuthContext)


  const [stats, setStats] = useState<{ title: string; positions: ProjectPositions[]; }[]>([])
  useEffect(() => {
    const setUp = async () => {
      const [error, payload] = await getUserProjectStats(user?._id!)
      if (error) {
       
        console.log(error);
      }

      if (payload) {
        setStats(payload)
      }
    }

    setUp()
  }, [user?._id])

  return (
    <div
      className="rounded-sm shadow-md bg-white py-2 lg:w-2/4 my-2 lg:my-0 dark:border-navy-700 dark:bg-navy-800 dark:text-white"
    >
      <h3 className="text-md font-bold mx-4 mt-2 mb-2">Current Projects</h3>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="mx-4 my-4">
        {stats && stats.map((p, index) => (
          <ProjectStats
            key={index}
            title={p.title}
            figure={p.positions.length}
            progressWidth={'w-4/12'}
          />
        ))}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="flex flex-row justify-end py-4 px-4 items-center">
        <Button
          label="Filter Positions"
          action={() => {
            {
              sessionStorage.setItem('showProjectFilter', 'yes');
              navigate(SCREENS.PROJECTS)
            }
          }}
        />
        <Button
          label="All Projects"
          action={() => { }}
        />
      </div>
    </div>
  );
};

export default CurrentProjects;