// Get the heading element
const heading = document.getElementById("heading");

// Function to toggle the text color
function changeColor() {
  if (heading.style.color === "white") {
    heading.style.color = "blue";
  } else {
    heading.style.color = "white";
  }
}

// Change color every 1 second
setInterval(changeColor, 1000);
