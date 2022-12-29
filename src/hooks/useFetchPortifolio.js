import { useEffect, useState } from 'react';
// import { ProjectsData, OnGoinData } from "../data";

function useFetchPortifolio(endpoint = '') {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // const dataFromDB = { ProjectsData, OnGoinData }; // fake fetch Api
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { loading, error, data };
}

export default useFetchPortifolio;
