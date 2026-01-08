import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSection = ({ title, products, viewAllLink }: ProductSectionProps): JSX.Element => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="text-amazon-blue hover:text-amazon-orange transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded px-2 py-1"
          >
            See all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} showAddToCart={false} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
