const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
class listnode {
  constructor(val, next = null) {
    if (!val) {
      return new Error("pass value in paramater ");
    }
    this.head = val;
    this.next = next;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isempty() {
    return this.head == null ? true : false;
  }

  insert_head(element = null) {
    if (element == null) {
      return console.log("Pass correct parameter ");
    } else if (this.isempty()) {
      const node = new listnode(element);
      this.tail = node;
      this.head = node;
    } else {
      const node = new listnode(element, this.head);
      this.head = node;
    }
  }
  insert_tail(element) {
    if (element == null) {
      return console.log("Pass correct parameter ");
    } else if (this.isempty()) {
      const node = new listnode(element);
      this.head = node;
      this.tail = node;
    } else {
      const node = new listnode(element);
      this.tail.next = node;
      this.tail = node;
    }
  }

  print_list() {
    if (this.isempty()) {
      return console.log("list empty");
    } else {
      let node = this.head;
      let list = `${node.head} `;
      while (node.next) {
        list += `${node.next.head} `;
        node = node.next;
      }
      console.log("list:", list);
    }
  }
}
const list = new linkedlist();
let choice = 0;

function processInput() {
  readline.question(
    "1)Print List\n2)Prepend\n3)Append\n4)0 for exit\n",
    (input) => {
      choice = parseInt(input);
      switch (choice) {
        case 0:
          readline.close();
          break;
        case 1:
          list.print_list();
          processInput(); // Ask for input again
          break;
        case 2:
          readline.question("Enter Value: ", (newhead) => {
            list.insert_head(newhead);
            processInput(); // Ask for input again
          });
          break;
        case 3:
          readline.question("Enter Value: ", (newtail) => {
            list.insert_tail(newtail);
            processInput(); // Ask for input again
          });
          break;
        default:
          console.log("Invalid input");
          processInput(); // Ask for input again
      }
    }
  );
}

processInput(); // Start the process
