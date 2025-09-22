import { useCallback, useEffect, useState } from 'react';

export default function useDataAPI(callback) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const results = await callback();
      setData(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  useEffect(() => {
    fetchData();
  }, [callback, fetchData]);

  return { isLoading, data, refetch: fetchData };
}
