import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProductProps } from "@/types/components";
import { productFormSchema } from "@/lib/schemas/product";
import { useEffect } from "react";

export const FormProduct = ({
  product,
  onSubmit: onSubmitProduct,
}: FormProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof productFormSchema>>({
    defaultValues: product,
    resolver: zodResolver(productFormSchema),
  });

  const onSubmit = (data: z.infer<typeof productFormSchema>) => {
    onSubmitProduct(data);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

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
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-2 border border-gray-300 rounded h-20"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <input
          type="text"
          placeholder="Category"
          {...register("category")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}

        <input
          type="url"
          placeholder="Image URL"
          {...register("image")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
};
