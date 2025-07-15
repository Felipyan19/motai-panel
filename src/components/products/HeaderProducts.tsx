import { IHeaderProductsProps } from "@/types/components/HeaderProducts";
import { useQueryDebounce } from "@/hooks/useQueryDebonce";

export const HeaderProducts = ({
  onAddProduct,
  onSearch = () => {},
}: IHeaderProductsProps) => {
  const onQueryChanged = useQueryDebounce({ onSearch });

  return (
    <div className="flex justify-center items-center mt-5 gap-5">
      <input
        type="text"
        placeholder="Search"
        className="border border-dark-border rounded-md p-2"
        onChange={onQueryChanged}
      />
      <button
        className="bg-dark-button text-dark-text px-4 py-2 rounded"
        onClick={onAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};
