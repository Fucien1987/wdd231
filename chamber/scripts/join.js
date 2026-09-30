const npButton = document.querySelector("#np-button");
const npDialog = document.querySelector("#np-dialog");
const closeButton = document.querySelector(".close-dialog");

npButton.addEventListener("click", () => {
    npDialog.showModal();
});
closeButton.addEventListener("click", () => {
    npDialog.close();
});

const bronzeButton = document.querySelector("#bronze-button");
const bronzeDialog = document.querySelector("#bronze-dialog");
const closeBronze = document.querySelector("#close-bronze");

bronzeButton.addEventListener("click", () => {
    bronzeDialog.showModal();
});
closeBronze.addEventListener("click", () => {
   bronzeDialog.close();
});

const silverButton = document.querySelector("#silver-button");
const silverDialog = document.querySelector("#silver-dialog");
const closeSilver = document.querySelector("#close-silver");

silverButton.addEventListener("click", () => {
    silverDialog.showModal();
});
closeSilver.addEventListener("click", () => {
   silverDialog.close();
});

const goldButton = document.querySelector("#gold-button");
const goldDialog = document.querySelector("#gold-dialog");
const closeGold = document.querySelector("#close-gold");

goldButton.addEventListener("click", () => {
    goldDialog.showModal();
});
closeGold.addEventListener("click", () => {
   goldDialog.close();
});

const timestamp = document.querySelector("#timestamp");
timestamp.value = new Date().toISOString();