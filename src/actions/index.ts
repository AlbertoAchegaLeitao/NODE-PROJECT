//!Client Imports
import listClient from "./client/listClient";
import detailClient from "./client/detailClient";
import createClient from "./client/createClient";
import removeClient from "./client/removeClient";
import updateClient from "./client/updateClient";
import findClientName from "./client/findClientName";

//!Employee Imports
import listEmployee from "./employee/listEmployee";
import detailEmployee from "./employee/detailEmployee";
import findEmployeeByName from "./employee/findeEmployeeByName";
import createEmployee from "./employee/createEmployee";
import removeEmployee from "./employee/removeEmployee";
import updateEmployee from "./employee/updateEmployee";

//!Vehicle Imports

import listVehicle from "./vehicles/listVehicle";
import detailVehicle from "./vehicles/detailVehicle";
import searchVehicleByBrand from "./vehicles/findeVehiclebyBrand";
import createVehicle from "./vehicles/createVehicle";
import removeVehicle from "./vehicles/removeVehicle";
import updateVehicle from "./vehicles/updateVehicle";

//!Item Imports
import listItem from "./item/listItem";
import detailItem from "./item/detailItem";
import createItem from "./item/createItem";
import removeItem from "./item/removeItem";
import updateItem from "./item/updateItem";

//!Bill Imports
import createBill from "./bill/createBill";
import detailBill from "./bill/detailBill";
import listBill from "./bill/listBill";

//? Client Exports
export {
  listClient,
  detailClient,
  createClient,
  removeClient,
  updateClient,
  findClientName,
};

//? Employees Exports
export {
  listEmployee,
  detailEmployee,
  findEmployeeByName,
  createEmployee,
  removeEmployee,
  updateEmployee,
};

//? Vehicles Exports
export {
  listVehicle,
  detailVehicle,
  searchVehicleByBrand,
  createVehicle,
  removeVehicle,
  updateVehicle,
};

//? Items Exports
export { listItem, detailItem, createItem, removeItem, updateItem };

//? Bills Exports
export { createBill, detailBill, listBill };
