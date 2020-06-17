/*
You have two numbers presented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1's digit is at the
head of the list. Write a function that adds the two numbers and returns the sum
as a linked list.

E.g. 7 > 1 > 6 + 5 > 9 > 2 === 9 > 1 > 2


*/

// Data Structure for LL
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    
    // constructing the first node
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    // add to end
    append(value) {
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // add to front
    prepend(value) {
        const newNode = new Node(value);

        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }

}

// Reverse order
function sumList(l1, l2) {
    let list1 = l1.head;
    let list2 = l2.head;
    let tmp = 0;
    let carry = null;

    const sumList = new LinkedList();

    while(list1 !== null && list2 !== null) {
        tmp += list1.value + list2.value;

        if(carry) {
            tmp += carry;
        }

        // carry
        carry = Math.floor(tmp/10);
        sumList.prepend(tmp % 10);
        
        tmp = 0;

        list1 = list1.next;
        list2 = list2.next;
    }
    return sumList;
}


const list1 = new LinkedList();
list1.append(7)
list1.append(1)
list1.append(6)

const list2 = new LinkedList();
list2.append(5)
list2.append(9)
list2.append(2)

console.log(sumList(list1, list2).printList());
