"use client";

import { IStateData } from "@/types/stateData";
import { useEffect, useState } from "react";

export const useStateData = <T>(fetchFunction: () => Promise<T>) => {
  const [state, setState] = useState<IStateData<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        setState({ data: response, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };
    fetchData();
  }, [fetchFunction]);

  return state;
};
