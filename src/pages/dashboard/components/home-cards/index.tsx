import { ReactNode, useContext } from 'react';
import {
  CompletedIcon,
  DispatchIcon,
  PendingIcon,
  IncomeIcon
} from './svg';
import { getDayDifference } from '../../helper/dashboard';
import { TASK_STATUS, Todo } from '../../../../types';
import { UserAuthContext } from '../../../../App';
import { Link } from 'react-router-dom';

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
  const {user} = useContext(UserAuthContext);
  return (
    <Link to={`/todo/${user?._id}`} className={`rounded-lg ${color} p-4 dark:bg-navy-700 border-l-4`}>
      <div className="flex justify-between space-x-1">
        <p
          className="text-xl text-white font-bold dark:text-navy-100"
        >
          {figure}
        </p>
        {svg}
      </div>
      <p className="mt-1 text-xs+ text-white">{text}</p>
    </Link>
  )
}

const HomeCards = ({
  todos
}: {
  todos: Todo[]
}) => {
 
  const cards = [
    {
      svg: IncomeIcon,
      text: 'New Tasks',
      figure: todos.filter((todo) => {
        if (getDayDifference(todo.createdAt!) < 1) return todo
      }).length.toString(),
      color: 'bg-blue-500 border-blue-500',
    },
    {
      svg: PendingIcon,
      text: 'Tasks Due',
      figure: todos.filter((todo) => todo.status === TASK_STATUS[2]).length.toString(),
      color: 'bg-yellow-500 border-yellow-500',
    },
    {
      svg: CompletedIcon,
      text: 'Over Due Tasks',
      figure: todos.filter((todo) => {
        if (getDayDifference(todo.createdAt!) > 3) return todo;
      }).length.toString(),
      color: 'bg-red-500 border-red-500',
    },
    {
      svg: DispatchIcon,
      text: 'All Tasks',
      figure: todos.length.toString(),
      color: 'bg-gray-800 border-gray-800',
    }
  ]

  return (
    <div className="col-span-12 lg:col-span-11">
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >

        {cards.map((card, index) => (
          <Card
            figure={card.figure}
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