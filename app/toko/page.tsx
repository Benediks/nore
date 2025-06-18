import Image from 'next/image';
import { fetchFilteredProducts, fetchProductsPages } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import Link from 'next/link';
import Navbar from '@/app/ui/dashboard/header';
import Footer from '@/app/ui/dashboard/footer';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/products/pagination';

// Function to highlight matching text
function highlightText(text: string, query: string) {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
}

export default async function CataloguePage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // Fetch products with search query and pagination
  const products = await fetchFilteredProducts(query, currentPage);
  const totalPages = await fetchProductsPages(query);

  return (
    <main className="min-h-screen flex flex-col bg-grey">
      {/* Black background section for navbar */}
      <div className="bg-black h-20 w-full fixed top-0 z-40"></div>
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Header with Search */}
        <div className="flex w-full items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">
            Product Catalogue
            {query && (
              <span className="text-lg font-normal text-gray-300 ml-2">
                - Results for "{query}" ({products?.length || 0} found)
              </span>
            )}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <Search placeholder="Search products by name or description..." />
        </div>

        {/* Product Grid */}
        <div className="mt-6 flow-root">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
              <Link key={product.id} href={`/detailproduk`}>
                <div
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${query && (
                      product.product_name.toLowerCase().includes(query.toLowerCase()) ||
                      product.description.toLowerCase().includes(query.toLowerCase())
                    ) ? 'ring-2 ring-blue-400 ring-opacity-75 shadow-lg transform scale-105' : ''
                    }`}
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
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock > 10
                          ? 'bg-green-100 text-green-800'
                          : product.stock > 0
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                      </span>
                    </div>

                    {/* Search Match Badge */}
                    {query && (
                      product.product_name.toLowerCase().includes(query.toLowerCase()) ||
                      product.description.toLowerCase().includes(query.toLowerCase())
                    ) && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Match
                          </span>
                        </div>
                      )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3
                      className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1"
                      dangerouslySetInnerHTML={{
                        __html: highlightText(product.product_name, query)
                      }}
                    />

                    <p
                      className="text-sm text-gray-600 mb-3 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: highlightText(product.description, query)
                      }}
                    />

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
                      className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 ${product.stock > 0
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      disabled={product.stock === 0}
                    >
                      {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {products?.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-500">
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
              <h3 className="mt-2 text-sm font-medium text-white">
                {query ? `No products found for "${query}"` : 'No products found'}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {query
                  ? 'Try adjusting your search criteria or browse all products.'
                  : 'Check back later for new products.'
                }
              </p>
              {query && (
                <button
                  onClick={() => window.location.href = window.location.pathname}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>

        {/* Search Results Summary */}
        {query && products && products.length > 0 && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <p className="text-blue-800">
                Found <strong>{products.length}</strong> product{products.length !== 1 ? 's' : ''} matching "<strong>{query}</strong>" on page {currentPage}
              </p>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}