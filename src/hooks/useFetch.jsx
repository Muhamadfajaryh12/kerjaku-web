import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useFetch = (url) => {
  const { state } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetching = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });

      const result = await response.json();
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return {
    data,
    loading,
  };
};
