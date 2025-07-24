const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// In-memory user database
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

// 🟢 Start Screen
function startApp() {
    console.log("=== Welcome to Mini Bank ===");
    console.log("1. Login");
    console.log("2. Create Account");
    console.log("3. Exit");

    rl.question("> ", (choice) => {
        switch (choice) {
            case "1":
                login();
                break;
            case "2":
                createAccount();
                break;
            case "3":
                console.log("Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice.\n");
                startApp();
        }
    });
}

// 🔐 Login
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

// 🧾 Create New Account
function createAccount() {
    console.log("\n=== Create New Account ===");

    rl.question("Enter your name: ", (name) => {
        rl.question("Enter your email: ", (email) => {
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                console.log("An account with this email already exists.\n");
                return startApp();
            }

            rl.question("Create a password: ", (password) => {
                rl.question("Initial deposit (optional - press Enter to skip): ", (input) => {
                    const deposit = parseFloat(input);
                    const balance = isNaN(deposit) ? 0 : deposit;

                    const newUser = {
                        name,
                        email,
                        password,
                        balance
                    };

                    users.push(newUser);
                    console.log(`Account created successfully for ${name}!\n`);
                    startApp();
                });
            });
        });
    });
}

// 🧭 Main Menu
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

// 💰 View Balance
function viewBalance() {
    console.log(`Your current balance is: $${currentUser.balance}\n`);
    mainMenu();
}

// 💵 Deposit
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

// 🏧 Withdraw
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

// 🚪 Logout
function logout() {
    console.log(`\nGoodbye, ${currentUser.name}!\n`);
    currentUser = null;
    startApp();
}

// 🚀 Start App
startApp();
