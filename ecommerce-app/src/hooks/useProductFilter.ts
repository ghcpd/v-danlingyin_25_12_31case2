import { useState, useMemo, useCallback } from 'react';
import { Product, FilterState, SortOption } from '../types';

interface UseProductFilterReturn {
  filters: FilterState;
  setCategory: (category: string) => void;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setSortBy: (sort: SortOption | null) => void;
  resetFilters: () => void;
  filterAndSortProducts: (products: Product[]) => Product[];
}

const initialFilters: FilterState = {
  category: 'All',
  minPrice: null,
  maxPrice: null,
  sortBy: null,
};

export const useProductFilter = (): UseProductFilterReturn => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const setCategory = useCallback((category: string): void => {
    setFilters(prev => ({ ...prev, category }));
  }, []);

  const setMinPrice = useCallback((minPrice: number | null): void => {
    setFilters(prev => ({ ...prev, minPrice }));
  }, []);

  const setMaxPrice = useCallback((maxPrice: number | null): void => {
    setFilters(prev => ({ ...prev, maxPrice }));
  }, []);

  const setSortBy = useCallback((sortBy: SortOption | null): void => {
    setFilters(prev => ({ ...prev, sortBy }));
  }, []);

  const resetFilters = useCallback((): void => {
    setFilters(initialFilters);
  }, []);

  const filterAndSortProducts = useCallback((products: Product[]): Product[] => {
    let result = [...products];

    // Filter by category
    if (filters.category && filters.category !== 'All') {
      result = result.filter(product => product.category === filters.category);
    }

    // Filter by min price
    if (filters.minPrice !== null) {
      result = result.filter(product => product.price >= filters.minPrice!);
    }

    // Filter by max price
    if (filters.maxPrice !== null) {
      result = result.filter(product => product.price <= filters.maxPrice!);
    }

    // Sort products
    if (filters.sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  return useMemo(() => ({
    filters,
    setCategory,
    setMinPrice,
    setMaxPrice,
    setSortBy,
    resetFilters,
    filterAndSortProducts,
  }), [filters, setCategory, setMinPrice, setMaxPrice, setSortBy, resetFilters, filterAndSortProducts]);
};
