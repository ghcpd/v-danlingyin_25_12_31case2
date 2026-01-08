export type Category = 'Electronics' | 'Books' | 'Fashion';

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  rating: number;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
