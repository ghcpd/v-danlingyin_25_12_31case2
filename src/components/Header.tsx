import { FormEvent, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-200'
  }`;

export const Header = (): JSX.Element => {
  const { totalItems } = useCartContext();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/products?q=${encodeURIComponent(query)}` : '/products');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-white grid place-items-center font-semibold shadow-soft">
            A
          </span>
          <div className="leading-tight">
            <p className="text-sm text-slate-500">Amazon-like</p>
            <p className="text-lg font-semibold text-slate-900">Aurora Shop</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 ml-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart
          </NavLink>
        </nav>

        <form
          onSubmit={handleSubmit}
          className="flex-1 flex items-center gap-2 max-w-xl ml-auto"
          role="search"
        >
          <input
            aria-label="Search products"
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-inner focus:border-brand-blue"
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-slate-800"
          >
            Search
          </button>
        </form>

        <Link
          to="/cart"
          aria-label="View cart"
          className="relative ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-white shadow-soft hover:bg-brand-teal"
        >
          <span aria-hidden="true" className="text-lg">
            🛒
          </span>
          <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-brand-blue shadow-soft">
            {totalItems}
          </span>
        </Link>
      </div>
    </header>
  );
};
