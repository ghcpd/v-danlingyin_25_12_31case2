import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const electronics = products.filter((p) => p.category === 'Electronics').slice(0, 3);
  const books = products.filter((p) => p.category === 'Books').slice(0, 3);
  const fashion = products.filter((p) => p.category === 'Fashion').slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amazon-blue to-blue-900 text-white rounded-lg shadow-lg p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Amazon-Store
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover amazing products at unbeatable prices
        </p>
        <Link
          to="/products"
          className="inline-block bg-amazon-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Shop Now
        </Link>
      </section>

      {/* Electronics Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Electronics</h2>
          <Link
            to="/products?category=Electronics"
            className="text-amazon-orange hover:text-orange-600 font-semibold"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {electronics.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Books</h2>
          <Link
            to="/products?category=Books"
            className="text-amazon-orange hover:text-orange-600 font-semibold"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Fashion Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Fashion</h2>
          <Link
            to="/products?category=Fashion"
            className="text-amazon-orange hover:text-orange-600 font-semibold"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fashion.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
