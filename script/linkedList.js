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

   addNodeToKthPosition(position, data) {
      if (position < 1 || this.head == null) return false;
      let curr = this.head;
      let prev = null;
      while (position > 1 && curr !== null) {
         prev = curr;
         curr = curr.next;
         position--;
      }
      if (curr == null && position > 1) return false;
      // console.log(curr, prev, position);
      let node = new Node(data);
      if (prev == null) {
         node.next = curr;
         this.head = node;
      } else {
         prev.next = node;
         node.next = curr;
      }

      return true;
   }

   changeKthNodeData(position, data) {
      if (position < 1 || this.head == null) return false;
      let curr = this.head;
      while (position > 1 && curr !== null) {
         curr = curr.next;
         position--;
      }
      if (curr == null && position > 0) return false;
      // console.log(curr, prev, position)
      curr.data = data;
      return true;
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
