import { SendGame } from "./handleSend.type";
import axios from "axios";

export const handleSendGame = ({
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
