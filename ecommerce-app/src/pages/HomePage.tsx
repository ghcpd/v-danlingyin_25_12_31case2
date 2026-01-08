import { HeroBanner, ProductSection } from '../components';
import { getFeaturedProductsByCategory } from '../data/products';

const HomePage = (): JSX.Element => {
  const electronicsProducts = getFeaturedProductsByCategory('Electronics', 4);
  const booksProducts = getFeaturedProductsByCategory('Books', 4);
  const fashionProducts = getFeaturedProductsByCategory('Fashion', 4);

  return (
    <div>
      <HeroBanner />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductSection
          title="Electronics"
          products={electronicsProducts}
          viewAllLink="/products?category=Electronics"
        />
        
        <ProductSection
          title="Books"
          products={booksProducts}
          viewAllLink="/products?category=Books"
        />
        
        <ProductSection
          title="Fashion"
          products={fashionProducts}
          viewAllLink="/products?category=Fashion"
        />
      </div>
    </div>
  );
};

export default HomePage;
