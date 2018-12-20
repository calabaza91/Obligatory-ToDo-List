//Select button, input and ul through DOM
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//Click button to add more items on list
button.addEventListener("click", function() {

  //Prevent empty list items with condition statement
  if (input.value.length > 0) {
    //Create new li element
    var li = document.createElement("li");
    //Create text inside li from textbox
    li.appendChild(document.createTextNode(input.value));

    //Append li to ul
    ul.appendChild(li);

    //Clear textbox
    input.value = "";
  }
})


//Press Enter to add more items on list
input.addEventListener("keypress", function(event) {

  //Prevent empty list items with condition statement
  //And check if Enter was pressed
  if (input.value.length > 0 && event.keyCode === 13) {
    //Create new li element
    var li = document.createElement("li");
    //Create text inside li from textbox
    li.appendChild(document.createTextNode(input.value));

    //Append li to ul
    ul.appendChild(li);

    //Clear textbox
    input.value = "";
  }
})
