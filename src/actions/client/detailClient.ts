import { Request, Response } from "express";
import { detailClient } from "../../services/client";

export default async (request: Request, response: Response) => {
  const { id, } = request.params;

  const client = await detailClient(id);

  if (!client) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(client);
};
