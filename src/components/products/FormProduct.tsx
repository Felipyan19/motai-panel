import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormProductProps } from "@/types/components/FormProducts";
import { productFormSchema, IProductFormData } from "@/lib/schemas/product";
import { ErrorInput } from "../ui/ErrorInput";

export const FormProduct = ({
  product,
  onSubmit: onSubmitProduct,
}: IFormProductProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IProductFormData>({
    defaultValues: product,
    resolver: zodResolver(productFormSchema),
  });

  const onSubmit = (data: IProductFormData) => {
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
        {errors.title && <ErrorInput error={errors.title.message ?? ""} />}

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          {...register("price", { valueAsNumber: true })}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.price && <ErrorInput error={errors.price.message ?? ""} />}

        <textarea
          placeholder="Description"
          {...register("description")}
          className="w-full p-2 border border-dark-border rounded h-20"
        />
        {errors.description && (
          <ErrorInput error={errors.description.message ?? ""} />
        )}

        <input
          type="text"
          placeholder="Category"
          {...register("category")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.category && (
          <ErrorInput error={errors.category.message ?? ""} />
        )}

        <input
          type="url"
          placeholder="Image URL"
          {...register("image")}
          className="w-full p-2 border border-dark-border rounded"
        />
        {errors.image && <ErrorInput error={errors.image.message ?? ""} />}

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
