import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  const createItem = useCallback(
    async (newItem) => {
      setLoading(true);
      try {
        await axios.post(url, newItem);
        await fetchData();
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    },
    [url]
  );

  const updateItem = useCallback(
    async (itemId, updatedItem) => {
      setLoading(true);
      try {
        await axios.put(`${url}/${itemId}`, updatedItem);
        await fetchData();
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    },
    [url]
  );
  const deleteItem = useCallback(
    async (itemId) => {
      setLoading(true);
      try {
        await axios.delete(`${url}/${itemId}`);
        fetchData();
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    },
    [url]
  );

  return { data, loading, error, createItem, updateItem, deleteItem };
}

export default useApi;
