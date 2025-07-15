import { z } from "zod";

export const productFormSchema = z.object({
  id: z.number().min(0),
  title: z.string().min(1, { message: "Title is required" }),
  price: z.number().min(0.01, { message: "Price must be positive" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

export type IProduct = z.infer<typeof productFormSchema>;

export const defaultProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};
