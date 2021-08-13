window.onscroll = function() {addElement()};
let i = 0;
function addElement () {
  // create a new div element
  let main = document.getElementById("thisismain")
  const newDiv = document.createElement("li");

  // and give it some content
  const newContent = document.createElement("div")
  newContent.classList.add("frist")
  const image = document.createElement("img");
  image.src="https://source.unsplash.com/random/" + i
  i = i + 1;
  newContent.append(image)
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  main.appendChild(newDiv)
}
