import { ModifyGame } from "./HandleModify.type";
import axios from "axios";
export const handleModifyGame=({
    name,
    purpose,
    thematic,
    genre,
    materials,
    objectives,
    time,
    concepts,
    rules,
    winner,
    teams,
    level,
    related,
  } : ModifyGame, id:number)=>{

    axios.patch(`http://localhost:3000/games/${id}`,{
      name,
      purpose,
      thematic,
      genre,
      materials,
      objectives,
      time,
      concepts,
      rules,
      winner,
      teams,
      level,
      related,
    })
  };