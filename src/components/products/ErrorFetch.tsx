import { IErrorFetch } from "@/types/components/ErrorFetch";

export const ErrorFetch = ({ error, onLoad }: IErrorFetch) => {

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <h1 className="text-dark-text text-2xl font-bold">Error fetching products {error}</h1>
        <button className="bg-dark-button text-dark-text px-4 py-2 rounded" onClick={() => onLoad?.()}>Try again</button>
    </div>
    );
    };
