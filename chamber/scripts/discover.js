import { places } from "../data/places.mjs";
const cardsContainer = document.querySelector("#discover-cards");
function displayPlaces() {
    places.forEach((place) => {
        const card = document.createElement("section");

        const title = document.createElement("h2");
        title.textContent = place.name;

        const figure = document.createElement("figure");

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.name;
        image.loading = "lazy";
        image.width = 300;
        image.height = 200;

        figure.appendChild(image);

        const address = document.createElement("address");
        address.textContent = place.address;

        const description = document.createElement("p");
        description.textContent = place.description;

        const button = document.createElement("a");
        button.textContent = "Learn More";
        button.href = place.url;
        button.target = "_blank";
        button.rel = "noopener";

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cardsContainer.appendChild(card);
    });
}
displayPlaces();

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent =
         "Welcome! Let us know if you have any question.";
} else {
    const difference = currentVisit - Number(lastVisit);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent = "Your last visited 1 day ago.";
    } else {
        visitMessage.textContent =
             `Your last visited ${days} days ago.`;
    }
}
localStorage.setItem("lastVisit", currentVisit);

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});