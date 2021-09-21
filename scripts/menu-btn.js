const hamburguerBtn = document.getElementById("hamburguer-btn");
const menu = document.getElementById("menu");

hamburguerBtn.addEventListener("click", () => {
  menu.classList.toggle("activit");
  menu.classList.toggle("not-activit");
  console.log(menu.className === "activit");

  menu.className === "activit"
    ? (window.onscroll = function () {
        window.scrollTo(0, 0);
      })
    : (window.onscroll = () => {});
});