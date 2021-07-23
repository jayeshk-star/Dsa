function runProgram(input) {
    //  console.log(input)
    input=input.trim().split("\n");
    // console.log(input);
    var [row,col,target]=input[0].trim().split(" ").map(Number)
    // console.log(row,col,target);
    var k=3;
    var line=1;
    var mat=[];
    for(var i=0;i<row;i++)
    {
        var arr=input[line].trim().split(" ").map(Number);
        line++;
        mat.push(arr);
        
    }
    
    var count=0;
    for(var i=0;i<row;i++)
    {
        for( var j=0;j<col;j++)
        {
            if(j+2<col)
            {
                if(mat[i][j]+mat[i][j+1]+mat[i][j+2]==target)
                {
                    count++;
                    
                }
            
            }
            if(i+2<row)
            {
                if(mat[i][j]+mat[i+1][j]+mat[i+2][j]==target)
                {
                    count++;   
                }
            }
            if(i+2<row && j+2<col)
            {
                if(mat[i][j]+mat[i+1][j+1]+mat[i+2][j+2]==target)
                {
                    count++;   
                } 
            }
            
            if(i>1 && j+2<col)
            {
                if(mat[i][j]+mat[i-1][j+1]+mat[i-2][j+2]==target)
                {
                    count++;   
                } 
            }
            
        }
    }
    console.log(count)
    

    
    

}
    
if (process.env.USERNAME === "HP") {
    runProgram(`3 3 6
    3 2 1 
    2 2 2 
    1 5 1 
    `);
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


