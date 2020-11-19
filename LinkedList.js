class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }
        const newNode = new Node(value);
        const previousNode = this.traverse(index-1);
        const nextNode = previousNode.next;

        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    remove(index) {
        const previousNode = this.traverse(index-1);
        const unwantedNode = previousNode.next;
        previousNode.next = unwantedNode.next;
        this.length--;
        return this;
    }

    traverse(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }


    // 1,2,3,4
    reverse() {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        let tail = this.head;
        let nextNode = first.next;
        while (nextNode) {
            const temp = nextNode.next;
            nextNode.next = first;
            first = nextNode;
            nextNode = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const lList = new LinkedList(10);
lList.append(5);
lList.append(16);
lList.prepend(4);
lList.insert(2, 99);
lList.remove(1);
console.log(lList);
console.log(lList.printList());