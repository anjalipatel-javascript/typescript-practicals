System.register([], function (exports_1, context_1) {
    "use strict";
    var age, Employee, companyName;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("age", age = 20);
            Employee = /** @class */ (function () {
                function Employee(name, code) {
                    this.empName = name;
                    this.empCode = code;
                }
                Employee.prototype.displayEmployee = function () {
                    console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
                };
                return Employee;
            }());
            exports_1("Employee", Employee);
            companyName = "XYZ";
        }
    };
});
