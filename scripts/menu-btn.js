const hamburguerBtn = document.getElementById("hamburguer-btn");
const menu = document.getElementById("menu");

hamburguerBtn.addEventListener("click", ()=>{
	menu.classList.toggle("activit")
	menu.classList.toggle("not-activit")
})

console.log("carregando")
window.onload = ()=>{console.log("Load")}