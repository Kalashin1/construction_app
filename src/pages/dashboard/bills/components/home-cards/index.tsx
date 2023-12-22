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
import { getReceiverInvoices, getReciepientDraft, getUserDrafts, getUserInvoices } from '../../helper';
import { DRAFT_STATUS, Draft, INVOICE_STATUS, InvoiceInterface } from '../../../../../types';

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
  const [invoices, setInvoices] = useState<InvoiceInterface[] | null>(null);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      let error, data
      let _error, _invoices
      if (user?.role === 'executor') {
        [error, data] = await getUserDrafts(user?._id!);
        [_error, _invoices] = await getUserInvoices(user?._id!, "ACCEPTED");
        console.log("executor", _invoices)
      } else if (user?.role === 'contractor') {
        [error, data] = await getReciepientDraft(user?._id!);
        [_error, _invoices] = await getReceiverInvoices(user?._id!, "ACCEPTED");
      }
      if (error || _error) {
        notify(
          (<NotificationComponent message={'error fetching bills!'} />),
          {
            className: `bg-red-700 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(error);
        console.log(_error);
      }

      if (data) {
        setBills(data);
        console.log(data);
      }

      if (_invoices) {
        setInvoices(_invoices);
        console.log(_invoices)
      }
    }

    setUp();
  }, [user?._id])
  const cards = [
    {
      svg: NewInvoiceIcon,
      text: 'New Invoices',
      figure: invoices?.filter((invoice) => invoice.status === "ACCEPTED").length.toString(),
      color: 'bg-gray-600 border-blue-500'
    },
    {
      svg: RejectedInvoiceIcon,
      text: 'Reject & Reduced',
      figure: bills?.filter((bill) => bill.status === DRAFT_STATUS[3]).length.toString(),
      color: 'bg-gray-700 border-red-500'
    },
    {
      svg: NewBillsIcon,
      text: 'New Drafts',
      figure: bills?.filter((bill) => bill.status === INVOICE_STATUS[1]).length.toString(),
      color: 'bg-slate-800 border-blue-500'
    },
    {
      svg: AllInvoiceIcon,
      text: 'All Bills',
      figure: String(bills?.length! + invoices?.length!),
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
            figure={card.figure as string}
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