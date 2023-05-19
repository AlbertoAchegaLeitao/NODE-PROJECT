import { Request, Response } from "express";
import { addBill } from "../../services/bill";

export default async (request: Request, response: Response) => {
  const addBillDto = request.body;
  console.log(addBillDto);
  const newBill = await addBill(addBillDto);

  return response.json(newBill);
};
