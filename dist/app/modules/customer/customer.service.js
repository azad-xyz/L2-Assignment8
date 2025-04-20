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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.create({ data });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const getSingleCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prisma_1.default.customer.findUnique({
        where: { customerId: id },
    });
    if (!result) {
        throw new Error("Customer Not Found");
    }
    return result;
});
const updateSingleCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    const result = yield prisma_1.default.customer.update({
        where: { customerId: id },
        data,
    });
    if (!result) {
        throw new Error("Customer Not Found");
    }
    return result;
});
const deleteSingleCustomer = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield prisma_1.default.customer.delete({
        where: { customerId: id },
    });
    if (!result) {
        throw new Error("Customer Not Found");
    }
    return result;
});
exports.customerServices = {
    createCustomer,
    getAllCustomers,
    getSingleCustomer,
    updateSingleCustomer,
    deleteSingleCustomer,
};
