let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

function CheckSize(height,width,l){ // function declaration to check size of picture

    if(height<l || width<l){     //  if any of the side is less than required length
        return "UPLOAD ANOTHER"
    }
    else{                           // when height and width both are greater than required length
        if(height==width){         // if height and width are equal
            return "ACCEPTED"
        }
        else{
            return "CROP IT"     // if height and width are unequal 
        }
    }
}
let l = parseInt(readLine()); // reading length of profile picture
let n = parseInt(readLine()); // reading number of test cases
// running for loop for every test case
for(let i=0;i<n;i++){
    let X = readLine().split(" "); // reading space seperated inputs
    let height = parseInt(X[0]);  // assigning value to input height
    let width=parseInt(X[1]); // assigning value to input width
    console.log(CheckSize(height,width,l)) // invoking function to check feasibilty of image and printing result
}
