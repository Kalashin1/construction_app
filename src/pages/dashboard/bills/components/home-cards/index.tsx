import {ReactNode} from 'react';
import {
  NewBillsIcon,
  AllInvoiceIcon,
  RejectedInvoiceIcon,
  NewInvoiceIcon
} from './svg';

export type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}

const cards = [
  {
    svg: NewInvoiceIcon,
    text: 'New Invoices',
    figure: '16.0',
    color: 'bg-gray-600'
  },
  {
    svg: RejectedInvoiceIcon,
    text: 'Reject & Reduced',
    figure: '16.0',
    color: 'bg-gray-700'
  },
  {
    svg: NewBillsIcon,
    text: 'New Bills',
    figure: '16.0',
    color: 'bg-slate-800'
  },
  {
    svg: AllInvoiceIcon,
    text: 'All Bills',
    figure: '16.0',
    color: 'bg-gray-900'
  }
]

export const Card = ({
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