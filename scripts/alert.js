export const alert = () => {
  const div = document.createElement("div");
  const divAlert = document.createElement("div");
	const icon = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const buttonHome = document.createElement("button");
  const buttonRandom = document.createElement("button");
  div.setAttribute("class", "container-alert");
  divAlert.setAttribute("class", "alert");
	icon.setAttribute("class", "alert-icon");
  h3.setAttribute("class", "alert-title");
  p.setAttribute("class", "alert-message");
  buttonHome.setAttribute("class", "alert-btn-home");
  buttonRandom.setAttribute("class", "alert-btn-random");

	icon.setAttribute("src", "./images/icon-alert.svg");
	icon.setAttribute("alt", "Icon-error")

  buttonHome.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  buttonRandom.addEventListener("click", () => {
    window.location.href = "./drink.html";
  });

  h3.innerText = "Não foi possivel encontrar este drink!";
  p.innerText =
    "Selecione se você quer um drink aleatório ou voltar ao início e buscar um novo drink.";
  buttonHome.innerText = "início";
  buttonRandom.innerText = "novo drink";
	divAlert.appendChild(icon);
  divAlert.appendChild(h3);
  divAlert.appendChild(p);
  divAlert.appendChild(buttonRandom);
  divAlert.appendChild(buttonHome);
  div.appendChild(divAlert);

  return div;
};
