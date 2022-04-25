System.register(["./Employee"], function (exports_1, context_1) {
    "use strict";
    var Employee_1, empObj;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Employee_1_1) {
                Employee_1 = Employee_1_1;
            }
        ],
        execute: function () {
            empObj = new Employee_1.Employee("Steve Jobs", 1);
            empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Steve Jobs  
        }
    };
});
