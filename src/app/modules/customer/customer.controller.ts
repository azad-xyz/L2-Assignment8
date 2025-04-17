import { Request, Response } from "express";
import { customerServices } from "./customer.service";
import { Customer } from "../../../../generated/prisma";

const createCustomer = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await customerServices.createCustomer(req.body);
    res.status(200).json({
      success: true,
      message: "Customer Created successfuly!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await customerServices.getAllCustomers();
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};

const getSingleCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerServices.getSingleCustomer(req);
    res.status(200).json({
      success: true,
      message: "Customer fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};

const updateSingleCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerServices.updateSingleCustomer(req);
    res.status(200).json({
      success: true,
      message: "Customer updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};

const deleteSingleCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerServices.deleteSingleCustomer(req);
    res.status(200).json({
      success: true,
      message: "Customer deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err?.message || "Something went wrong",
      error: err,
    });
  }
};

export const customerControllers = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
