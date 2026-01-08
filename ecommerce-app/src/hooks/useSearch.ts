import { useState, useCallback } from 'react';

interface UseSearchReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;
}

export const useSearch = (): UseSearchReturn => {
  const [searchQuery, setSearchQueryState] = useState<string>('');

  const setSearchQuery = useCallback((query: string): void => {
    setSearchQueryState(query);
  }, []);

  const clearSearch = useCallback((): void => {
    setSearchQueryState('');
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    clearSearch,
  };
};
