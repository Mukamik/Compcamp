import React from "react";
import { useParams, Link } from "react-router-dom";
import missions from "../data/missions";
import "./MissionDetail.css";

export default function MissionDetail() {
  const { missionId } = useParams();
  const mission = missions.find((m) => m.id === missionId);

  if (!mission) {
    return (
      <section>
        <h2>Mission not found</h2>
        <Link to="/missions">Back to Missions</Link>
      </section>
    );
  }

  return (
    <section className="mission-detail">
      <h2>{mission.title}</h2>
      <p className="goal"><strong>Goal:</strong> {mission.goal}</p>
      <div className="levels">
        {mission.levels.map((level) => (
          <div key={level.level} className="level-card" style={{ borderColor: level.color }}>
            <h3 style={{ color: level.color }}>
              Level {level.level}: {level.title}
            </h3>
            <p>
              <strong>Quest:</strong> {level.quest}
            </p>
            {level.example && (
              <pre className="example">
                <strong>Example:</strong>
                <br />
                {level.example}
              </pre>
            )}
            <p>
              <strong>Skills:</strong> {level.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
      <Link className="back-link" to="/missions">← Back to Missions</Link>
    </section>
  );
}