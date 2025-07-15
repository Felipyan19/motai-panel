import { useForm } from "react-hook-form";
import { IProduct } from "@/lib/schemas/product";

interface FormProductProps {
  product: IProduct;
  onSubmit: (data: IProduct) => void;
}

export const FormProduct = ({ product, onSubmit }: FormProductProps) => {
  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: product,
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {product.id ? "Edit Product" : "Add Product"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          {...register("title")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-2 border border-gray-300 rounded h-20"
        />
        <input
          type="text"
          placeholder="Category"
          {...register("category")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="url"
          placeholder="Image URL"
          {...register("image")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};
