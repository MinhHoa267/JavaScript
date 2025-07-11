// Bài 1
function arrayFromRange(min, max) {
  if (max < min) return [];

  let n = [];
  for (let i = min; i <= max; i++) 
    n.push(i);
    return n;
}
let arr = arrayFromRange
console.log(arr(3,9)); 

// Bài 2
function includes(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 3)); // true


// Bài 3
function except(array, excluded) {
  let r = [];

  for (let k of array) {
    if (!excluded.includes(k)) {
      r.push(k);
    }
  }

  return r;
}
const array = [1, 2, 3, 4, 5, 6];
const removed = [2, 4, 6];

const output = except(numbers, removed);
console.log(output); // [1, 3, 5]


// Bài 4
function move(array, index, offset) {
  const i = index + offset;
  // Bắt lỗi offset 
  if (i < 0 || i >= array.length) {
    console.error("Invalid offset");
    return;
  }
  // dùng "..." để sao chép ko thay đổi mảng gốc
  const output = [...array];
  // Lấy phần tử tại index và xóa khỏi mảng
  const a = output.splice(index, 1)[0];
  // Thêm phần tử vào vị trí mới
  output.splice(i, 0, a);
  return output;
}
const arrays = [10, 20, 30, 40];
const moved = move(numbers, 1, 2);
console.log(moved); //  [10, 30, 40, 20]



// Bài 5

function countOccurrences(array, searchElement) {
  let count = 0;

  for (let element of array) {
    if (element === searchElement) {
      count++;
    }
  }

  return count;
}

const numbers = [1, 2, 3, 1, 4, 1];
console.log(countOccurrences(numbers, 1));  // 3

console.log(countOccurrences(numbers, 5));  // 0


// Bài 6
// cách 1: dùng  for
function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

// cách 2 dùng reduce
function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((max, current) => {
    return current > max ? current : max;
  });
}
// in kết quả
console.log(getMax([5, 12, 3, 8, 21])); // 21
console.log(getMax([]));//undefined


// Bài 7
const movies = [
  { title: 'A', year: 2018, rating: 4.5 },
  { title: 'B', year: 2018, rating: 4.7 },
  { title: 'C', year: 2018, rating: 3 },
  { title: 'D', year: 2017, rating: 4.5 }
];

const k = movies
  .filter(movie => movie.year === 2018 && movie.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map(movie => movie.title);

console.log(k); 
