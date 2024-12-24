import React, { useEffect, useState } from "react";
import GameCard from "../GameCard";
import "./GameList.scss";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("http://localhost:3000/games/");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div className="game-list">Cargando juegos...</div>;
  }

  if (error) {
    return <div className="game-list error">Error: {error}</div>;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
