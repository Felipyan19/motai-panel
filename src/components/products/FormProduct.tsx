import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IFormProductProps } from "@/types/components/FormProducts";
import { productFormSchema } from "@/lib/schemas/product";

export const FormProduct = ({
  product,
  onSubmit: onSubmitProduct,
}: IFormProductProps) => {
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Product Name"
          {...register("title")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          {...register("price")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-2 border border-dark-border rounded h-20"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <input
          type="text"
          placeholder="Category"
          {...register("category")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}

        <input
          type="url"
          placeholder="Image URL"
          {...register("image")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}

        <button
          type="submit"
          className="w-full bg-dark-button text-dark-text p-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
};
