function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n")
    // console.log(input)
    var word1=input[0].trim().split(" ").join("")
    // console.log(word1)
    var length=word1.length
    // console.log(length)
     var word2=input[1].trim().split(" ").join("")
     var length2=word2.length
    //  console.log(word2)
    //  console.log(length2)
     
       var sort1=word1.split("").sort().join("")
    //    console.log(sort1)
       var sort2=word2.split("").sort().join("")
    //    console.log(sort2)

    if(sort1==sort2  || length==length2){
        console.log("True")
    }else{
        console.log("False")
    }
   
   
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
