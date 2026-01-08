import { HeroBanner } from '../components/HeroBanner';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCartContext } from '../context/CartContext';

const sections = [
  { title: 'Electronics', category: 'Electronics' },
  { title: 'Books', category: 'Books' },
  { title: 'Fashion', category: 'Fashion' },
] as const;

const HomePage = (): JSX.Element => {
  const products = useProducts();
  const { addItem } = useCartContext();

  return (
    <div className="space-y-10">
      <HeroBanner />

      {sections.map((section) => {
        const items = products.filter((product) => product.category === section.category);
        return (
          <section key={section.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Featured</p>
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addItem} showAddButton={false} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HomePage;
