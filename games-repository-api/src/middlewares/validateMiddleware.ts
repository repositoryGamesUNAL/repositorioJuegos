import express, { Request, Response, NextFunction } from "express";
import { newGame, changesOfGame } from "../models/game";

const validateFields = (
  res: Response,
  data: changesOfGame,
  field: String,
  next: NextFunction
) => {
  switch (
    field //validate if the field is the correct type
  ) {
    case "name":
    case "purpose":
    case "genre":
    case "objectives":
    case "time":
      if (typeof data[field as keyof changesOfGame] !== "string") {
        res.status(400);
        next(new Error(`El campo "${field}" debe ser un texto.`));
      }
      break;
    case "thematic":
    case "materials":
      if (!Array.isArray(data[field as keyof changesOfGame])) {
        res.status(400);
        next(new Error(`El campo "${field}" debe ser una lista.`));
      }
      break;
    default:
      break;
  }
};

export const validateNewGame = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: Partial<newGame> = req.body;

  const requiredFields: Array<keyof newGame> = [
    "name",
    "purpose",
    "thematic",
    "genre",
    "materials",
    "objectives",
    "time",
  ];

  for (const field of requiredFields) {
    //validate if the field is empty
    if (!data[field]) {
      res.status(400);
      next(new Error(`El campo "${field}" es requerido.`));
    }

    validateFields(res, data, field, next);
  }
  next();
};

export const validateGameChanges = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: Partial<changesOfGame> = req.body;

  const validFields: Array<keyof changesOfGame> = [
    "name",
    "purpose",
    "thematic",
    "genre",
    "materials",
    "objectives",
    "time",
  ];

  for (const field in data) {
    if (!validFields.includes(field as keyof changesOfGame)) {
      res.status(400);
      next(new Error(`El campo "${field}" no es válido.`));
    }

    validateFields(res, data, field, next);
  }
  next();
};

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;

  if (isNaN(parseInt(id))) {
    //validate id can parse to int
    res.status(400);
    next(new Error(`El id "${id}" no es válido.`));
  }

  next();
};
