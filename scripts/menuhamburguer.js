/*---------------------------------------------*/
/*--------------MENU HAMBURGUER----------------*/
/*---------------------------------------------*/


function menuHamburguer() {
  var linksMobile = document.getElementById("linksMobile");
  if (linksMobile.style.display === "block") {
    linksMobile.style.display = "none";
  } else {
    linksMobile.style.display = "block";
  }
}