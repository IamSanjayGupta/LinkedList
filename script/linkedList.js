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

   //Delete kth Node
   deleteKthNode(position) {
      if (position < 1 || this.head == null) return false;
      let curr = this.head;
      let prev = null;
      let count = 1;
      while (count !== position && curr.next !== null) {
         prev = curr;
         curr = curr.next;
         count++;
      }
      console.log(curr, prev, position, count);

      if (count < position) {
         return false;
      } else {
         if (prev == null) {
            this.head = this.head.next;
         } else {
            if (curr.next == null) {
               prev.next = null;
            } else {
               prev.next = curr.next;
            }
         }
         return true;
      }
   }

   //middle node
   findMiddleNode() {
      let Ptr = this.head;
      let middle = 0;
      while (Ptr !== null) {
         Ptr = Ptr.next;
         middle++;
      }
      return Math.ceil(middle / 2);
   }

   //firstHalf
   firstHalf() {
      if (this.head == null) return false;
      let curr = this.head;
      let count = 0;
      while (curr !== null) {
         curr = curr.next;
         count++;
      }
      let mid = Math.ceil(count / 2);
      curr = this.head;
      while (mid > 1) {
         curr = curr.next;
         mid--;
      }
      curr.next = null;
      return true;
   }

   //lastHalf
   lastHalf() {
      if (this.head == null) return false;
      let mid = Math.ceil(this.totalNode() / 2);
      if (mid == 1) {
         this.head.next = null;
         return true;
      }
      let curr = this.head;
      while (mid > 1) {
         curr = curr.next;
         mid--;
      }
      this.head = curr;
      return true;
   }

   //delete List
   deleteList() {
      this.head = null;
   }

   totalNode() {
      let curr = this.head;
      let count = 0;
      while (curr !== null) {
         curr = curr.next;
         count++;
      }
      return count;
   }

   displayList() {
      let container = document.querySelector(".displayContainer");
      container.innerHTML = "";

      let curr = this.head;
      let i = 1;
      while (curr !== null) {
         let div = document.createElement("div");
         div.innerText = curr.data;
         div.setAttribute("style", `--order: ${i++}`);
         container.append(div);
         if (curr.next !== null) {
            let span = document.createElement("span");
            span.setAttribute("style", `--order: ${i}`);
            container.append(span);
         }
         curr = curr.next;
      }
   }
}

export { LinkedList };
