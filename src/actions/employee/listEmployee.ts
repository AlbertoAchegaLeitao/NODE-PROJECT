import { Request, Response } from "express";
import { allEmployee } from "../../services/employee";

export default async (_: Request, response: Response) => {
  response.json(await allEmployee());
};
