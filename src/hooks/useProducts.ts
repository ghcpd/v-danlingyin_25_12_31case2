import { useMemo } from 'react';
import { products } from '../data/products';
import { Product } from '../types';

export const useProducts = (searchTerm?: string): Product[] => {
  const normalized = searchTerm?.trim().toLowerCase() ?? '';

  return useMemo(() => {
    if (!normalized) return products;
    return products.filter((product) =>
      `${product.title} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized]);
};
