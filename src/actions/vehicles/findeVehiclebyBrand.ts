import { Request, Response } from "express";
import { searchVehicleByBrand } from "../../services/vehicle";

export default async (request: Request, response: Response) => {
  const { brand } = request.params;

  const vehicles = await searchVehicleByBrand(brand as string);

  if (vehicles.length === 0) {
    return response.status(404).json({
      code: 404,
      message: "Vehicles not found for the specified brand",
    });
  }

  return response.json(vehicles);
};
