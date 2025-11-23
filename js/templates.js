function getSession() {
  return localStorage.getItem("session");
}

if(!getSession()){
  window.location.href="index.html";
}

const filters = [
  {name:"Normal", value:"none"},
  {name:"Escala de grises", value:"grayscale(100%)"},
  {name:"Sepia", value:"sepia(100%)"},
  {name:"Contraste", value:"contrast(200%)"}
];

const templateList = document.getElementById("templateList");
let selectedFilter = null;

filters.forEach(f => {
  const div = document.createElement("div");
  div.className = "template";
  div.textContent = f.name;
  div.onclick = () => {
    document.querySelectorAll(".template").forEach(d=>d.classList.remove("selected"));
    div.classList.add("selected");
    selectedFilter = f.value;
  };
  templateList.appendChild(div);
});

function proceed(){
  if(!selectedFilter){
    alert("Selecciona un filtro");
    return;
  }
  localStorage.setItem("selectedFilter", selectedFilter);
  window.location.href="camera.html";
}
