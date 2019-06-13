// class User {

//     constructor(email, pwd) {
//         this.email = email
//         this.pwd = pwd
//     }

//     isAdmin() {
//         return this.admin === true;
//     }

// }

// class Admin extends User {

//     constructor(email, pwd) {
//         super(email, pwd)
//         this.admin = true
//     }

// }

// const User1 = new User('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1)
// console.log(Adm1)
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true