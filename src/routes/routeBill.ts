import express from "express";
import { createBill, detailBill, listBill } from "../actions";

const router = express.Router();

router.get("", listBill);
router.get("/:id", detailBill);
router.post("", createBill);

export default router;
