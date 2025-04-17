import express from "express";
import { bikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/", bikeControllers.createBike);
router.get("/", bikeControllers.getAllBikes);
router.get("/:id", bikeControllers.getSingleBike);
// router.patch("/:id", customerControllers.updateSingleCustomer);
// router.delete("/:id", customerControllers.deleteSingleCustomer);

export const bikeRoutes = router;
