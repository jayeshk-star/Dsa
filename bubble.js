function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var n=+input[0];
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(test,arr)

   let temp;
    for( let i=0;i<n-1;i++)
    {
        for(let j=0;j<n-i-1;j++)

        {
            console.log(i,j)
            if(arr[j]>arr[j+1])
            {
               temp=arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp
              
            }
         
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