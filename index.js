//Select button, input and ul through DOM
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");



//Get input length
function inputLength() {
  return input.value.length;
};


//Create new li element
function createListElement() {
  var item = document.createElement("li");
  var btn = document.createElement("button");
  //Create text inside li from textbox
  item.appendChild(document.createTextNode(input.value));
  //Create Remove button next to list item
  btn.appendChild(document.createTextNode("Remove"));
  item.appendChild(btn);
  //Append li to ul
  ul.appendChild(item);
  //Clear textbox
  input.value = "";


  //Click button to delete item
  for(var i = 0; i < items.length; i++){
    btn.addEventListener("click", function(){
      //Select current item
      this.parentNode.remove();
  });
  }
  }


function addItemAfterClick(){
  //Prevent empty list items with condition statement
  if (inputLength() > 0) {
    createListElement();
  }
}


function addItemAfterEnter(event){
  //Prevent empty list items with condition statement
  //And check if Enter was pressed
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}




//Click button to add more items on list
button.addEventListener("click", addItemAfterClick);

//Press Enter to add more items on list
input.addEventListener("keypress", addItemAfterEnter);

function crossOff(){
//Cross off completed task
for(var i = 0; i < items.length; i++){
  items[i].addEventListener("click", function(){
    //Crosses off selected item
    this.classList.toggle("done");
  })
}
}

// DoubleClick to cross off, Doesn't cross off new list items
// ul.addEventListener("click", crossOff);
