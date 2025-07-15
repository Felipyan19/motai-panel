import { IErrorInput } from "@/types/components/ErrorInput";

export const ErrorInput = ({ error }: IErrorInput) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <p className="text-dark-error text-sm mt-1">{error}</p>
    </div>
  );
};