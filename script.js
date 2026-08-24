const openCard = document.getElementById("openCard");

const openingScreen = document.querySelector(".opening-screen");

const cardScreen = document.getElementById("cardScreen");


openCard.addEventListener("click", function () {

    openingScreen.style.display = "none";

    cardScreen.style.display = "flex";

});