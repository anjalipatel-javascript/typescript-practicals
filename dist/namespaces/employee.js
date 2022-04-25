/// <reference path="StringUtility.ts" />
/// <reference path="a.ts" />
System.register([], function (exports_1, context_1) {
    "use strict";
    var Employee, empObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {/// <reference path="StringUtility.ts" />
            /// <reference path="a.ts" />
            Employee = /** @class */ (function () {
                function Employee(name, code) {
                    this.empName = a.ToCapital(name);
                    this.empCode = code;
                }
                Employee.prototype.displayEmployee = function () {
                    console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
                };
                return Employee;
            }());
            exports_1("Employee", Employee);
            empObject = new Employee("anjali", 52);
            console.log("empObject :", empObject);
        }
    };
});
