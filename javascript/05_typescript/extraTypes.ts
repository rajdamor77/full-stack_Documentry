interface detailsType {
    info :string;
    username: string;
}

let detials: string | detailsType = "This is extra type files.";

console.log (details);

details = {
    info : "user information",
    username: "user123"
};

console.log (details);

//details =10;

//console.log (details)

enum Gender {
    male,
    female,
    other,
}

let userGender: Gender = "test";

console.log (userGender);
