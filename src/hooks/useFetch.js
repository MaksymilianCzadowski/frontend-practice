import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const useFetch = (url, body, method) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          "authorization": Cookies.get("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setError(null);
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { isLoading, error, data, fetchData };
};

export default useFetch;
