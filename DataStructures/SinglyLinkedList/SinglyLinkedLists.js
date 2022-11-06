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

        }
        this.length++;
        return this;
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
    insert(index, val) {
        if (index < 0 || index > this.length) return null;
        if (index === index.length) {
            this.push(val)
            return true;
        }
        if (index === 0) {
            this.unshift(val)
            return true
        }

        let newNode = new Node(val)
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) {
            this.pop()
            return true
        }
        if (index === 0) {
            this.shift();
            return true;
        }
        let temp = this.get(index - 1);
        let removed = temp.next;
        temp.next = removed.next;
        this.length--;
        return removed
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }
}



let first = new Node('Hello');
first.next = new Node('there')
first.next.next = new Node('How')
first.next.next.next = new Node('are you?')

let list = new SinglyLinkedList();
list.push('hey')
list.push('your mom called')
list.push('and she said she loved you.')
list.push('this is the fourth node');
list.push('$')
console.log(list)