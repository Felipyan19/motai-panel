import { useForm as useFormHook } from "react-hook-form";
import { IProduct } from "@/lib/schemas/product";

export const useForm = () => {
  const { register, handleSubmit, reset } = useFormHook<IProduct>();

  return { register, handleSubmit, reset };
};