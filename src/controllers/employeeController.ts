import { Request, Response } from "express";
import { Employee } from "../models/Employee";
import { IEmployeeResponse } from "../types/employee/IEmployeeResponse";
import { IResponse } from "../types/share/IResponse";

export async function getAllEmployees(request: Request, response: Response) {
    try {
        const empResponse: IEmployeeResponse[] = await Employee.findAll();
        if (!empResponse.length) {
            return response.status(404).json({ message: "EMployee not found" })
        }

    } catch (error: any) {

    }
}