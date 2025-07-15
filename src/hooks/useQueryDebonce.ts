import { ChangeEvent, useRef } from "react";

interface UseQueryDebounceProps {
  onSearch: (query: string) => void;
}

export const useQueryDebounce = ({ onSearch }: UseQueryDebounceProps) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  if (debounceRef.current) {
    clearTimeout(debounceRef.current);
  }
  debounceRef.current = setTimeout(() => {
    onSearch?.(value);
  }, 500);
};

  return onQueryChanged;
};