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
exports.serviceRecordServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.create({ data });
    return result;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getSingleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { id } = req.params;
    const result = yield prisma_1.default.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!result) {
        throw new Error("Service Record Not Found");
    }
    return result;
});
const updateSingleService = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: completionDate || new Date(),
            status: "done",
        },
    });
    if (!result) {
        throw new Error("Service Record Not Found");
    }
    return result;
});
const getPendingAndOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevendaysAgo = new Date();
    sevendaysAgo.setDate(sevendaysAgo.getDate() - 7);
    console.log("Querying services older than:", sevendaysAgo);
    const result = yield prisma_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"],
            },
            serviceDate: {
                lt: sevendaysAgo,
            },
        },
    });
    return result;
});
exports.serviceRecordServices = {
    createService,
    getAllServices,
    getSingleService,
    updateSingleService,
    getPendingAndOverdueServices,
};
