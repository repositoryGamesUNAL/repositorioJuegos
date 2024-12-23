import { SendGame } from "./handleSend.type";
import axios from "axios";

export const handleSendGame = async ({
  name,
  purpose,
  thematic,
  genre,
  materials,
  objectives,
  time,
  description,
  concepts,
  rules,
  winner,
  teams,
  level,
  related,
}: SendGame): Promise<number> => {
  return await axios
    .post("http://localhost:3000/games", {
      name,
      purpose,
      thematic,
      genre,
      materials,
      description,
      objectives,
      time,
      concepts,
      rules,
      winner,
      teams,
      level,
      related,
    })
    .then((response) => {
      // Suponiendo que el servidor devuelve el objeto del juego con el id generado
      const gameId = response.data.id;
      return gameId;
    })
    .catch((error) => {
      console.error('Error al enviar el juego:', error);
      throw error;  // Lanza el error para que pueda ser manejado por quien llame a esta función
    });
};