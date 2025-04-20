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
exports.customerControllers = void 0;
const customer_service_1 = require("./customer.service");
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield customer_service_1.customerServices.createCustomer(req.body);
        res.status(200).json({
            success: true,
            message: "Customer Created successfuly!",
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
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.body);
        const result = yield customer_service_1.customerServices.getAllCustomers();
        res.status(200).json({
            success: true,
            message: "Customers fetched successfully!",
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
const getSingleCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerServices.getSingleCustomer(req);
        res.status(200).json({
            success: true,
            message: "Customer fetched successfully!",
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
const updateSingleCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerServices.updateSingleCustomer(req);
        res.status(200).json({
            success: true,
            message: "Customer updated successfully!",
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
const deleteSingleCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerServices.deleteSingleCustomer(req);
        res.status(200).json({
            success: true,
            message: "Customer deleted successfully!",
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
exports.customerControllers = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateSingleCustomer,
    deleteSingleCustomer,
};
