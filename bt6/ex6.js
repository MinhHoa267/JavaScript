// bài tập ex6

// excercise : Stopwatch
// 1. start(): lấy tgian bắt đầu startTime = Date()
// - chuyển running = true

//2. end() : lấy tgian bấm dừng endTime = Date()
// - duration(number) endTime - startTime
// - chuyển running = false

//3. reset(): gán tgian về 0

// 4. khởi tạo variable:
// - startTime (number)
// - running (boolean)
// - endTime (number)
// - duration endTime - startTime(number)


function Stopwatch() {
 
  let startTime;
  let endTime; 
  let duration = 0;
  let running = false;

  this.start = function() {
    if (running) {
      throw new Error ("Stopwatch has already started");
    }
    startTime = Date.now();
    running = true;
 };

  this.end = function() {
    if (!running) {
      throw new Error ("Stopwatch is not started");
    }
    endTime = Date.now();
    duration += (endTime - startTime) / 1000;
    running = false;
  };
  this.reset = function() {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  }  
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }//, set: function(value) {
     
    //   return duration = value;
    // }
  });
}

let sw = new Stopwatch();