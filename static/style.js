window.onscroll = function() {addElement()};
let i = 0;
function addElement () {
  // create a new div element
  let main = document.getElementById("container")

  // and give it some content
  const newContent = document.createElement("div")
  newContent.classList.add("box")
  const image = document.createElement("img");
  image.src="https://source.unsplash.com/random/" + i
  i = i + 1;
  newContent.append(image)
  // add the text node to the newly created div
  main.appendChild(newContent)
}
    