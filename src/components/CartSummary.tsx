import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';

interface CartSummaryProps {
  subtotal: number;
}

export const CartSummary = ({ subtotal }: CartSummaryProps): JSX.Element => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Order summary</h3>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
        <span>Subtotal</span>
        <span className="text-base font-semibold text-slate-900">{formatPrice(subtotal)}</span>
      </div>
      <p className="mt-2 text-xs text-slate-500">Taxes and shipping are simulated for this mock flow.</p>
      <Link
        to="/checkout"
        className="mt-4 block rounded-full bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-soft hover:bg-brand-teal"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};
