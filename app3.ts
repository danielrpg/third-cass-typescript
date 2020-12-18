abstract class Person {
    private age: number;
    constructor(private firstName: string, private lastName: string) {
        this.age = 5;
    }

    abstract getSalary(): number;

    get fullName(): string {
        return `${this.firstName} - ${this.lastName} - ${this.age}`;
    }
}

class Employee extends Person {

    getSalary(): number {
        return 8000;
    }

    public getFullName(isActive:boolean = false, age?: number, address?: any, name?: string | number): string {
        if(!isActive) return;
        return `${this.fullName}`;
    }
}

let emp = new Employee('Jhon', 'Doe');

console.log(emp.fullName);

let input = document.querySelector('input[type="text"]');

let inputText = (input as HTMLInputElement).value

console.log(inputText);