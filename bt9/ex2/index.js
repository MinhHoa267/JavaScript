function setBorderWidth(width) {
  const box = document.getElementById("box");
  box.style.borderWidth = width + "px";
}

document.getElementById("btn20").addEventListener("click", function(event) {
  event.preventDefault();
  setBorderWidth(20);
});

document.getElementById("btn5").addEventListener("click", function(event) {
  event.preventDefault();
  setBorderWidth(5);
});