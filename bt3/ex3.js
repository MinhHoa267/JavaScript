// Bài 1

// Câu 1:
let address = {
  street: "123 Lê Đại Hành",
  city: "Hồ Chí Minh",
  zipCode: "700000"
};
console.log(address);

// Câu 2:
function showAddress(address) {
  for (let key in address) {
    console.log(key + ": " + address[key]);
  }
}


// Bài 2
// Câu 1:
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}
// Khởi tạo đối tượng
const myAddress = createAddress("456 Nguyễn Trãi", "Hà Nội", "100000");
console.log(myAddress);


// Câu 2:
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
// Khởi tạo đối tượng
const k = new Address("789 Cách Mạng Tháng Tám", "Đà Nẵng", "550000");
console.log(k);


// Bài 3
// Câu 1:
function areSame(obj1, obj2) {
  return obj1 === obj2;
}

// Câu 2:
function areEqual(obj1, obj2) {
  return obj1.street === obj2.street &&
         obj1.city === obj2.city &&
         obj1.zipCode === obj2.zipCode;
}

// Bài 4
let blogPost = {
  title: "Học javascript ",
  body: "tìm hiểu về các khái niệm cơ bản",
  author: "Minh Hòa",
  views: 1250,
  comments: [
    {
      author: "Ngọc Tiên",
      body: "Bài viết rất hữu ích, cảm ơn bạn nhiều!"
    },
    {
      author: "Ngọc Quý",
      body: "Bài viết hay"
    }
  ],
  isLive: true
};

// Bài 5
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const newPost = new Post(
  "Hello World",
  "This is my first post",
  "Minh Hòa"
);

console.log(newPost);

// Bài 6
let priceRanges = [
  {
    label: "$",
    price: "Inexpensive",
    min: 0,
    max: 100000
  },
  {
    label: "$$",
    price: "Moderate",
    min: 100001,
    max: 300000
  },
  {
    label: "$$$",
    price: "Expensive",
    min: 300001,
    max: 1000000
  }
];
let p = priceRanges
console.log(p);
