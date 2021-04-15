class StackArray {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length-1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        return this.array.pop();
    }
}

const stack = new StackArray();
stack.push('gooogle.com');
stack.push('yahoo.com');
stack.push('stackoverflow.com');

console.log(stack);
console.log(stack.pop());

console.log(stack);
