// Object  Initialize;
const mrPresident = {
    age : 20,
    myName : "Joe Biden",
    isOld : true,
    isPresident : false,

    myMoney : null,

    myWallet : undefined,
};

// toán tử "."
 console.log(mrPresident.age);
 console.log(mrPresident.myName);

// notation: [ ]
mrPresident["myName"] ="Donald Trump";

//index.js:21 Uncaught ReferenceError: myName is not defined at index.js:21:14
//mrPresident[ myName] ="Alice";

let selection =" myBike";
mrPresident["selection"] ="Đầm";