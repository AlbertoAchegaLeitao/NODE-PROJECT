import { Request, Response } from "express";
import { addEmployee } from "../../services/employee";

export default async (request: Request, response: Response) => {
  const addEmployeeDtoArray = Array.isArray(request.body)
    ? request.body
    : [request.body];

  const newEmployees = [];

  for (const addEmployeeDto of addEmployeeDtoArray) {
    const newEmployee = await addEmployee(addEmployeeDto);
    newEmployees.push(newEmployee);
  }

  if (newEmployees.length === 1) {
    return response.json(newEmployees[0]);
  }

  return response.json(newEmployees);
};
