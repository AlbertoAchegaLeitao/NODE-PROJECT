import { Request, Response } from "express";
import { updateItem, detailItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailItem(id))) {
    return response.status(404).json({
      code: 404,
      message: "Item not found",
    });
  }

  const item = await updateItem({ id, ...request.body });

  return response.json(item);
};
