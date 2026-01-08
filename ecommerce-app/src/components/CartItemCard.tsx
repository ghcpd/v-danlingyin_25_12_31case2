import { CartItem } from '../types';
import { useCart } from '../context';
import { formatPrice } from '../utils';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps): JSX.Element => {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  const handleDecrease = (): void => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleIncrease = (): void => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleRemove = (): void => {
    removeItem(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-md">
      {/* Product Image */}
      <div className="flex-shrink-0 w-full sm:w-32 h-32">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <p className="text-lg font-bold text-gray-900 mb-4">
          {formatPrice(product.price)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={handleDecrease}
              className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-inset rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={`Decrease quantity of ${product.title}`}
              disabled={quantity <= 1}
            >
              −
            </button>
            <span 
              className="px-4 py-1 text-center min-w-[50px] font-medium"
              aria-label={`Quantity: ${quantity}`}
            >
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-inset rounded-r-lg"
              aria-label={`Increase quantity of ${product.title}`}
            >
              +
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="text-red-600 hover:text-red-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
            aria-label={`Remove ${product.title} from cart`}
          >
            Remove
          </button>
        </div>
      </div>

      {/* Item Total */}
      <div className="flex-shrink-0 text-right">
        <p className="text-sm text-gray-500">Subtotal</p>
        <p className="text-lg font-bold text-gray-900">
          {formatPrice(product.price * quantity)}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
