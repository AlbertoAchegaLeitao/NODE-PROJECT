import { Request, Response } from "express";
import { addClient } from "../../services/client";

export default async (request: Request, response: Response) => {
  const addClientDtoArray = Array.isArray(request.body)
    ? request.body
    : [request.body];

  const newClients = [];

  for (const addClientDto of addClientDtoArray) {
    const newClient = await addClient(addClientDto);
    newClients.push(newClient);
  }

  if (newClients.length === 1) {
    return response.json(newClients[0]);
  }

  return response.json(newClients);
};
