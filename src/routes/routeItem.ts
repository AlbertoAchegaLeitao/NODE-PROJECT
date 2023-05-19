import express from "express";
import {
  listItem,
  detailItem,
  createItem,
  removeItem,
  updateItem,
} from "../actions";

const router = express.Router();

router.get("", listItem);
router.get("/:id", detailItem);
router.post("", createItem);
router.delete("/:id", removeItem);
router.put("/:id", updateItem);

export default router;
