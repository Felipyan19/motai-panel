import { ChangeEvent, useRef } from "react";
import { HeaderProductsProps } from "@/types/components";

export const HeaderProducts = ({ onAddProduct, onSearch }: HeaderProductsProps) => {
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

  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-md p-2"
        onChange={onQueryChanged}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};
