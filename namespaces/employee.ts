/// <reference path="StringUtility.ts" />
/// <reference path="a.ts" />

export class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = a.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log ("Employee Code: " + this.empCode + ", Employee Name: " + this.empName );
    }
}

var empObject = new Employee("anjali",52);
console.log("empObject :",empObject)