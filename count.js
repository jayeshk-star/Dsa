function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var n=+input[0];
    var line=1;
     for(let i=0;i<n;i++)
     {
         var subtest=+input[line];
         line++
         var arr1=input[line].trim().split(" ").map(Number)
         line++
         var arr2=input[line].trim().split(" ").map(Number)
         line++;
        //  console.log(arr1,arr2,subtest)
        for(let i=0;i<subtest;i++)
        {
            for(let j=0;j<subtest;j++)
            {
                if(a[i]==a[j])
                {
                    count++
                }
            }
        }
     }

      }
  if (process.env.USERNAME === "HP") {
      runProgram(`1
      6
      1 2 2 3 4 5
      4 4 3 2 1 1`);
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