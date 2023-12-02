import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/dbConnect';

export class Employee extends Model {
    public id!: number;
    public name!: String;
    public surname!: String;
    public email!: String;
    public phoneNumber!: String;
    public address!: String;
    public job!: String;
}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        job: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: 'Employee',
    }
);