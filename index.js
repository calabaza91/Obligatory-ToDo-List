//Select button, input and ul through DOM
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//Click button to add more items on list
button.addEventListener("click", function(){

  //Create new li element
  var li = document.createElement("li");
  //Create text inside li from textbox
  li.appendChild(document.createTextNode(input.value));

  //Append li to ul
  ul.appendChild(li);
})
