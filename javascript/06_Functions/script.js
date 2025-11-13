//fibonacci series
function fibonacciSeries(n) {
  let a = 0;
  let b = 1;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= n; i++) {
    console.log(a);
    let x = a + b;
    a = b;
    b = x;
  }
}

// Call the function
fibonacciSeries(10);






//faactorial number




let a = 5; // number whose factorial we want
let b = 1; // variable to store factorial result

for (let i = 1; i <= a; i++) {
  b = b * i;
}

console.log(`Factorial of ${a} is: ${b}`);


//function defi

function funcname (v1,v2,v3= 0){ //perams (v1,v2,v3)
  
  console.log ('v1:${v1}')
  console.log ('v2:${v2}')
  console.log  ('v3:${v3}')

  return v1 + v2 + v3
}

let result = funcName(20, v3=60 , v2 = 40) //function call (10,20,30) with argument or (v1=20 , v3=60 , v2=40)keyword args

console.log('result: ${result}')