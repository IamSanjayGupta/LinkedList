import { LinkedList } from "./linkedList.js";
let list = new LinkedList();

let option = document.querySelector("#linkedListOption");
option.addEventListener("change", () => {
   if (+option.value == 2) {
      document.querySelector("#inputVal").style.display = "block";
   } else {
      document.querySelector("#inputVal").style.display = "none";
   }
});

document.querySelector("#displayList").addEventListener("click", operation);
function operation() {
   switch (+option.value) {
      case 1:
         list.deleteList();
         list.createRandomList(10);
         break;

      case 2:
         let data = document.getElementById("inputVal").value;
         let arr = data
            .trim()
            .split(",")
            .map((el) => el.trim());
         list.createList(arr);
         break;
      case 6:
         list.reverseList();
         console.log(list);
         break;
      default:
         console.log("default");
   }

   list.displayList();
}
