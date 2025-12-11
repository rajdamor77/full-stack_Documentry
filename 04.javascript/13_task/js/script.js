// const heading = document.querySelector("h1");
// heading.style.color = "red";


// // 1️ Select <h1> by class
// const title = document.querySelector(".main-title");
// title.style.color = "blue";

// // 3️ Select Input by class
// const input = document.querySelector(".username");
// input.style.border = "2px solid green";
// //by id
// // const input = document.querySelector("#username");
// // input.style.border = "2px solid green";

// // 4️ Select Button by class + event
// const btn = document.querySelector(".changeBtn");
// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "lightblue";
//   title.innerText = "Button Clicked!";
// });

// // 5️ Select first <li> using tag selector
// const firstItem = document.querySelector("li");
// firstItem.style.fontWeight = "bold";


const container = document.querySelector(".container");

// create 10 boxes using JS
// for (let i = 0; i < 10; i++) {
//   const box = document.createElement("div");
//   box.classList.add("box");

//   box.innerText = i + 1;
//   box.style.display = "flex";
//   box.style.alignItems = "center";
//   box.style.justifyContent = "center";
//   box.style.fontSize = "26px";
//   box.style.color = "darkred";


  
//   container.appendChild(box);
// }

for (let i = 0; i < 10; i++) {
  // container.innerHTML = container.innerHTML + `<div class="box"> ${i} </div>`
  container.innerHTML += `<div class="box"><h2> ${i} </h2> </div>`
}


