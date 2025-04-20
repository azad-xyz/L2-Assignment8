import express from "express";
import { serviceRecordControllers } from "./service.controller";

const router = express.Router();

router.post("/", serviceRecordControllers.createService);
router.get("/", serviceRecordControllers.getAllServices);
router.get("/:id", serviceRecordControllers.getSingleService);
router.put("/:id", serviceRecordControllers.updateSingleService);
router.get(
  "/services/status",
  serviceRecordControllers.getPendingAndOverdueServices
);
// router.delete("/:id", customerControllers.deleteSingleCustomer);

export const serviceRecordRoutes = router;
