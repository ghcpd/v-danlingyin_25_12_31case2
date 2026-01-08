import { Link } from 'react-router-dom';

const HeroBanner = (): JSX.Element => {
  return (
    <section className="relative bg-gradient-to-r from-amazon-dark to-amazon-light text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to <span className="text-amazon-orange">ShopZone</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Discover amazing deals on Electronics, Books, and Fashion. 
              Your one-stop shop for everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-block bg-amazon-orange hover:bg-amazon-orange-hover text-white font-bold py-3 px-8 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2 focus:ring-offset-amazon-dark"
              >
                Shop Now
              </Link>
              <Link
                to="/products?category=Electronics"
                className="inline-block border-2 border-white hover:bg-white hover:text-amazon-dark font-bold py-3 px-8 rounded-lg transition-colors text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amazon-dark"
              >
                Browse Electronics
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-amazon-orange opacity-10 rounded-full"></div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amazon-yellow opacity-10 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Shopping experience"
              className="relative z-10 rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
