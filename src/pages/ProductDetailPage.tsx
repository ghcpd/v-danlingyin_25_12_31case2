import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { RatingStars } from '../components/RatingStars';
import { formatPrice } from '../utils/format';
import { QuantitySelector } from '../components/QuantitySelector';
import { useCartContext } from '../context/CartContext';

const ProductDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const { addItem } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-600">Product not found.</p>
        <Link to="/products" className="text-brand-blue hover:text-brand-teal">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-4">
        <Link to="/products" className="text-sm font-semibold text-brand-blue hover:text-brand-teal">
          ← Back to products
        </Link>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</p>
        <h1 className="text-3xl font-semibold text-slate-900">{product.title}</h1>
        <RatingStars rating={product.rating} />
        <p className="text-2xl font-semibold text-slate-900">{formatPrice(product.price)}</p>
        <p className="text-base text-slate-700">{product.description}</p>
        <div className="flex items-center gap-3">
          <QuantitySelector
            quantity={quantity}
            onChange={setQuantity}
            ariaLabel={`Select quantity for ${product.title}`}
            min={1}
          />
          <button
            type="button"
            onClick={() => addItem(product, quantity)}
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-teal"
            aria-label={`Add ${quantity} ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
