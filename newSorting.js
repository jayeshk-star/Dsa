function runProgram(input) {
    var input=input.trim().split("\n");
    // console.log(input)
    var [n,target]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    // console.log(n,target,arr)

    for(let i=0;i<n-1;i++)
    {
        for( let j=0;j<n-i-1;j++)
        {
            temp1=arr[j]%target;
            temp2=arr[j+1]%target;
            if(temp1>temp2)
            {
                let temp=arr[j];
                // console.log(temp)
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
    }
}

console.log(arr.join(" "))
    
      }
  if (process.env.USERNAME === "HP") {
      runProgram(`5 6
      12 18 17 65 46`);
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