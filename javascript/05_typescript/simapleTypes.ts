let defaultType = 234;
let isActive : boolean = true;
let decimal : number = 6;
let test: string = "mr jemmy";
let marks: number[]= [123, 456, 789];
let tuple : [number ,string] = [1,"hello"] ;


type userinfo = {
    name:string ;
    age:number;
    isAdmin?:boolean;
};

interface userdetails {
    name:string;
    age: number;
    isAdmin?:boolean;
} 

let obj1: UserInfo = {name:"john" , age:30 };
let obj2: UserDetails = {name:"john" ,age:30};

interface book {
    name:string;
    page:number;
    author:string;
    price:number;
    desicption?:string;
    userdetails?:userdetails;
}


let book1: Book ={
    name: "AI Basics",
    pages:250 ,
    author:"jane doe"
    price: 29.99,
};

let book2 : Book = {
    name: "learning Typescript",
    pages:300,
    author: "john smith",
    price: 39.99 ,
    desicption : "A comprehensive guide to Typescript.",
};

let book3: Book = {
    name: "Advanced programing",
    pages:400,
    author: "Alice johnson",
    price:49.99,
    userdetails: {
        name:"Bob Brown",
        age:45,
    },
};