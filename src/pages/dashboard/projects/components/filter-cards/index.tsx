import {ReactNode} from 'react';
import {
  BanIcon,
  RejectedIcon,
  AcceptanceOverdue,
  CompletionOverDue
} from '../home-cards/svg';

type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}

const cards = [
  {
    svg: RejectedIcon,
    text: 'Rejected',
    figure: '16.0',
    color: 'bg-red-500 dark:bg-red-500'
  },
  {
    svg: AcceptanceOverdue,
    text: 'Acceptance Overdue',
    figure: '16.0',
    color: 'bg-rose-600 dark:0bg-rose-600'
  },
  {
    svg: CompletionOverDue,
    text: 'Completion Overdue',
    figure: '16.0',
    color: 'bg-orange-700 dark:bg-orange-700'
  },
  {
    svg: BanIcon,
    text: 'Not Feasible',
    figure: '16.0',
    color: 'dark:bg-red-800 bg-red-800'
  }
]

const Card = ({
  svg,
  figure,
  text,
  color
}: CardProps) => {
  return (
    <div className={`rounded-lg ${color} p-4 dark:bg-navy-700 my-4`}>
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

const FilterCards = () => {
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

export default FilterCards;