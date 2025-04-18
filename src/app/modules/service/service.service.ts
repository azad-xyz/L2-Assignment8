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
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: { serviceId: id },
  });
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
  return result;
};

export const serviceRecordServices = {
  createService,
  getAllServices,
  getSingleService,
  updateSingleService,
};
