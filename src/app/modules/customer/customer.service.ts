import { Request } from "express";
import prisma from "../../shared/prisma";

const createCustomer = async (data: any) => {
  const result = await prisma.customer.create({ data });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomer = async (req: Request) => {
  const { id } = req.params;
  const result = await prisma.customer.findUniqueOrThrow({
    where: { customerId: id },
  });
  return result;
};

const updateSingleCustomer = async (req: Request) => {
  const { id } = req.params;
  const data = req.body;
  const result = await prisma.customer.update({
    where: { customerId: id },
    data,
  });
  return result;
};

const deleteSingleCustomer = async (req: Request) => {
  const { id } = req.params;
  const result = await prisma.customer.delete({
    where: { customerId: id },
  });
  return result;
};

export const customerServices = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
