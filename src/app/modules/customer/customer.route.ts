import express from "express";
import { customerControllers } from "./customer.controller";

const router = express.Router();

router.post("/", customerControllers.createCustomer);
router.get("/", customerControllers.getAllCustomers);
router.get("/:id", customerControllers.getSingleCustomer);
router.patch("/:id", customerControllers.updateSingleCustomer);
router.delete("/:id", customerControllers.deleteSingleCustomer);

export const customerRoutes = router;
