"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordControllers = void 0;
const service_service_1 = require("./service.service");
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield service_service_1.serviceRecordServices.createService(req.body);
        res.status(201).json({
            success: true,
            message: "Service record created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
            error: err,
        });
    }
});
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield service_service_1.serviceRecordServices.getAllServices();
        res.status(200).json({
            success: true,
            message: "Service records fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
            error: err,
        });
    }
});
const getSingleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service_service_1.serviceRecordServices.getSingleService(id);
        res.status(200).json({
            success: true,
            message: "Service record fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
            error: err,
        });
    }
});
const updateSingleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { completionDate } = req.body;
        const result = yield service_service_1.serviceRecordServices.updateSingleService(id, completionDate);
        res.status(200).json({
            success: true,
            message: "Service marked as completed!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
            error: err,
        });
    }
});
const getPendingAndOverdueServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield service_service_1.serviceRecordServices.getPendingAndOverdueServices();
        res.status(200).json({
            success: true,
            message: "Overdue or pending services fetched successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong",
            error: err,
        });
    }
});
exports.serviceRecordControllers = {
    createService,
    getAllServices,
    getSingleService,
    updateSingleService,
    getPendingAndOverdueServices,
};
