import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context';

const Header = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartItemCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartItemCount();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-amazon-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 text-white text-xl sm:text-2xl font-bold hover:text-amazon-orange transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2 focus:ring-offset-amazon-dark rounded"
            aria-label="ShopZone Home"
          >
            <span className="text-amazon-orange">Shop</span>Zone
          </Link>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch} 
            className="flex-1 max-w-2xl mx-4 hidden sm:block"
            role="search"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full py-2 px-4 pr-12 rounded-lg border-2 border-transparent focus:border-amazon-orange focus:outline-none transition-colors"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-4 bg-amazon-orange hover:bg-amazon-orange-hover rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
                aria-label="Submit search"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center text-white hover:text-amazon-orange transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2 focus:ring-offset-amazon-dark rounded p-1"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amazon-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
            <span className="ml-2 hidden md:inline font-medium">Cart</span>
          </Link>
        </div>

        {/* Mobile Search Bar */}
        <form 
          onSubmit={handleSearch} 
          className="pb-4 sm:hidden"
          role="search"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-12 rounded-lg border-2 border-transparent focus:border-amazon-orange focus:outline-none transition-colors"
              aria-label="Search products on mobile"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-amazon-orange hover:bg-amazon-orange-hover rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
              aria-label="Submit search on mobile"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
