interface UserDTO {
    username: string;
    password?: string;
    isActive: boolean;
    dog: Dog;
    ages?: string[];
}

class Dog {
    private _name: string;

    get name(): string {
        return `El nombre es ${this.name}`;
    }

    set name(name: string) {
        this._name = name;
    }
}

let userDto: UserDTO;

userDto = {
    username: 'jhon',
    password: 'doe',
    isActive: true,
    dog: new Dog()
}

// componentA ---> interface --> componentB