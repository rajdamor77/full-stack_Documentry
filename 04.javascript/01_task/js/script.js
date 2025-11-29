// Complex Array of Objects
let users = [
  {
    id: 1,
    firstname: "Raj",
    lastname: "Kumar",
    age: 22,
    contact: {
      phone: 8799521742,
      email: "raj@example.com"
    },
    address: {
      city: "Mumbai",
      pincode: 400001
    },
    hobbies: ["cricket", "coding", "traveling"],
    skills: [
      { name: "JavaScript", level: "advanced" },
      { name: "HTML", level: "expert" },
      { name: "CSS", level: "intermediate" }
    ],
    username: "mr_rk"
  },
  {
    id: 2,
    firstname: "Jaimin",
    lastname: "Patel",
    age: 25,
    contact: {
      phone: 7041521968,
      email: "jaimin@example.com"
    },
    address: {
      city: "Ahmedabad",
      pincode: 380001
    },
    hobbies: ["reading", "gaming", "cycling"],
    skills: [
      { name: "React", level: "advanced" },
      { name: "Node.js", level: "beginner" },
      { name: "MongoDB", level: "intermediate" }
    ],
    username: "mr_jp"
  }
];

// Example 1: Show each user's name and city
users.forEach(user => {
  console.log(`${user.firstname} ${user.lastname} lives in ${user.address.city}`);
});

// Example 2: Find users who know "JavaScript"
let jsUsers = users.filter(user =>
  user.skills.some(skill => skill.name === "JavaScript")
);
console.log("Users who know JavaScript:", jsUsers);

// Example 3: Add a new skill to a specific user
let updateUser = users.find(u => u.username === "mr_jp");
updateUser.skills.push({ name: "Express.js", level: "beginner" });

// Example 4: Print all hobbies of all users
let allHobbies = users.flatMap(user => user.hobbies);
console.log("All hobbies:", allHobbies);

// Example 5: Sort users by age (ascending)
let sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", sortedByAge);


// product
let products = [
  {
    id: 101,
    name: "Wireless Headphones",
    brand: "Sony",
    price: 7999,
    inStock: true,
    category: "Electronics",
    specs: {
      color: "Black",
      batteryLife: "30 hours",
      connectivity: ["Bluetooth", "AUX"]
    },
    ratings: [4, 5, 5, 4, 3],
    reviews: [
      { username: "raj_22", comment: "Sound quality is phenomenal!", stars: 5 },
      { username: "jaimin_99", comment: "Good but expensive", stars: 4 }
    ]
  } ] ;


  //books

  let books = [
    {
        name:BuildDontTalk,
        author:rajshamani,
        publishd:nov25_2022,
        about:{
            motive,marketing
        }
    },
    {
        name:Canthurtme,
        author:DavidGoggins,
        publishd:Dec4_2018,
        about:{
           self_trasformation,motive
        }
    } ,
    {
        name:atomichabis,
        author:JamesClear,
        publishd:oct16_2018,
        about:{
            productive,self_motive
        }
    } ,
    {
        name:ItEndsWithUs,
        author:collenhoover,
        publishd:aug15_2016,
        about:{
            love,fantasy
        }
    } ,
    {
        name:DieForYou ,
        author:laurenjackson,
        publishd:oct28_2024,
        about:{
            darklove,vempire_romance
        }
    }

  ] 