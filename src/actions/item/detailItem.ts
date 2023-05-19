import { Request, Response } from "express";
import { detailItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await detailItem(id);

  if (!item) {
    return response.status(404).json({
      code: 404,
      message: "Item not found",
    });
  }

  return response.json(item);
};
