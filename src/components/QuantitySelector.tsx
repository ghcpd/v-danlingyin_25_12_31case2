interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  min?: number;
  ariaLabel?: string;
}

export const QuantitySelector = ({ quantity, onChange, min = 1, ariaLabel }: QuantitySelectorProps): JSX.Element => {
  const increment = (): void => onChange(quantity + 1);
  const decrement = (): void => onChange(Math.max(min, quantity - 1));

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white text-sm shadow-soft" aria-label={ariaLabel}>
      <button
        type="button"
        onClick={decrement}
        className="h-9 w-9 rounded-l-full text-lg font-semibold text-slate-700 hover:bg-slate-100"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <div className="w-12 text-center font-semibold text-slate-900">{quantity}</div>
      <button
        type="button"
        onClick={increment}
        className="h-9 w-9 rounded-r-full text-lg font-semibold text-slate-700 hover:bg-slate-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
