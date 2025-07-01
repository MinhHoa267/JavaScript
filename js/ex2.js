// Câu 1
function Timsolon(a, b) {
    return a > b ? a : b;
}
// in kết quả
console.log(Timsolon(5, 9));


// Câu 2 
function isLandscape(width, height) {
    return width > height;
}
// in kết quả
console.log(isLandscape(1700, 1970));



// Câu 3
function FizzBuzz(input) {
    if (typeof input !== 'number') {
        return "Not a number";
    }

    switch (true) {
        case (input % 3 === 0 && input % 5 === 0):
            return "FizzBuzz";
        case (input % 3 === 0):
            return "Fizz";
        case (input % 5 === 0):
            return "Buzz";
        default:
            return input;
    }
}
// in kết quả
console.log(FizzBuzz(11));



// Câu 4

const Gioihan_Tocdo = 70;         
const Moi_diem_tru = 5;        
const Diem_toi_da = 12;       
function checkSpeed(Toc_do) {
    if (Toc_do <= Gioihan_Tocdo) {
        console.log("OK");
        return;
    }
    const Qua_Toc_do = Toc_do - Gioihan_Tocdo;
    const Diem = Math.floor(Qua_Toc_do / Moi_diem_tru);
    if (Diem > Diem_toi_da) {
        console.log("License suspended");
    } else {
        console.log("Points:", Diem);
    }
}
// in kết quả 
console.log(checkSpeed(70));


// Câu 5

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const label = (i % 2 === 0) ? "EVEN" : "ODD";
    console.log(i + " - " + label);
  }
}

// in kết quả 
console.log(showNumbers(7));


// Câu 6
// hàm đếm phần tử trong mảng
function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}
// khai báo mảng
const array = [0, null, 5, "hello", "", NaN, true, undefined];
// in kết quả 
console.log(countTruthy(array));


// Câu 7
// hàm đếm phần tử trong object
function showProperties(object) {
  for (let key in object) {
    if (typeof object[key] === 'string') {
      console.log(key + ": " + object[key]);
    }
  }
}
// khởi tạo obj
const movie = {
  title: "Conan",
  year: 1994,
  author: "Aoyama Gosho",
  isGreat: true
};
// in kết quả 
showProperties(movie);


// Câu 8
// tạo hàm tính điểm
function calculateGrade(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  // Tính điểm trb
  let average = total / marks.length;

  // xét điểm trb để xét loại
  let grade = "";
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}
// khởi tạo 1 mảng điểm
let studentMarks = [85, 90, 78, 92];

// tạo biến gán hàm tính điểm để dễ gọi ra sử dụng 
let result = calculateGrade(studentMarks);

// in kết quả 
console.log("Xếp loại:", result);


// Câu 9

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(i + '. ' + stars);
  }
}

// Câu 10
// tạo hàm số nguyên tố
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    // gọi hàm
    if (isPrime) {
      console.log(number);
    }
  }
}