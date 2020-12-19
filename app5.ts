class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }

}

class SalesEmployee extends Employee {
    private address: string;

    constructor(name: string, code: number, address: string) {
        super(name, code);
        this.address = address;
    }

    getFullInfo(): string {
        return `Name: ${this.empName} - Code: ${this.empCode} - ${this.address}`;
    }
}

let salesEmp = new SalesEmployee('Jhon Due', 123456, 'Calle Achazo!!');
let fullInfo = salesEmp.getFullInfo();

console.log(fullInfo);