import React from "react";
import InputList from "../molecules/inputList/inputList";
import axios from "axios";

type SendGame = {
  name: string;
  purpose: string;
  thematic: Array<string>;
  genre: string;
  materials: Array<string>;
  objectives: string;
  time: string;
};
const Home: React.FC = () => {
  const handleSendGame = ({
    name,
    purpose,
    thematic,
    genre,
    materials,
    objectives,
    time,
  }: SendGame) => {
    axios.post("http://localhost:3000/games", {
      name,
      purpose,
      thematic,
      genre,
      materials,
      objectives,
      time,
    });
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <InputList placeholder="Concepto Fundamental" />
      <button
        onClick={() =>
          handleSendGame({
            name: "juego",
            purpose: "cualquiera",
            thematic: [],
            genre: "genero",
            materials: [],
            objectives: "si",
            time: "1 min",
          })
        }
      >
        enviar
      </button>
    </div>
  );
};

export default Home;
