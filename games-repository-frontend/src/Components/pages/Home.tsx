import React from "react";
import InputList from "../molecules/inputList/inputList";
import { handleSendGame } from "../../services/HandleSendGame/handleSend";
import { handleModifyGame } from "../../services/HandleModifyGame/handleModify";

const Home: React.FC = () => {
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
      <button
        onClick={() =>
          handleModifyGame({
            name: "juego",
            purpose: "hooka",
            thematic: [],
            genre: "action",
            materials: [],
            objectives: "si",
            time: "1 min",
            id:"1",
          })
        }
      >Modificar_Juego
      </button>
    </div>
  );
};

export default Home;
