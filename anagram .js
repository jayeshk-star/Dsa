function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")




    console.log(input)






    
}
    

if (process.env.USERNAME === "HP") {
    runProgram(`anagram
    nag a ram`);
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