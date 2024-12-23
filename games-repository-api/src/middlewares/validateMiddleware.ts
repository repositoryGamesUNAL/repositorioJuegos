import express, { Request, Response, NextFunction } from "express";
import { 
  teamSizes,
  filesRelated,
  newGame,
  changesOfGame } from "../models/game";

const validateFields = (
  res: Response,
  data: changesOfGame,
  field: string,
  next: NextFunction
) => {
  switch (
    field //validate if the field is the correct type
  ) {
    case "name":
    case "winner":
    case "thematic":
    case "genre": 
    case "time":
    case "level":
    case "description":
    case "time":
      if (!(typeof data[field] === "string")) {
        res.status(400);
        next(new Error(`El campo "${field}" debe ser un texto.`));
      }
      break;
    case "objectives":
    case "concepts":
    case "purpose":
    case "materials":
    case "rules":
      if (!Array.isArray(data[field])) {
        res.status(400);
        next(new Error(`El campo "${field}" debe ser una lista.`));
      }
      break;
    case "teams":
      if(data[field]){
        if(!(typeof data[field].min === "number")){
          res.status(400);
          next(new Error(`El campo "${field}.min debe ser number."`))
        }
        if(!(typeof data[field].max === "number")){
          res.status(400);
          next(new Error(`El campo "${field}.max debe ser number."`))
        }
      }
      break;
    case "related":
      if(data[field]){
        for(const file of data[field]){
          if(!(typeof file.description === "string")){
            res.status(400);
            next(new Error(`El campo "${field}.description debe ser string."`))
          }
          if(!(typeof file.url === "string")){
            res.status(400);
            next(new Error(`El campo "${field}.url debe ser string."`))
          }
        }
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
    "concepts",
    "purpose",
    "winner",
    "genre",
    "time",
    "level",
    "time",
    "objectives",
    "thematic",
    "materials",
    "rules",
    "teams",
    "related"
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
    "concepts",
    "purpose",
    "winner",
    "genre",
    "time",
    "level",
    "time",
    "objectives",
    "thematic",
    "materials",
    "rules",
    "teams",
    "related",
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
