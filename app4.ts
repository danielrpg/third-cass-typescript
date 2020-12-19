class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }

    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
//let numero:number;
//console.log((type numero === 'boolean'))

let numbers = new Stack<number>(5);

while(!numbers.isFull()) {
    let n: number = Math.random();
    console.log(`the number is ${n}`);
    numbers.push(n);
}

while(!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`the value of the stack is ${n}`);
}


interface GenericInterface<T> {

}

interface GenericInterface2<U, V> {

}

let month: GenericInterface2<string, number> = {
    key : 'Jhon',
    value: 35
}

console.log(month);


interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}


