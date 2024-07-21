import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Fetching data from API
 *
 * @param {string} url the URL for the API
 * @returns {[boolean, object]} [the state of the fetching, the fetched data]
 *
 */
export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchedData(response.data.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return [loaded, fetchedData];
};
