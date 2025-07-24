const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// Tạo mảng chứa các hình ảnh
const images = [img1, img2, img3];

// Truy xuất theo id
const resultDiv = document.getElementById("result");

// Duyệt từng phần tử
images.forEach((img) => {
  const info = `image[${img}]: 
     height=${img.height || ""}, 
     width=${img.width || ""}, 
     style.height=${img.style.height || ""}, 
     style.width=${img.style.width || ""}`;

  const p = document.createElement("p");
  p.textContent = info;
  resultDiv.appendChild(p);
});