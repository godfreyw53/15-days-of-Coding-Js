const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const users = [
  {
    name: "Godfrey",
    email: "godfreyw54@gmail.com",
    password: "Lian@frey2024",
    balance: 100,
  },
  {
    name: "Alice",
    email: "makungusagala9@gmail.com",
    password: "kenya@12345",
    balance: 70,
  },
  {
    name: "Evosylne",
    email: "evoslynewekesa@gmail.com",
    password: "Evo@2025",
    balance: 35,
  },
  {
    name: "Hellen",
    email: "hellenmabese@gmail.com",
    password: "mabese@2016",
    balance: 899,
  },
  {
    name: "Judith",
    email: "jvhangas@gamil.com",
    password: "suitable72",
    balance: 670,
  }
];
let currentUser = null
//login
function login(){
    rl.question("Enter email: ", (email) =>{
        rl.question("Enter password: ", (password) =>{
            const user = users.find(u =>u.email ===email && u.password ===password)
            if(!user){
                console.log("Invalid credentials. Try again.\n")
                return login()
            }
            currentUser = user
            console.log(`\nWelcome, ${user.name}!\n`)
            mainMenu()
        })
    })
}
