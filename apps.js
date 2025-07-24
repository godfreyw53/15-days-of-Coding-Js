const users = [
  {
    name: "Godfrey",
    email: "godfreyw54@gmail.com",
    password: "Lian@frey2024",
    balance: 100
  }
];

let currentUser = null;

function showLogin() {
  document.getElementById("login-screen").style.display = "block";
  document.getElementById("signup-screen").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
}

function showSignup() {
  document.getElementById("signup-screen").style.display = "block";
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("dashboard").style.display = "none";
}

function showDashboard() {
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "none";

  document.getElementById("user-name").innerText = currentUser.name;
  document.getElementById("user-balance").innerText = currentUser.balance;
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  currentUser = user;
  showDashboard();
}

function createAccount() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const deposit = parseFloat(document.getElementById("signup-deposit").value) || 0;

  const existing = users.find(u => u.email === email);
  if (existing) {
    alert("Email already exists");
    return;
  }

  const newUser = { name, email, password, balance: deposit };
  users.push(newUser);
  alert("Account created! Please log in.");
  showLogin();
}

function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount");
    return;
  }

  currentUser.balance += amount;
  document.getElementById("user-balance").innerText = currentUser.balance;
}

function withdraw() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount");
    return;
  }

  if (amount > currentUser.balance) {
    alert("Insufficient funds");
    return;
  }

  currentUser.balance -= amount;
  document.getElementById("user-balance").innerText = currentUser.balance;
}

function logout() {
  currentUser = null;
  showLogin();
}
