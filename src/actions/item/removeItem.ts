import { Request, Response } from "express";
import { removeItem, detailItem } from "../../services/item";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailItem(id))) {
    return response.status(404).json({
      code: 404,
      message: "Item not found",
    });
  }

  await removeItem(id);
  return response.json();
};
