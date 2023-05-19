import express from "express";
import {
  listVehicle,
  detailVehicle,
  searchVehicleByBrand,
  createVehicle,
  removeVehicle,
  updateVehicle,
} from "../actions";

const router = express.Router();

router.get("", listVehicle);
router.get("/:id", detailVehicle);
router.get("/brand/:brand", searchVehicleByBrand);
router.post("", createVehicle);
router.delete("/:id", removeVehicle);
router.put("/:id", updateVehicle);

export default router;
