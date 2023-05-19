import { Request, Response } from "express";
import { addItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const addItemDto = request.body;

  const newItem = await addItem(addItemDto);

  return response.json(newItem);
};
