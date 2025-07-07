// script.js
document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";
  let password = '';
  
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  document.getElementById('password-display').textContent = password;
}

function copyPassword() {
  const passwordText = document.getElementById('password-display').textContent;
  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Password copied to clipboard!");
  });
}
