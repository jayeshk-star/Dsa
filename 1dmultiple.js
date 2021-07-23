
function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    // console.log(input)


    var line=1;
    for( var i=0;i<+input[0];i++)
    {
        var len=+input[line];
        line++;
        var arr=input[line].trim().split(" ").map(Number)
        line++;
        console.log(len,arr)
    }
   
}
if (process.env.USERNAME === "HP") {
    runProgram(`2
    3
    1 2 3
    4
    1 2 3 3`);
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
