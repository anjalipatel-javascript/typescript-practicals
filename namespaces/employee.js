"use strict";
/// <reference path="StringUtility.ts" />
/// <reference path="a.ts" />
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = a.ToCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
var empObject = new Employee("anjali", 52);
console.log("empObject :", empObject);
