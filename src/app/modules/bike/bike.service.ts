import prisma from "../../shared/prisma";

const createBike = async (data: any) => {
  const result = await prisma.bike.create({ data });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBike = async (id: string) => {
  //   const { id } = req.params;
  const result = await prisma.bike.findUnique({
    where: { bikeId: id },
  });

  if (!result) {
    throw new Error("Bike Not Found");
  }
  return result;
};

export const bikeServices = {
  createBike,
  getAllBikes,
  getSingleBike,
};
