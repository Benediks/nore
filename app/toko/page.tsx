import Image from 'next/image';
import { fetchFilteredProducts } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import Navbar from '@/app/ui/dashboard/header';
import Footer from '@/app/ui/dashboard/footer';

export default async function CataloguePage() {
  const products = await fetchFilteredProducts('', 1);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Black background section for navbar */}
      <div className="bg-black h-20 w-full fixed top-0 z-40"></div>
      <Navbar />
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Header */}
        <div className="flex w-full items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Product Catalogue</h1>
        </div>

        {/* Product Grid */}
        <div className="mt-6 flow-root">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    fill
                    className="object-cover"
                    alt={`${product.product_name} product image`}
                  />
                  {/* Stock Badge */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.stock > 10 
                        ? 'bg-green-100 text-green-800' 
                        : product.stock > 0 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {product.product_name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price and Sales */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-green-600">
                      {formatCurrency(product.price)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.sales} sold
                    </span>
                  </div>

                  {/* Action Button */}
                  <button 
                    className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
                      product.stock > 0
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={product.stock === 0}
                  >
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products?.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}