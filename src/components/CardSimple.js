import "./CardSimple.css";
import React, { useContext } from "react";
import Card from "./Card";
import PortifolioContext from "../context/PortifolioContext";

const CardSimple = () => {
  const { onGoingData } = useContext(PortifolioContext);

  return (
    <div className="card-simple">
      <div className="card-container">
        {[...(onGoingData || [])].reverse().map((card, i) => (
          <Card key={`${card.id}${card.title}${i}`} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSimple;
