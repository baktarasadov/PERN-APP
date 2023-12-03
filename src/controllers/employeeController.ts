import { Request, Response } from "express";
import { Employee } from "../models/Employee";
import { IEmployeeResponse } from "../types/employee/IEmployeeResponse";
import { UniqueConstraintError } from "sequelize";

export async function getAllEmployees(request: Request, response: Response) {
    try {
        const empResponse: IEmployeeResponse[] = await Employee.findAll();
        if (!empResponse.length) {
            return response.status(404).json({ success: false, message: "Employee not found" })
        }
        return response.status(200).json({ success: true, message: "Employee successfully", data: empResponse })
    } catch (error: any) {
        return response.status(501).json({ success: false, message: "Internal Server Error" })
    }
}

export async function saveEmployee(request: Request, response: Response) {
    try {
        const saveEmployee: IEmployeeResponse = await Employee.create(request.body);
        return response.status(201).json({ success: true, message: "Employee saved", data: saveEmployee })
    } catch (error: any) {
        if (error instanceof UniqueConstraintError) {
            return response.status(404).json({ success: false, message: "The email  is incorrect" })
        }
        return response.status(501).json({ succes: false, message: "Internal Server error" })

    }
}

export async function getEmployee(request: Request, response: Response) {
    try {
        const id: string = request.params.id;
        const findEmployee = await Employee.findByPk(id);
        if (!findEmployee) {
            return response.status(404).json({ success: false, message: "Employee not found" })
        }
        return response.status(200).json({ success: true, message: "Employee found", data: findEmployee })

    } catch (error: any) {
        return response.status(501).json({ success: false, message: "Internal Server Error" })

    }
}

export async function deleteEmployee(request: Request, response: Response) {
    try {
        const id: string = request.params.id;
        const findEmployee = await Employee.findByPk(id);
        if (!findEmployee) {
            return response.status(404).json({ success: false, message: "Employee not found" })
        }
        await findEmployee.destroy();
        return response.status(200).json({ success: true, message: "Employee deleted successfully" })
    } catch (error: any) {
        return response.status(501).json({ success: false, message: "Internal Server Error" })

    }
}

export async function updateEmployee(request: Request, response: Response) {
    try {
        const id: string = request.params.id;
        const findEmployee = await Employee.findByPk(id);
        if (!findEmployee) {
            return response.status(404).json({ success: false, message: "Employee not found" })
        }
        await findEmployee.update({ ...request.body });
        const updateEmployee = await Employee.findByPk(id);

        return response.status(200).json({ success: true, message: "Employee updated successfully", data: updateEmployee })
    } catch (error: any) {
        if (error instanceof UniqueConstraintError) {
            return response.status(404).json({ success: false, message: "The email  is incorrect" })
        }
        return response.status(501).json({ success: false, message: "Internal Server Error" })

    }
}