import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context';
import { formatPrice, truncateText } from '../utils';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps): JSX.Element => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <Link 
        to={`/products/${product.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
        aria-label={`View details for ${product.title}`}
      >
        <div className="relative pt-[100%] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-amazon-orange transition-colors">
            {truncateText(product.title, 50)}
          </h3>
          
          <div className="mb-2">
            <StarRating rating={product.rating} showValue size="sm" />
          </div>
          
          <p className="text-lg font-bold text-gray-900 mb-3">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
      
      {showAddToCart && (
        <div className="px-4 pb-4 mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full bg-amazon-orange hover:bg-amazon-orange-hover text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      )}
      
      {!showAddToCart && (
        <div className="px-4 pb-4 mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="block w-full text-center bg-amazon-dark hover:bg-amazon-light text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amazon-dark focus:ring-offset-2"
            aria-label={`View product ${product.title}`}
          >
            View Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
