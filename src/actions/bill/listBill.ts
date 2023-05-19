import { Request, Response } from "express";
import { allBill } from "../../services/bill";

export default async (_: Request, response: Response) => {
  response.json(await allBill());
};
