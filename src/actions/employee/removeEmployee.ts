import { Request, Response } from "express";
import { removeEmployee, detailEmployee } from "../../services/employee";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailEmployee(id))) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  await removeEmployee(id);
  return response.json();
};
