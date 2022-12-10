import React, { useEffect, useMemo, useState } from "react";
import useFetchPortifolio from "../hooks/useFetchPortifolio";
import PortifolioContext from "./PortifolioContext";
import {urlProjects, urlOnGoing} from '../services/endpoints';

function ProtifolioProvider({ children }) {
  const [projectsDB, setProjectsDB] = useState([]);
  const [onGoingDB, setOnGoingDB] = useState([]);
  const projects = useFetchPortifolio(urlProjects);
  const ongoinig = useFetchPortifolio(urlOnGoing);

  useEffect(() => {
    setOnGoingDB(ongoinig.data);
    setProjectsDB(projects.data);
  }, [ongoinig.data, projects.data]);

  const data = useMemo(
    () => ({
      projectsData: projectsDB,
      onGoingData: onGoingDB,
      errors: [projects.error, ongoinig.error],
      projectsLoading: projects.loading,
      ongoingLoading: ongoinig.loading,
    }),
    [onGoingDB, ongoinig.error, ongoinig.loading, projects.error, projects.loading, projectsDB]
  );

  return (
    <PortifolioContext.Provider value={data}>
      {children}
    </PortifolioContext.Provider>
  );
}

export default ProtifolioProvider;
