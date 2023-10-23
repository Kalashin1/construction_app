/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ReactNode, useEffect, useContext, useState } from 'react';
import {
  DoubleCheckIcon,
  CheckIcon,
  ToolsIcon,
  RectangleListIcon
} from './svg';
import { getAllProjects, getAllContractorProjects, getAllExecutorProjects } from '../../../helper/project';
import { UserAuthContext } from '../../../../../App';
import { IProject, PROJECT_STATUS } from '../../../../../types';

type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}


const Card = ({
  svg,
  figure,
  text,
  color
}: CardProps) => {
  return (
    <div className={`rounded-lg ${color} p-4 dark:bg-navy-700`}>
      <div className="flex justify-between space-x-1">
        <p
          className="text-xl text-white font-bold dark:text-navy-100"
        >
          {figure}
        </p>
        {svg}
      </div>
      <p className="mt-1 text-xs+ text-white">{text}</p>
    </div>
  )
}

const HomeCards = () => {
  const {user} = useContext(UserAuthContext)
  const [projects, setProjects] = useState<IProject[]|null>(null);

  useEffect(() => {
    const setUp = async () => {
      let error, _projects;

      switch (user?.role) {
        case 'admin':
          [error, _projects] = await getAllProjects();
          break;
        case 'contractor': 
          [error, _projects] = await getAllContractorProjects(user._id?.toString()!);
          break;
        case 'executor':
          [error, _projects] =await getAllExecutorProjects(user._id?.toString()!);
          break;
        default:
          break;
      }

      if (error) {
        alert('error fetching projects');
        console.log(error)
      }

      if (_projects) {
        console.log(_projects);
        setProjects(_projects);
      }
    }

    setUp()
  }, [user?._id, user?.role])
  const cards = [
    {
      svg: ToolsIcon,
      text: 'New Project',
      figure: projects?.filter((project) => project.status = PROJECT_STATUS[0]).length ?? 0,
      color: 'bg-blue-500'
    },
    {
      svg: CheckIcon,
      text: 'Assigned',
      figure: '16.0',
      color: 'bg-yellow-500'
    },
    {
      svg: DoubleCheckIcon,
      text: 'Completed',
      figure: '16.0',
      color: 'bg-green-500'
    },
    {
      svg: RectangleListIcon,
      text: 'All Projects',
      figure: '16.0',
      color: 'bg-gray-800'
    }
  ]
  return (
    <div className="col-span-12 lg:col-span-11">
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
      >

        {cards.map((card, index) => (
          <Card
            figure={card.figure.toString()}
            svg={(<card.svg width={50} fill="#fff" />)}
            text={card.text}
            color={card.color}
            key={index}
          />
        ))}

      </div>
    </div>
  );
};

export default HomeCards;