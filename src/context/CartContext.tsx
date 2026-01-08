import { createContext, useContext, useMemo, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((item) => item.product.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + action.quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { product: action.product, quantity: action.quantity }] };
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter((item) => item.product.id !== action.productId) };
    }
    case 'UPDATE_QUANTITY': {
      return {
        items: state.items
          .map((item) =>
            item.product.id === action.productId ? { ...item, quantity: action.quantity } : item
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default:
      return state;
  }
};

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  subtotal: number;
  totalItems: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (product: Product, quantity = 1): void => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  };

  const removeItem = (productId: string): void => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number): void => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const subtotal = useMemo(
    () => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [state.items]
  );

  const totalItems = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const value: CartContextValue = useMemo(
    () => ({ items: state.items, addItem, removeItem, updateQuantity, subtotal, totalItems }),
    [state.items, subtotal, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCartContext must be used within CartProvider');
  }
  return ctx;
};
