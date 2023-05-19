import { Request, Response } from "express";
import { addVehicle } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const addVehicleDto = request.body;

  const newVehicle = await addVehicle(addVehicleDto);

  return response.json(newVehicle);
};
