/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ReactNode, useContext, useEffect, useState } from 'react';
import {
  NewBillsIcon,
  AllInvoiceIcon,
  RejectedInvoiceIcon,
  NewInvoiceIcon
} from './svg';
import { UserAuthContext } from '../../../../../App';
import { notify, NotificationComponent } from '../../../components/notification/toast';
import { getUserDrafts } from '../../helper';
import { Draft, INVOICE_STATUS } from '../../../../../types';

export type CardProps = {
  svg: ReactNode;
  figure: string;
  text: string;
  color: string;
}


export const Card = ({
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
  const [bills, setBills] = useState<Draft[] | null>(null);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      const [error, data] = await getUserDrafts(user?._id!)
      if (error) {
        notify(
          (<NotificationComponent message={'error fetching bills!'} />),
          {
            className: `bg-red-700 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(error);
      }

      if (data) {
        setBills(data);
        console.log(data);
      }
    }

    setUp();
  }, [user?._id])
  const cards = [
    {
      svg: NewInvoiceIcon,
      text: 'New Invoices',
      figure:'0',
      color: 'bg-gray-600 border-blue-500'
    },
    {
      svg: RejectedInvoiceIcon,
      text: 'Reject & Reduced',
      figure: '16.0',
      color: 'bg-gray-700 border-red-500'
    },
    {
      svg: NewBillsIcon,
      text: 'New Drafts',
      figure:  bills ? bills.filter((bill) => bill.status === INVOICE_STATUS[0]).length.toString(): '0',
      color: 'bg-slate-800 border-blue-500'
    },
    {
      svg: AllInvoiceIcon,
      text: 'All Bills',
      figure: '16.0',
      color: 'bg-gray-900 border-green-500'
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