export interface IStateData<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export interface IStateDataParams {
  params?: string | number;
}