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
  text: string
}

const cards = [
  {
    svg: IncomeIcon,
    text: 'Incoming Projects',
    figure: '16.0'
  },
  {
    svg: PendingIcon,
    text: 'Accepted Projects',
    figure: '16.0'
  },
  {
    svg: CompletedIcon,
    text: 'Completed Projects',
    figure: '16.0'
  },
  {
    svg: DispatchIcon,
    text: 'Total Projects',
    figure: '16.0'
  }
]

const Card = ({
  svg,
  figure,
  text
}: CardProps) => {
  return (
    <div className="rounded-lg bg-slate-150 p-4 dark:bg-navy-700">
      <div className="flex justify-between space-x-1">
        <p
          className="text-xl font-semibold text-slate-700 dark:text-navy-100"
        >
          ${figure}
        </p>
        {svg}
      </div>
      <p className="mt-1 text-xs+">{text}</p>
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
          svg={(<card.svg />)}
          text={card.text}
          key={index}
          />
       ))}

      </div>
    </div>
  );
};

export default HomeCards;