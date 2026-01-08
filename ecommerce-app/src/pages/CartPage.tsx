import { Link } from 'react-router-dom';
import { CartItemCard } from '../components';
import { useCart } from '../context';
import { formatPrice } from '../utils';

const CartPage = (): JSX.Element => {
  const { items, getCartTotal, getCartItemCount } = useCart();
  const cartTotal = getCartTotal();
  const itemCount = getCartItemCount();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <svg
          className="mx-auto h-24 w-24 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-600">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/products"
          className="inline-block mt-6 bg-amazon-orange hover:bg-amazon-orange-hover text-white font-medium py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <CartItemCard key={item.product.id} item={item} />
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Items ({itemCount})</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-amazon-orange hover:bg-amazon-orange-hover text-white text-center font-bold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange focus:ring-offset-2"
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="block w-full mt-4 text-center text-amazon-blue hover:text-amazon-orange font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amazon-orange rounded py-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
