// written from scratch using JS

// Singly LL node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

    // insert node at specific index
    insert(value, index) {

        if(index > this.length) {
            this.append(value); // add to tail
        }

        const newNode = new Node(value);
        let currentNode = this.traverseToNode(index); // get currentNode index
        let tmp = currentNode.next;
        currentNode.next = newNode;
        newNode.next = tmp;
        this.length++;
    }

    // remove node at a specific index - this is an interview question (2.3 pg 94)
    remove(index) {
        // remove tail
        if(index === this.length) {
            let currentNode = this.traverseToNode(this.length-1);
            this.tail = currentNode;
        // remove head
        } else if(index === 0) {
            this.head = this.head.next;
            return;
        } else {
            let prevNode = this.traverseToNode(index-1);
            let currentNode = this.traverseToNode(index);
            prevNode.next = currentNode.next;
        }
        this.length--;
    }

    traverseToNode(index) {
        let currentNode = this.head;
        let count = 0;

        while(count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    printList() {
        let arr = [];
        let currentNode = this.head;

        while(currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    // parition question - pivot being the parition number - Question 2.4 pg 94
    partition(pivot) { // O(n^2)
        // parse each element in the linkedlist, moving elements to either side of the parition
        // each count number is each node
        let count = 0;
        let partitionList = new LinkedList();

        while(count !== this.length) {
            let currentNode = this.traverseToNode(count); // gather the node

            if(currentNode.value < pivot) {
                // add to head (left side)
                partitionList.prepend(currentNode);
            } else if(currentNode.value >= pivot) {
                // add to tail (right side)
                partitionList.append(currentNode);
            }
            count++;
        }
        console.log(partitionList.printList()); // return the partitioned list
        return partitionList;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }
}

// Remove Duplicates Question 
function removeDuplicates(list) {
    const mySet = new Set();

    let currentNode = list.head;
    let previousNode = null;

    // for each node
    while(currentNode) {
        if(mySet.has(currentNode.value)) { // if already in set, delete the node
            previousNode.next = currentNode.next;
        } else {
            mySet.add(currentNode.value); // add the value
            previousNode = currentNode;
        }
        currentNode = currentNode.next;
        count++;
    }
    return list;
}

// Partially working
function partition(list, pivot) { // O(n)
    // parse each element in the linkedlist, moving elements to either side of the parition
    // each count number is each node
    let currentNode = list.head;
    let previousNode = list.head;

    while(currentNode) {
        if(currentNode.value < pivot) {
            // add to head (left side)
            list.prepend(currentNode);
        } else if(currentNode.value >= pivot) {
            // add to tail (right side)
            list.append(currentNode);
        }
        previousNode.next = currentNode.next; // fill the gap
        currentNode = currentNode.next;
    }
}

const linkedList = new LinkedList();

linkedList.prepend(2);
linkedList.prepend(9);
linkedList.prepend(2);
linkedList.prepend(10);
linkedList.prepend(1);
linkedList.prepend(7);

console.log(linkedList.printList());
partition(linkedList, 7);
console.log(linkedList.printList());

