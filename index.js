//Select button, input and ul through DOM
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");



//Get input length
function inputLength() {
  return input.value.length;
};


//Create new list item and button
function createListElement() {
  var li = document.createElement("li");
  //Create text inside li from textbox
  li.appendChild(document.createTextNode(input.value));
  li.addEventListener("click", crossOff);
  //Append li to ul
  ul.appendChild(li);
  //Clear textbox
  input.value = "";

  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Remove"));
  delBtn.addEventListener("click", removeListItem);
  //Add button right next to item
  li.appendChild(delBtn);



  //Crosses off list item
  function crossOff() {
    li.classList.toggle("done");
  }

  //Deletes list item
  function removeListItem() {
    li.remove();
  }

}

function addItemAfterClick() {
  //Prevent empty list items with condition statement
  if (inputLength() > 0) {
    createListElement();
  }
}


function addItemAfterEnter(event) {
                        //check if Enter was pressed
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}



//Click button to add more items on list
button.addEventListener("click", addItemAfterClick);

//Press Enter to add more items on list
input.addEventListener("keypress", addItemAfterEnter);
