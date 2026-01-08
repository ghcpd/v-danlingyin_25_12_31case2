export interface Product {
  id: string;
  title: string;
  category: 'Electronics' | 'Books' | 'Fashion';
  price: number;
  rating: number;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  clearCart: () => void;
}

export type SortOption = 'price-low-high' | 'price-high-low';

export interface FilterState {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  sortBy: SortOption | null;
}

export interface CheckoutFormData {
  fullName: string;
  address: string;
  email: string;
  paymentMethod: 'credit-card' | 'paypal';
}
