import { LinkedList } from "./linkedList.js";
let list = new LinkedList();
let inputValue = document.getElementById("inputVal");
let option = document.querySelector("#linkedListOption");
option.addEventListener("change", () => {
   if (+option.value == 2) {
      inputValue.placeholder = `Enter comma seperated data\n(Ex. 1,2,3,4)`;
      inputValue.style.display = "block";
   } else if (+option.value == 3) {
      inputValue.placeholder = `Enter Position, Data. Ex.\n2,55`;
      inputValue.style.display = "block";
   } else {
      inputValue.style.display = "none";
   }
});

document.querySelector("#displayList").addEventListener("click", operation);
function operation() {
   let data = inputValue.value;
   let arr;
   switch (+option.value) {
      case 1:
         list.deleteList();
         list.createRandomList(10);
         break;

      case 2:
         arr = data
            .trim()
            .split(",")
            .map((el) => el.trim());
         list.createList(arr);
         break;
      case 3:
         arr = data
            .trim()
            .split(",")
            .map((el) => el.trim());
         console.log(list.addNodeToKthPosition(arr[0], arr[1]));
         break;
      case 6:
         list.reverseList();
         console.log(list);
         break;
      default:
         list.deleteList();
         list.createRandomList(10);
         console.log("default");
   }

   list.displayList();
}
