class Dog {
    private _name: string;
    protected _age: number = 10;

    constructor(age: number) {
        this._age = age;
    }

    get name(): string {
        return `El nombre es ${this.name}`;
    }

    set name(name: string) {
        this._name = name;
    }

    // public getAge(): number {
    //     return this.age;
    // }

    get age(): number {
        return this._age;
    }
}

class Chapi extends Dog {

    constructor(age: number) {
        super(age);
    }

    set name(name: string) {
        this.name = name;
    }

    get name(): string {
        return this.name;
    }
}

let dog = new Chapi(4);
dog.name = 'boby';
console.log(dog.name);