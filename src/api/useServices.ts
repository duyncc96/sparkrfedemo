import { AxiosPromise } from "axios";
import React from "react";
type useAPIServiceType<T> = {
  data: T | undefined;
  isLoading?: boolean;
  error: any;
  invoke: any;
};
export default function useAPIService<T>(
  functionService: (param?: any) => AxiosPromise<T>
): useAPIServiceType<T> {
  const [data, setData] = React.useState<T | undefined>();
  const [error, setError] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const invoke = React.useCallback(
    async (param?: any) => {
      try {
        setIsLoading(true);
        const res = await functionService(param);
        setData(res.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [functionService]
  );
  return { invoke, data, error, isLoading };
}
