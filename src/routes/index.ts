import express, { Request, Response } from "express";
import authRoutes from "./routeAuth";
import routeClient from "./routeClient";
import routeEmployee from "./routeEmployee";
import routeVehicle from "./routeVehicle";
import routeItem from "./routeItem";
import routeBill from "./routeBill";
import { name, version } from "../../package.json";

const router = express.Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    name,
    version,
  })
);

router.use("/auth", authRoutes);
router.use("/client", routeClient);
router.use("/employee", routeEmployee);
router.use("/vehicle", routeVehicle);
router.use("/item", routeItem);
router.use("/bill", routeBill);

export default router;
