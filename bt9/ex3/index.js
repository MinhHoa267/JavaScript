function changeText() {
  const paragraph = document.getElementById("pid");
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", changeText);
