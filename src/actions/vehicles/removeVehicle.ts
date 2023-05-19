import { Request, Response } from "express";
import { removeVehicle, detailVehicle } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailVehicle(id))) {
    return response.status(404).json({
      code: 404,
      message: "Vehicle not found",
    });
  }

  await removeVehicle(id);
  return response.json();
};
