import { Request, Response } from "express";
import { allItem } from "../../services/item";

export default async (_: Request, response: Response) => {
  response.json(await allItem());
};
