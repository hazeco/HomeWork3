

// myList.push("a");
// console.log("myList");
// myList.push("b");
// console.log("myList");
// myList.push("c");
// console.log("myList");

class Node{
    constructor(elm){
        this.element = elm;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let currentNode = this.firstNode;
        for(let i = 0 ; i < index ; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    display(){
        let temp = this.firstNode;
        r.innerHTML = '';
        for(let i = 0 ; i < this.length ; i++){
            let data = this.get(i);
            r.innerHTML = r.innerHTML + data.element + " ";
            if(i != this.length - 1){
                r.innerHTML = r.innerHTML + "===>";
            }
        }
    }
}

const d = document.getElementById("data");
const r = document.getElementById("result");
let myList = new LinkedList();

function pushData(){
    myList.push(d.value);
    console.log(myList);
    d.value = "";
}

function displayData(){
    myList.display();
    console.log(myList);
}