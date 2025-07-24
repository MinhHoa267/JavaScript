function stopEvent(event) {
  // Đổi nội dung ô two
  const cell2 = document.getElementById("c2");
  cell2.textContent = "hello";

  // Chặn chạy lan lên table
  event.stopPropagation();

  // In thông báo 
  console.log("event propagation halted - ngăn sự kiện ảnh hưởng lên <table> thành công!");
}

// Gắn sự kiện click 
document.getElementById("tbl1").addEventListener("click", stopEvent, false);

// Gắn sự kiện click 
document.getElementById("t-daddy").addEventListener("click", function () {
  console.log("t-daddy clicked");
}, false);