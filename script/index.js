import { LinkedList } from "./linkedList.js";

let list = new LinkedList();
let inputValue = document.getElementById("inputVal");
let option = document.querySelector("#linkedListOption");

option.addEventListener("change", () => {
  inputValue.placeholder = "";
  if (option.value == 2) {
    inputValue.placeholder = `Enter comma seperated data\n(Ex. 1,2,3,4)`;
    inputValue.style.display = "block";
  } else if (option.value == 3 || option.value == 4) {
    inputValue.placeholder = `Enter Position, Data. Ex.\n2,55`;
    inputValue.style.display = "block";
  } else if (option.value == 5) {
    inputValue.placeholder = `Enter Position. Ex.\n2`;
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
      list.createRandomList(15);
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
      if (!list.addNodeToKthPosition(arr[0], arr[1])) alert("Invalid Position");
      break;
    case 4:
      arr = data
        .trim()
        .split(",")
        .map((el) => el.trim());
      if (!list.changeKthNodeData(arr[0], arr[1])) alert("Invalid Position");
      break;
    case 5:
      if (list.deleteKthNode(+data.trim())) {
        setTimeout(() => {
          document.querySelector(".displayContainer > div:nth-child(3)").classList.add("highlight");
        }, 1000);
      } else {
        alert("Invalid Position");
      }

      break;
    case 6:
      list.reverseList();
      break;
    case 7:
      let mid = list.findMiddleNode();
      if (mid) {
        alert("Find middle node at position " + mid);
      } else {
        alert("First Create Linkedlist");
      }
      break;
    case 8:
      list.firstHalf();
      break;
    case 9:
      list.lastHalf();
      break;
    case 11:
      let duplicates = list.findDuplicate();
      console.log(duplicates);
      break;
    default:
      list.deleteList();
      list.createRandomList(5);
      list.displayList();
  }

  list.displayList();
}
