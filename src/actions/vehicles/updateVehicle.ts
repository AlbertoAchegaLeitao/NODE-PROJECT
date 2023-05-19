import { Request, Response } from "express";
import { updateVehicle, detailVehicle } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailVehicle(id))) {
    return response.status(404).json({
      code: 404,
      message: "Vehicle not found",
    });
  }

  const vehicle = await updateVehicle({
    id,
    ...request.body,
  });

  return response.json(vehicle);
};
