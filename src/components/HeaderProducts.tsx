import { useState } from "react";
import { IProduct } from "@/lib/schemas/product";

export const HeaderProducts = ({
  onAddProduct,
}: {
  onAddProduct: (product: IProduct) => void;
}) => {
  const [search, setSearch] = useState("");

  const handleAddProduct = () => {
    onAddProduct({
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    });
  };

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
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};
