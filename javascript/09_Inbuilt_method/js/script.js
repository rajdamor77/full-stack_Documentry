let firstName = "firstName"
let lastName = "lastname"





const user = {
    firstName: "razz",
    lastName: "kumar",
    username: "mrjemmy",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};



console.log(user.firstName)
console.log(user["lastName"])
console.log(user.getFullName())
console.log(user.getFullName().toUpperCase())


console.log(firstName.topUppercase())
console.log(firstName.toLowerCase())