import { Request, Response } from "express";
import { detailVehicle } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const vehicle = await detailVehicle(id);

  if (!vehicle) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(vehicle);
};
