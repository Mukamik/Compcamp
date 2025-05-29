import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <h2>Welcome to CodeQuest! 🌟</h2>
      <p>
        Ready to go on an epic quest and learn some super cool coding skills? <br />
        This is your adventure map to becoming a coding whiz!
      </p>
      <ol>
        <li>
          <strong>Pick a Mission Zone:</strong>{" "}
          Choose a coding skill you want to explore.
        </li>
        <li>
          <strong>Know Your Level:</strong>{" "}
          Each skill has 4 levels. Pick the one that matches you!
        </li>
        <li>
          <strong>Do the Quest:</strong>{" "}
          Try the task for your level, and level up when you're ready!
        </li>
      </ol>
      <Link className="cta" to="/missions">
        🚀 Start Your Adventure
      </Link>
    </section>
  );
}