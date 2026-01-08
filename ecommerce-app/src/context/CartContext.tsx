import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CartState, CartItem, Product } from '../types';

const CartContext = createContext<CartState | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product): void => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string): void => {
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number): void => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const getCartTotal = useCallback((): number => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }, [items]);

  const getCartItemCount = useCallback((): number => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const clearCart = useCallback((): void => {
    setItems([]);
  }, []);

  const value: CartState = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartState => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
