import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components';
import { mockProducts, getCategories } from '../data/products';
import { Product, SortOption } from '../types';
import { useProductFilter } from '../hooks';

const ProductListingPage = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  
  const {
    filters,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setSortBy,
    filterAndSortProducts,
  } = useProductFilter();

  const categories = getCategories();
  const searchQuery = searchParams.get('search') || '';

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setCategory(categoryParam);
    }
  }, [searchParams, categories, setCategory]);

  // Filter products by search query and other filters
  const filteredProducts = useMemo((): Product[] => {
    let products = [...mockProducts];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        product =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    return filterAndSortProducts(products);
  }, [searchQuery, filterAndSortProducts]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setCategory(value);
    
    if (value && value !== 'All') {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setMinPriceInput(value);
    setMinPrice(value ? parseFloat(value) : null);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setMaxPriceInput(value);
    setMaxPrice(value ? parseFloat(value) : null);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as SortOption | '';
    setSortBy(value || null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h1>
        <p className="text-gray-600 mt-2">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white p-4 rounded-lg shadow-md sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={filters.category}
                onChange={handleCategoryChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPriceInput}
                  onChange={handleMinPriceChange}
                  min="0"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
                  aria-label="Minimum price"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPriceInput}
                  onChange={handleMaxPriceChange}
                  min="0"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
                  aria-label="Maximum price"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="mb-4">
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={filters.sortBy || ''}
                onChange={handleSortChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:border-transparent"
              >
                <option value="">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-16 w-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} showAddToCart={true} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;
