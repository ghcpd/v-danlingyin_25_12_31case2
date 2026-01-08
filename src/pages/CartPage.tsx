import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { CartItemRow } from '../components/CartItemRow';
import { CartSummary } from '../components/CartSummary';

const CartPage = (): JSX.Element => {
  const { items, updateQuantity, removeItem, subtotal } = useCartContext();

  if (items.length === 0) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
        <p className="text-slate-600">Your cart is empty. Add items to get started.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-teal"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr] lg:items-start">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Your cart</h1>
        {items.map((item) => (
          <CartItemRow
            key={item.product.id}
            item={item}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </div>
      <CartSummary subtotal={subtotal} />
    </div>
  );
};

export default CartPage;
