import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { fredoka } from '@/app/ui/fonts';
import { fetchTopSellingProducts } from '@/app/lib/data';

export default async function TopSellingProducts(){
  const topSellingProducts = await fetchTopSellingProducts();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${fredoka.className} mb-4 text-xl md:text-2xl`}>
        Top Selling Products
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6 rounded-lg">
          {topSellingProducts.map((product, i) => {
            return (
              <div
                key={product.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4 px-2 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] cursor-pointer',
                  {
                    'border-t border-gray-200': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="relative overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image}
                      alt={`${product.product_name} product image`}
                      className="mr-4 rounded-md transform hover:scale-110 transition-transform duration-300"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base hover:text-blue-600 transition-colors duration-300">
                      {product.product_name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {product.sales} units sold
                    </p>
                  </div>
                </div>
                <p
                  className={`${fredoka.className} truncate text-sm font-medium md:text-base text-green-600 hover:text-green-700 transition-colors duration-300`}
                >
                  {product.revenue}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}