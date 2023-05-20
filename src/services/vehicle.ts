import { PrismaClient } from "@prisma/client";

interface addVehicleDto {
  license_plate: string;
  brand: string;
  model: string;
  color: string;
  mileage: string;
  clientId: string;
}

interface updateVehicleDto {
  id?: string;
  brand: string;
  model: string;
  color: string;
  mileage: string;
  clientId: string;
}

export const prisma = new PrismaClient();

const addVehicle = (data: addVehicleDto) =>
  prisma.vehicle.create({
    data,
  });

const allVehicle = () =>
  prisma.vehicle.findMany({
    where: {
      deleted: false,
    },
    include: {
      client: true,
    },
  });

const detailVehicle = (id: string) =>
  prisma.vehicle.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      client: true,
    },
  });

const searchVehicleByBrand = (brand: string) =>
  prisma.vehicle.findMany({
    where: {
      brand,
      deleted: false,
    },
    include: {
      client: true,
    },
  });

const updateVehicle = (data: updateVehicleDto) =>
  prisma.vehicle.update({
    where: { id: data.id },
    data,
  });

const removeVehicle = (id: string) =>
  prisma.vehicle.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
  allVehicle,
  detailVehicle,
  addVehicle,
  updateVehicle,
  removeVehicle,
  searchVehicleByBrand,
};
