import {ReactNode} from 'react';
import {
  CompletedIcon,
  DispatchIcon,
  PendingIcon,
  IncomeIcon
} from './svg';

type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}

const cards = [
  {
    svg: IncomeIcon,
    text: 'New Tasks',
    figure: '16.0',
    color: 'bg-blue-500 border-blue-500',
  },
  {
    svg: PendingIcon,
    text: 'Tasks Due',
    figure: '16.0',
    color: 'bg-yellow-500 border-yellow-500',
  },
  {
    svg: CompletedIcon,
    text: 'Over Due Tasks',
    figure: '16.0',
    color: 'bg-red-500 border-red-500',
  },
  {
    svg: DispatchIcon,
    text: 'All Tasks',
    figure: '16.0',
    color: 'bg-gray-800 border-gray-800',
  }
]

const Card = ({
  svg,
  figure,
  text,
  color
}: CardProps) => {
  return (
    <div className={`rounded-lg ${color} p-4 dark:bg-navy-700 border-l-4`}>
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