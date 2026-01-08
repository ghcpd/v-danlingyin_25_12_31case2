export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  address: string;
  email: string;
  paymentMethod: 'Credit Card' | 'PayPal';
}

export type SortOption = 'price-low-high' | 'price-high-low';

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
}
