function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(test,arr)

   
   for(let i = 0; i < n; i++) {
    let min = i;
    for(let j = i+1; j < n; j++){
        if(arr[j] < arr[min]) {
            min=j; 
        }
     }
     if (min != i) {
         let tmp = arr[i]; 
         arr[i] = arr[min];
         arr[min] = tmp;      
    }
}
console.log(arr.join(" "))  
      }
  if (process.env.USERNAME === "HP") {
      runProgram(`5
      3 5 0 9 8`);
  } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function(input) {
          read += input;
      });
      process.stdin.on("end", function() {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
      });
      process.on("SIGINT", function() {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
      });
  }