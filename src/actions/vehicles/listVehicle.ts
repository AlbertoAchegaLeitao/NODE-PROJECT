import { Request, Response } from "express";
import { allVehicle } from "../../services/vehicle";

export default async (_: Request, response: Response) => {
  response.json(await allVehicle());
};
