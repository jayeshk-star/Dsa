function runProgram(input) {
  var input = input.trim().split("\n");
  var test = +input[0];
  //   console.log(test)

  var line = 1;
  for (let i = 0; i < test; i++) {
    var subtest = +input[line];
    line++;
    var str = input[line].trim();
    line++;
    //   console.log(subtest,str)
    let x=0;
    let y=0;
    for(j of str){
        if(j==="L")
        {
            x=x-1;
        }else if(j==="R")
        {
            x=x+1
        }else if(j==="U")
        {
            y=y+1;
        }else 
        {
            y=y-1
        }
    }

    if(x===0 && y===0){
        console.log("Yes")
    }else{
        console.log("No")
    }



  }
}
if (process.env.USERNAME === "HP") {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
