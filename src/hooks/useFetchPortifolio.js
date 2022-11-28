import { useEffect, useState } from "react";
import { ProjectsData, OnGoinData } from "../data";

function useFetchPortifolio() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      try {
        setLoading(true);
        const dataFromDB = { ProjectsData, OnGoinData }; // fake fetch Api
        setData(dataFromDB);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return { loading, error, data };
}

export default useFetchPortifolio;
