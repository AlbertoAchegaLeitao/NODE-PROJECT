import { Request, Response } from "express";
import { detailEmployee } from "../../services/employee";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const employee = await detailEmployee(id);

  if (!employee) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(employee);
};
