import { Link } from 'react-router-dom';
import { Product } from '../types';
import { RatingStars } from './RatingStars';
import { formatPrice } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  showAddButton?: boolean;
}

export const ProductCard = ({ product, onAddToCart, showAddButton = true }: ProductCardProps): JSX.Element => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2">{product.title}</h3>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {product.category}
          </span>
        </div>
        <RatingStars rating={product.rating} />
        <p className="text-lg font-semibold text-slate-900">{formatPrice(product.price)}</p>
        <div className="mt-auto flex items-center gap-3">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-800 hover:border-slate-300"
          >
            View Product
          </Link>
          {showAddButton && onAddToCart && (
            <button
              type="button"
              aria-label={`Add ${product.title} to cart`}
              onClick={() => onAddToCart(product)}
              className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-teal"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
