import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useFetchBook = (baseUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [searchParams, setSearchParams] = useSearchParams({category: ""});
  const category = searchParams.get('category') || "";

  const fetchData = async () => {
    try {
      let url = baseUrl;
      if(category) {
        url += `?category=${category}`;
      }
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleCategoryChange = (e) => {
    setSearchParams((prev) => {
      prev.set('category', e.target.value)
      return prev
    }, {replace: true});
  };

  return {
    data,
    isLoading,
    error,
    category,
    handleCategoryChange,
  };
};

export default useFetchBook;
