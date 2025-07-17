// bài 1
function sum(...args) {
  let i = Array.isArray(args[0]) ? args[0] : args;

  // Tính tổng bằng reduce
  return i.reduce((total, i) => total + i, 0);
}

// in kết quả
console.log(sum(1, 2, 3));             
console.log(sum([4, 5, 6]));           


// bài 2

const circle = {
  _radius: 0, 

  get radius() {
    return this._radius;
  },

  set radius(value) {
    this._radius = value;
  },

  get area() {
    return Math.PI * this._radius ** 2;
  }
};

// in kết quả
circle.radius = 5;
console.log(circle.radius); // 5
console.log(circle.area);   // 78.53


// bài 3
function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new TypeError("Lỗi: Đối số đầu tiên phải là một mảng.");
  }

  return array.reduce((count, item) => {
    return item === searchElement ? count + 1 : count;
  }, 0);
}

try {
  const result = countOccurrences([1, 2, 3, 2, 1, 2], 1);
  console.log("Số lần xuất hiện của 2 là:", result); // 3
} catch (error) {
  console.error("Bắt lỗi:", error.message);
}

