class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);        

        if (this.length === 0) { 
            this.top = newNode;           
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const topNode = this.top;

        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;

        return topNode;
    }
}

const stack = new Stack();
stack.push('gooogle.com');
stack.push('yahoo.com');
stack.push('stackoverflow.com');

console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);