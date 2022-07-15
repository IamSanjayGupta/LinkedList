class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

class LinkedList {
   constructor(head) {
      this.head = null;
   }

   createRandomList(noOfNode) {
      for (let i = 0; i < noOfNode; i++) {
         let randomNumber = Math.floor(Math.random() * noOfNode + 1);
         let node = new Node(randomNumber);
         if (this.head == null) {
            this.head = node;
         } else {
            let curr = this.head;
            while (curr.next !== null) {
               curr = curr.next;
            }
            curr.next = node;
         }
      }
   }

   //Create customize List
   createList(data) {
      this.head = null;
      data.forEach((element) => {
         let node = new Node(element);
         if (this.head == null) {
            this.head = node;
         } else {
            let curr = this.head;
            while (curr.next !== null) {
               curr = curr.next;
            }
            curr.next = node;
         }
      });
   }

   //Reverse List
   reverseList() {
      let curr = this.head;
      let prev = null;
      let next = null;

      while (curr !== null) {
         next = curr.next;
         curr.next = prev;
         prev = curr;
         curr = next;
      }
      this.head = prev;
   }
   //delete List
   deleteList() {
      this.head = null;
   }

   displayList() {
      let container = document.querySelector(".displayContainer");
      container.innerHTML = "";

      let curr = this.head;
      while (curr !== null) {
         let div = document.createElement("div");
         div.innerText = curr.data;
         container.append(div);
         if (curr.next !== null) {
            let span = document.createElement("span");
            container.append(span);
         }
         curr = curr.next;
      }
   }
}

export { LinkedList };
