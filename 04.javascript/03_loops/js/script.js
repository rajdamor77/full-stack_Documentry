let sum=0
for (let i=1; i<=10 ; i++) {
    console.log (`itration ${i}`) 
    sum += i; 
}
console.log(sum)


for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

 


//star pattern


//
let result = ""

for  (let row=1; row<=5; row++) {
  for(let col=1; col<=5; col++) {
    result=result + "* "
  }
  result = result + "\n" 
}

console.log (result) 



//
let output = ""

for  (let row=1; row<=5; row++) {
  for(let col=1; col<=row; col++) {
    output=output + "* "
  }
  output = output + "\n" 
}

console.log (output) 


//

let a= "" 

for  (let row=1;row<=5;row++) {
  for(let col=1; col<=5;col++){
    a=a + `$(row)`
  }
}



