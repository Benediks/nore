import {
  BanknotesIcon,
  ClockIcon,
  ShoppingBagIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fredoka } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  products: ShoppingBagIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfProducts,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Products"
        value={numberOfProducts}
        type="products"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'products' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-5000">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {Icon ? <Icon className="h-6 w-6 text-blue-600" /> : null}
          <h3 className="ml-3 text-sm text-gray-700 uppercase tracking-wide">{title}</h3>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
        <p
          className={`${fredoka.className}
            text-3xl text-gray-900 text-center`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}