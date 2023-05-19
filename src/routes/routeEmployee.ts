import express from "express";
import {
  listEmployee,
  detailEmployee,
  createEmployee,
  removeEmployee,
  updateEmployee,
  findEmployeeByName,
} from "../actions";

const router = express.Router();

router.get("", listEmployee);
router.get("/:id", detailEmployee);
router.get("/name/:name", findEmployeeByName);
router.post("", createEmployee);
router.delete("/:id", removeEmployee);
router.put("/:id", updateEmployee);

export default router;
