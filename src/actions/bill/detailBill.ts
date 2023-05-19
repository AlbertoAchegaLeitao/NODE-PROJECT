import { Request, Response } from "express";
import { detailBill } from "../../services/bill";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const bill = await detailBill(id);

  if (!bill) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  return response.json(bill);
};
