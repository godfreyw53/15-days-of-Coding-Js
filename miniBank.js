const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Users database
const users = [
    {
        name: "Godfrey",
        email: "godfreyw54@gmail.com",
        password: "Lian@frey2024",
        balance: 100
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        password: "pass123",
        balance: 50
    }
];

let currentUser = null;

// LOGIN
function login() {
    rl.question("Enter email: ", (email) => {
        rl.question("Enter password: ", (password) => {
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                console.log("Invalid credentials. Try again.\n");
                return login();
            }
            currentUser = user;
            console.log(`\nWelcome, ${user.name}!\n`);
            mainMenu();
        });
    });
}

// MAIN MENU
function mainMenu() {
    console.log("Choose an option:");
    console.log("1. View balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Logout");
    console.log("5. Exit");

    rl.question("> ", (choice) => {
        switch (choice) {
            case "1":
                viewBalance();
                break;
            case "2":
                deposit();
                break;
            case "3":
                withdraw();
                break;
            case "4":
                logout();
                break;
            case "5":
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice.\n");
                mainMenu();
        }
    });
}

// VIEW BALANCE
function viewBalance() {
    console.log(`Your current balance is: $${currentUser.balance}\n`);
    mainMenu();
}

// DEPOSIT
function deposit() {
    rl.question("Enter amount to deposit: ", (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount.\n");
        } else {
            currentUser.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${currentUser.balance}\n`);
        }
        mainMenu();
    });
}

// WITHDRAW
function withdraw() {
    rl.question("Enter amount to withdraw: ", (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log("Invalid amount.\n");
        } else if (amount > currentUser.balance) {
            console.log("Insufficient funds.\n");
        } else {
            currentUser.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${currentUser.balance}\n`);
        }
        mainMenu();
    });
}

// LOGOUT
function logout() {
    console.log(`\nGoodbye, ${currentUser.name}!\n`);
    currentUser = null;
    login();
}

// Start the app
console.log("=== Welcome to Mini Bank ===\n");
login();
