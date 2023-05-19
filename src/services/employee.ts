import {
  PrismaClient,
  Client,
  Employee,
  Vehicle,
  Bill,
  Item,
} from "@prisma/client";

interface addEmplyeeDto {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface updateEmployeeDto {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const prisma = new PrismaClient();

const allEmployee = () =>
  prisma.employee.findMany({
    where: {
      deleted: false,
    },
  });

const detailEmployee = (id: string) =>
  prisma.employee.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      bills: true,
    },
  });

const findEmployeeByName = (name: string) =>
  prisma.employee.findMany({
    where: {
      name,
      deleted: false,
    },
  });

const addEmployee = (data: addEmplyeeDto) =>
  prisma.employee.create({
    data,
  });

const updateEmployee = (data: updateEmployeeDto) =>
  prisma.employee.update({
    where: { id: data.id },
    data,
  });

const removeEmployee = (id: string) =>
  prisma.employee.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export {
  allEmployee,
  detailEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
  findEmployeeByName,
};
