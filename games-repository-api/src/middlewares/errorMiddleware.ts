import { Request, Response, NextFunction } from "express";

export const logError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();
  const method = req.method; //To find out which method was requested
  const endpoint = req.originalUrl;

  console.log(
    `[${timestamp}] ERROR in ${method} ${endpoint}: ${error.message}`
  );

  next(error);
};

export const errorResponse = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;

  res.status(statusCode).json({
    error: true,
    message: error.message ? `ERROR: ${error.message}` : "Error inesperado",
  });
  next(error);
};

export const gameNotFound = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  res.status(404).json({
    error: "",
    message: err.message,
  });
};
