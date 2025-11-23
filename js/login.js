function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const msg = document.getElementById("loginMsg");

  if(!user || !pass) {
    msg.textContent = "Todos los campos son obligatorios.";
    return;
  }

  const users = getUsers();
  const found = users.find(u => u.username === user && u.password === pass);

  if(!found){
    msg.textContent = "Credenciales incorrectas.";
    return;
  }

  localStorage.setItem("session", user);
  window.location.href = "templates.html";
}
