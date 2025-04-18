import { Request, Response } from "express";
import { serviceRecordServices } from "./service.service";

const createService = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await serviceRecordServices.createService(req.body);
    res.status(201).json({
      success: true,
      message: "Service record created successfully!",
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

const getAllServices = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await serviceRecordServices.getAllServices();
    res.status(200).json({
      success: true,
      message: "Service records fetched successfully!",
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

const getSingleService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await serviceRecordServices.getSingleService(id);
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully!",
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

const updateSingleService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completionDate } = req.body;
    const result = await serviceRecordServices.updateSingleService(
      id,
      completionDate
    );
    res.status(200).json({
      success: true,
      message: "Service marked as completed!",
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

export const serviceRecordControllers = {
  createService,
  getAllServices,
  getSingleService,
  updateSingleService,
};
