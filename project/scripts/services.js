const servicesContainer = document.querySelector("#services-container");
const serviceModal = document.querySelector("#service-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");

async function getServices() {
    try {
        const response = await fetch ("data/services.json");
        if (!response.ok){
            throw new Error("Could not load services.");
        }
        const services = await response.json();
        console.log(services);
        displayServices(services);
    } catch (error) {
        console.error("Error loading services:", error);
    }
}
function displayServices(services) {
    servicesContainer.innerHTML = "";

    services.forEach((service) => {
        const card = document.createElement("article");

        card.innerHTML =`
        <h2>${service.name}</h2>
        <p><strong>Service ID:</strong> ${service.id}</p>
        <p><strong>Category:</strong> ${service.category}</p>
        <p>${service.description}</p>
        <button class="learn-more" type="button">Learn More</button>
        `;
        servicesContainer.appendChild(card);

        const learnMoreButton = card.querySelector(".learn-more");

        learnMoreButton.addEventListener("click", () => {
            modalContent.innerHTML  = `
                <h2>${service.name}</h2>
                <p><strong>Category:</strong> ${service.category}</p>
                <p>${service.description}</p>
                `;
            serviceModal.showModal();
            localStorage.setItem("lastServiceViewed", service.name);
        });
    });
}
closeModal.addEventListener("click", () => {
    serviceModal.close();
});
getServices();