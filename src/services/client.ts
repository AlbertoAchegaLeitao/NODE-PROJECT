import { PrismaClient } from "@prisma/client";

interface addClientDto {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface updateClientDto {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface searchClientNameDto {
  name?: string;
  email?: string;
  phone?: string;
}

export const prisma = new PrismaClient();

const allClient = () =>
  prisma.client.findMany({
    where: {
      deleted: false,
    },
  });

const detailClient = (id: string) =>
  prisma.client.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      vehicles: true,
      bills: true,
    },
  });

const searchClientName = (data: searchClientNameDto) =>
  prisma.client.findMany({
    where: {
      name: { contains: data.name },
      deleted: false,
    },
    include: {
      vehicles: true,
      bills: true,
    },
  });

const addClient = (data: addClientDto) =>
  prisma.client.create({
    data,
  });

const updateClient = (data: updateClientDto) =>
  prisma.client.update({
    where: { id: data.id },
    data,
  });

const removeClient = (id: string) =>
  prisma.client.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
  allClient,
  detailClient,
  addClient,
  updateClient,
  removeClient,
  searchClientName,
};
