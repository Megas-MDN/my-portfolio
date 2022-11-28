import React, { useEffect, useMemo, useState } from "react";
import useFetchPortifolio from "../hooks/useFetchPortifolio";
import PortifolioContext from "./PortifolioContext";

function ProtifolioProvider({ children }) {
  const [projectsDB, setProjectsDB] = useState([]);
  const [onGoingDB, setOnGoingDB] = useState([]);
  const { data: dataFetch } = useFetchPortifolio([]);

  useEffect(() => {
    setOnGoingDB(dataFetch.OnGoinData);
    setProjectsDB(dataFetch.ProjectsData);
  }, [dataFetch]);

  const data = useMemo(
    () => ({
      projectsData: projectsDB,
      onGoingData: onGoingDB,
    }),
    [projectsDB, onGoingDB]
  );

  return (
    <PortifolioContext.Provider value={data}>
      {children}
    </PortifolioContext.Provider>
  );
}

export default ProtifolioProvider;
