import { CartItem } from '../types';
import { QuantitySelector } from './QuantitySelector';
import { RatingStars } from './RatingStars';
import { formatPrice } from '../utils/format';

interface CartItemRowProps {
  item: CartItem;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItemRow = ({ item, onQuantityChange, onRemove }: CartItemRowProps): JSX.Element => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-[160px,1fr,150px]">
      <img
        src={item.product.image}
        alt={item.product.title}
        className="h-24 w-full rounded-xl object-cover"
        loading="lazy"
      />
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-slate-900">{item.product.title}</h3>
        <RatingStars rating={item.product.rating} />
        <p className="text-sm text-slate-600">{item.product.category}</p>
        <button
          type="button"
          onClick={() => onRemove(item.product.id)}
          className="text-sm font-semibold text-brand-blue hover:text-brand-teal"
          aria-label={`Remove ${item.product.title} from cart`}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col items-end justify-between gap-2">
        <p className="text-lg font-semibold text-slate-900">{formatPrice(item.product.price)}</p>
        <QuantitySelector
          quantity={item.quantity}
          onChange={(value) => onQuantityChange(item.product.id, value)}
          ariaLabel={`Adjust quantity for ${item.product.title}`}
          min={1}
        />
      </div>
    </div>
  );
};
