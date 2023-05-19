import { Request, Response } from "express";
import { findEmployeeByName } from "../../services/employee";

export default async (request: Request, response: Response) => {
  const { name } = request.params;

  const employeeName = await findEmployeeByName(name as string);

  if (!employeeName) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(employeeName);
};
