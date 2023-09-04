import {ReactNode} from 'react';
import {
  DoubleCheckIcon,
  CheckIcon,
  ToolsIcon,
  RectangleListIcon
} from './svg';

type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}

const cards = [
  {
    svg: ToolsIcon,
    text: 'Instructed',
    figure: '16.0',
    color: 'bg-blue-500'
  },
  {
    svg: CheckIcon,
    text: 'Performance Tested',
    figure: '16.0',
    color: 'bg-yellow-500'
  },
  {
    svg: DoubleCheckIcon,
    text: 'Completed',
    figure: '16.0',
    color: 'bg-red-500'
  },
  {
    svg: RectangleListIcon,
    text: 'All Projects',
    figure: '16.0',
    color: 'bg-green-500'
  }
]

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
  return (
    <div className="col-span-12 lg:col-span-11">
      <div
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
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