import express from "express";
import {
  listClient,
  detailClient,
  createClient,
  removeClient,
  updateClient,
  findClientName,
} from "../actions";

const router = express.Router();

router.get("", listClient);
router.get("/:id", detailClient);
router.get("/name/:name", findClientName);
router.post("", createClient);
router.delete("/:id", removeClient);
router.put("/:id", updateClient);

export default router;
