import React from "react";
import "./Home.css";
import logo from "../../assets/img/interactionLogo.webp"; // Replace with your logo
import Schedule from "../Schedule/Schedule";
import Coordinators from "../Coordinators/Coordinators";
import { useNavigate } from "react-router-dom";
import Sponsors from "../Sponsers/Sponsors";
import DeveloperList from "../DeveloperList/DeveloperList";

const rotatingWords = [
  "Gamer Strike",
  "Gold Rush",
  "Wisdom War",
  "Creativity Club",
  "Quick Reel",
  "Quantum Assembler",
  "Hack in the Dark",
];

const Home = () => {
  const navigate = useNavigate(); // Call useNavigate inside the component

  const goto = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="interaction-container">
        <h1 className="interaction-title">Interaction 2K25</h1>
        <button className="cta-button" onClick={goto}>
          Register
        </button>
      </div>
      <Coordinators />
      <Sponsors />
      <Schedule />
      <DeveloperList />
    </>
  );
};

export default Home;
