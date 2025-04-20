"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.serviceRecordControllers.createService);
router.get("/", service_controller_1.serviceRecordControllers.getAllServices);
router.get("/:id", service_controller_1.serviceRecordControllers.getSingleService);
router.put("/:id", service_controller_1.serviceRecordControllers.updateSingleService);
router.get("/services/status", service_controller_1.serviceRecordControllers.getPendingAndOverdueServices);
// router.delete("/:id", customerControllers.deleteSingleCustomer);
exports.serviceRecordRoutes = router;
