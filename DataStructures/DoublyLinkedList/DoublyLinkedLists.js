class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head && this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            let temp = this.tail;
            this.tail = newNode;
            temp.next = this.tail;
            this.tail.prev = temp;
            this.length++;
        }
        return this
    }
    pop() {
        if (!this.tail) {
            return undefined
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let popped = this.tail;
            let newTail = this.tail.prev
            this.tail = newTail;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return this
    }
    shift() {
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let shifted = this.head;
            let newHead = this.head.next;
            this.head = newHead;
            newHead.prev = null;
            shifted.next = null;
        }
        this.length--;
        return this;
    }
    unshift(val) {
        let newHead = new Node(val)
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let got;
        if (index <= index.length / 2) {
            let count = 0;
        } else if (index > index.length / 2) {
            let count = index.length - 1;
            while (count > index) {
                count--
            }
        }
        return gotNode
    }
}

let list = new DoublyLinkedList();
console.log(list)
list.push(5);
list.push('ur mom');
list.push(3);
console.log(list);
list.pop();
console.log(list)