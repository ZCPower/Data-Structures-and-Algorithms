class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newTail = new Node(val);
        if (this.length === 0) {
            this.head = newTail;
            this.tail = this.head;
            this.length = 1
        } else {
            this.tail.next = newTail;
            this.tail = newTail;
            this.length += 1;
        }
    }
    pop() {
        if (!this.tail) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return current;
    }
    unshift(val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
            this.length++;
            return this;
        }
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current
    }
    set(index, val) {
        let found = this.get(index);
        if (found) {
            found.val = val;
            return true
        }
        return false;
    }
}



let first = new Node('Hello');
first.next = new Node('there')
first.next.next = new Node('How')
first.next.next.next = new Node('are you?')

let listy = new SinglyLinkedList();
listy.push('hey')
listy.push('your mom called')
listy.push('and she said she loved you.')
listy.push('this is the fourth node');
listy.push('$')
console.log(listy)