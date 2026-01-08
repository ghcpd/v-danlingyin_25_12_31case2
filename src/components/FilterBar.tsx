interface FilterBarProps {
  category: string;
  onCategoryChange: (value: string) => void;
  minPrice: string;
  maxPrice: string;
  onPriceChange: (min: string, max: string) => void;
  sort: 'asc' | 'desc' | '';
  onSortChange: (value: 'asc' | 'desc' | '') => void;
  onReset: () => void;
  searchTerm?: string;
}

export const FilterBar = ({
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  sort,
  onSortChange,
  onReset,
  searchTerm,
}: FilterBarProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:flex-row md:items-end md:justify-between">
      <div className="grid flex-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Category
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
          >
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Min price
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => onPriceChange(e.target.value, maxPrice)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Max price
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => onPriceChange(minPrice, e.target.value)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Sort by price
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc' | '')}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-brand-blue"
          >
            <option value="">Featured</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-2 text-sm text-slate-600 md:w-52">
        {searchTerm && (
          <p className="rounded-lg bg-slate-100 px-3 py-2" aria-live="polite">
            Showing results for "{searchTerm}"
          </p>
        )}
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-100"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
};
