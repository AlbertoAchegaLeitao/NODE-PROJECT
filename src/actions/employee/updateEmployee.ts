import { Request, Response } from "express";
import { updateEmployee, detailEmployee } from "../../services/employee";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailEmployee(id))) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  const client = await updateEmployee({ id, ...request.body });

  return response.json(client);
};
