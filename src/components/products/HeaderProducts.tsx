import { IHeaderProductsProps } from "@/types/components/HeaderProducts";
import { useQueryDebounce } from "@/hooks/useQueryDebonce";

export const HeaderProducts = ({
  onAddProduct,
  onSearch = () => {},
}: IHeaderProductsProps) => {
  const onQueryChanged = useQueryDebounce({ onSearch });

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
