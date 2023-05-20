import { PrismaClient } from "@prisma/client";

interface addItemDto {
  name: string;
  stock: string;
  price: number;
}
interface updateItemDto {
  id?: string;
  name: string;
  stock: string;
  price: number;
}

export const prisma = new PrismaClient();

const allItem = () =>
  prisma.item.findMany({
    where: {
      deleted: false,
    },
  });

const detailItem = (id: string) =>
  prisma.item.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const addItem = (data: addItemDto) =>
  prisma.item.create({
    data,
  });

const updateItem = (data: updateItemDto) =>
  prisma.item.update({
    where: { id: data.id },
    data,
  });

const removeItem = (id: string) =>
  prisma.item.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { allItem, detailItem, addItem, updateItem, removeItem };
