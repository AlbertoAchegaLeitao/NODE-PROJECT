import { Request, Response } from "express";
import { allClient } from "../../services/client";

export default async (_: Request, response: Response) => {
  response.json(await allClient());
};
