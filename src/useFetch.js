import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(
    async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    },
    [url]
  );

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);
  return data;
};
