import { PrismaClient, Client, Employee, Vehicle } from "@prisma/client";

interface addBillDto {
  description: string;
  date: string;
  amount: number;
  employee: Employee;
  vehicle: Vehicle;
  client: Client;
  item?: string[];
}

export const prisma = new PrismaClient();

const addBill = (data: addBillDto) => {
  const { client, employee, vehicle, item, ...rest } = data;
  console.log(item);
  const billData: any = {
    ...rest,
    employee: { connect: { id: employee.id } },
    vehicle: { connect: { id: vehicle.id } },
    client: { connect: { id: client.id } },
    items: { connect: item?.map((item) => ({ id: item })) },
  };

  return prisma.bill.create({
    data: billData,
    include: { client: true, employee: true, vehicle: true, items: true },
  });
};

const allBill = () =>
  prisma.bill.findMany({
    where: {
      deleted: false,
    },
    include: {
      client: true,
      employee: true,
      vehicle: true,
      items: true,
    },
  });

const detailBill = (id: string) =>
  prisma.bill.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { allBill, detailBill, addBill };
