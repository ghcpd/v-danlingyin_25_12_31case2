import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { FilterBar } from '../components/FilterBar';
import { useProducts } from '../hooks/useProducts';
import { useCartContext } from '../context/CartContext';
import { Product } from '../types';

const ProductsPage = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') ?? '';
  const allProducts = useProducts(searchTerm);
  const { addItem } = useCartContext();

  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('');

  const filtered = useMemo(() => {
    let result: Product[] = [...allProducts];

    if (category) {
      result = result.filter((product) => product.category === category);
    }

    const min = minPrice ? Number(minPrice) : undefined;
    const max = maxPrice ? Number(maxPrice) : undefined;

    if (typeof min === 'number' && !Number.isNaN(min)) {
      result = result.filter((product) => product.price >= min);
    }
    if (typeof max === 'number' && !Number.isNaN(max)) {
      result = result.filter((product) => product.price <= max);
    }

    if (sort === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allProducts, category, maxPrice, minPrice, sort]);

  const handleReset = (): void => {
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
    setSort('');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Shop</p>
        <h1 className="text-3xl font-semibold text-slate-900">Products</h1>
        <p className="text-sm text-slate-600">Filter by category, price, and sort to find the right item.</p>
      </div>

      <FilterBar
        category={category}
        onCategoryChange={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onPriceChange={(min, max) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
        sort={sort}
        onSortChange={setSort}
        onReset={handleReset}
        searchTerm={searchTerm}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addItem} showAddButton />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-slate-600">
          No products match your filters.
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
