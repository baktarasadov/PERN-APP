import express from 'express';
import { deleteEmployee, getAllEmployees, getEmployee, saveEmployee, updateEmployee } from '../controllers/employeeController';

const employeeRoute = express.Router();
const uri: string = "/employees";

employeeRoute.get(`${uri}/get/:id`, getEmployee);
employeeRoute.delete(`${uri}/delete/:id`, deleteEmployee);
employeeRoute.patch(`${uri}/update/:id`, updateEmployee);

employeeRoute.get(`${uri}/all`, getAllEmployees);
employeeRoute.post(`${uri}/save`, saveEmployee);



export default employeeRoute;