import { IProduct } from "@/lib/schemas/product";
import { useState } from "react";

export const HeaderProducts = ({
  setProducts,
  onAddProduct,
}: {
  setProducts: (products: IProduct[]) => void;
  onAddProduct: () => void;
}) => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded-md p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
