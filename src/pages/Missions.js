import React from "react";
import missions from "../data/missions";
import { Link } from "react-router-dom";
import "./Missions.css";

export default function Missions() {
  return (
    <section className="missions">
      <h2>Choose Your Mission Zone!</h2>
      <div className="mission-list">
        {missions.map((mission) => (
          <Link key={mission.id} to={`/missions/${mission.id}`} className="mission-card">
            <h3>{mission.title}</h3>
            <p>{mission.goal}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}