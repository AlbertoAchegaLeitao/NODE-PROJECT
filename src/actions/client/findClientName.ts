import { Request, Response } from "express";
import { searchClientName } from "../../services/client";

export default async (request: Request, response: Response) => {
  const { name } = request.params;

  const clientName = await searchClientName({ name: name as string });

  if (!clientName) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(clientName);
};
