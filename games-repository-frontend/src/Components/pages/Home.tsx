import React from "react";
import InputList from "../molecules/inputList";
import { handleSendGame } from "../../services/HandleSendGame/handleSend";
import { handleModifyGame } from "../../services/HandleModifyGame/handleModify";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <InputList placeholder="Concepto Fundamental" />
      <button
        type="submit"
        onClick={() => {
          handleSendGame({
            name: "Chess 2.0",
            concepts: "Advanced Strategy",
            purpose: "Enhance skills",
            objectives: ["Think ahead", "Plan tactics"],
            materials: ["Board", "Pieces"],
            rules: ["Take turns", "Win fairly"],
            winner: "The first to checkmate",
            genre: "Board game",
            time: "40 minutes",
            teams: {
              min: 2,
              max: 2,
            },
            level: "Advanced",
            related: [
              {
                description: "Game rules",
                url: "https://example.com/rules/",
              },
            ],
            thematic: ["Board games", "Strategy"],
          });
        }}
      >
        Submit Game
      </button>
      <button
      type="submit"
      onClick={() => {
        handleModifyGame({
          name: "Frutas",
          purpose: "Enhance skills",
          thematic: ["Board games", "Strategy"],
          genre: "Board game",
          materials: ["Board", "Pieces"],
          objectives: ["Think ahead", "Plan tactics"],
          time: "40 minutes",
          concepts: "Advanced Strategy",
          rules: ["Take turns", "Win fairly"],
          winner: "The first to checkmate",
          teams: {
            min: 2,
            max: 2,
          },
          level: "Advanced",
          related: [
            {
              description: "Game rules",
              url: "https://example.com/rules/",
            },
          ],          
        },
        1
      );

      }}
      >
        Modify
      </button>
    </div>
  );
};

export default Home;
