import prisma from "../../shared/prisma";

const createService = async (data: any) => {
  const result = await prisma.serviceRecord.create({ data });
  return result;
};

const getAllServices = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getSingleService = async (id: string) => {
  //   const { id } = req.params;
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });
  if (!result) {
    throw new Error("Service Record Not Found");
  }
  return result;
};

const updateSingleService = async (id: string, completionDate?: string) => {
  const result = await prisma.serviceRecord.update({
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
};

const getPendingAndOverdueServices = async () => {
  const sevendaysAgo = new Date();
  sevendaysAgo.setDate(sevendaysAgo.getDate() - 7);

  console.log("Querying services older than:", sevendaysAgo);

  const result = await prisma.serviceRecord.findMany({
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
};

export const serviceRecordServices = {
  createService,
  getAllServices,
  getSingleService,
  updateSingleService,
  getPendingAndOverdueServices,
};
