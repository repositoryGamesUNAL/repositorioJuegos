import React from "react";
import Button from "../../../atoms/button";
import { Link } from "react-router-dom";
import "./GameCard.scss";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <h2 className="game-card__title">{game.name}</h2>
      <p><strong>Temática:</strong> {game.thematic}</p>
      <p><strong>Género:</strong> {game.genre}</p>
      <p><strong>Descripción:</strong> {game.description}</p>
      <p><strong>Nivel:</strong> {game.level}</p>
      <p><strong>Tiempo:</strong> {game.time}</p>
      <p><strong>Equipos:</strong> {game.teams.min} - {game.teams.max}</p>
      <p><strong>Fecha:</strong> {new Date(game.date).toLocaleDateString()}</p>
      {/* Botón para editar */}
        <Link to={`/game/edit/${game.id}`} className="game-card__edit-button">
          <Button >
            Editar
          </Button>
        </Link>
    </div>
  );
};

export default GameCard;
