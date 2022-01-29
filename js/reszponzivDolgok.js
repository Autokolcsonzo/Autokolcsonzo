$(function () {

  //Kérlek ne másologasd az animációt kezelő funckciot egy olyan fájlba aminek az a neve hogy reszponziveDolgok mappa szerkezet nélkül.


  const reszponzivMenuIkon = document.querySelector(".hamburgerMenu");

  const navbar = document.querySelector(".navbar");

  reszponzivMenuIkon.addEventListener("click", () => {
    navbar.classList.toggle("gombValtozas");
  });
});
