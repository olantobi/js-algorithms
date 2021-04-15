class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {            
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.last = null;
        }
        const nextVal = this.first;
        this.first = this.first.next;
        this.length--;
        return nextVal.value;
    }

    empty() {
        return this.length === 0;
    }
}

const queue = new Queue();
// queue.enqueue('Tobi');
// queue.enqueue('Ade');
// queue.enqueue('Lara');
// console.log(queue);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
console.log('Peeked', queue.peek());
console.log(queue);
console.log('Popped: ', queue.pop());
console.log(queue);
console.log(queue.empty());