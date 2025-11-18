
//warm-up
console.log("hey raj");

 console.log("======")



//Horz-5'star 

let stars =""
for (let i = 1; i <= 5; i++) {
  stars += "*";
}

console.log(stars);

//Vertically-5'star

for (let i=1; i<=5; i++) {
    console.log("*")
}

//
let a = "";

for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= 5; col++) {
    a = a + `${row}`;
  }
}

console.log(a);

//
let output = "";

for (let row = 1; row <= 5; row++) {
  for (let col = 1; col <= row; col++) {
    output += col;
  }
  output += "\n";   // new line after each row
}

console.log(output);

//Q-1
console.log("===Q-1====")


for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}


//Q-2
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}


//q-3

let n = 5;

for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}


//
console.log("===Q-5")

let   = 5;

for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}


//
console.log("====Q-advance====")



let rows = 4;        
let current = 1;     

for (let r = 1; r <= rows; r++) {
  let output = "";   

  for (let c = 1; c <= r; c++) {
    output += current;
    current++;        
  }

  console.log(output);
}


