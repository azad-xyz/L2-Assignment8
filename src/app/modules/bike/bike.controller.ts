import { Request, Response } from "express";
import { bikeServices } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await bikeServices.createBike(req.body);
    res.status(201).json({
      success: true,
      message: "Bike Created successfuly!",
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

const getAllBikes = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await bikeServices.getAllBikes();
    res.status(200).json({
      success: true,
      message: "Bikes fetched successfully!",
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

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await bikeServices.getSingleBike(id);
    res.status(200).json({
      success: true,
      message: "Bike fetched successfully!",
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

export const bikeControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
};
