function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

function saveUsers(users){
  localStorage.setItem("users", JSON.stringify(users));
}

function signup(){
  const user = document.getElementById("signUser").value.trim();
  const email = document.getElementById("signEmail").value.trim();
  const pass = document.getElementById("signPass").value.trim();
  const pass2 = document.getElementById("signPass2").value.trim();
  const msg = document.getElementById("signupMsg");

  if(!user || !email || !pass || !pass2){
    msg.textContent = "Todos los campos son obligatorios.";
    return;
  }

  if(!email.includes("@")){
    msg.textContent = "Correo inválido.";
    return;
  }

  if(pass !== pass2){
    msg.textContent = "Las contraseñas no coinciden.";
    return;
  }

  const users = getUsers();
  if(users.some(u => u.username === user)){
    msg.textContent = "El usuario ya existe.";
    return;
  }

  users.push({username: user, email, password: pass});
  saveUsers(users);
  msg.style.color = "#388e3c";
  msg.textContent = "Cuenta creada ✔ Redirigiendo...";
  setTimeout(()=> window.location.href="index.html", 1500);
}
