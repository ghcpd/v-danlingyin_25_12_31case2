import { FormEvent, useState } from 'react';

const CheckoutPage = (): JSX.Element => {
  const [status, setStatus] = useState<'idle' | 'placed'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setStatus('placed');
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Checkout</p>
        <h1 className="text-3xl font-semibold text-slate-900">Secure your order</h1>
        <p className="text-sm text-slate-600">Mock checkout form. No payment will be processed.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Full name
            <input
              name="fullName"
              required
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
              placeholder="Alex Morgan"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Address
          <input
            name="address"
            required
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
            placeholder="123 Main St, City"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Payment method
          <select
            name="payment"
            required
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
          >
            <option value="">Select a method</option>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-teal"
        >
          Place Order
        </button>
        {status === 'placed' && (
          <p className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700" role="status">
            Order placed (mock). You will not be charged.
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;
