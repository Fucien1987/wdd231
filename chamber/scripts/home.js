const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecast = document.querySelector("#forecast");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=42.36&lon=-71.06&units=imperial&appid=c3ce9d6dddfa89b28ac0a471f83a44bd";

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    weatherDesc.textContent = data.weather[0].description;
}
apiFetch();

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=42.36&lon=-71.06&units=imperial&appid=c3ce9d6dddfa89b28ac0a471f83a44bd";

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            forecast.innerHTML = "";
            
            for (let i = 0; i < 3; i++) {
                const item = data.list[i * 8];
                
                const p = document.createElement("p");
                p.textContent = `${new Date(item.dt_txt).toLocaleDateString(
                    "en-US",
                    {weekday: "long" }
                )}: ${Math.round(item.main.temp)}°F`;
                
                forecast.appendChild(p);
            }
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
getForecast();

const membersUrl = "data/members.json";
const spotlightCards = document.querySelector("#spotlights-cards");

async function getSpotLights() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();

        const qualifiedMembers = data.members.filter(
            member => member.membership === 2 || member.membership === 3
        );
        qualifiedMembers.sort(() => 0.5 - Math.random());

        const selectedMembers = qualifiedMembers.slice(0, 3);

        selectedMembers.forEach(member => {
            const card = document.createElement("section");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}">
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
            `;

            spotlightCards.appendChild(card);
            
        });
    } catch (error) {
        console.log(error);
    }
}
getSpotLights();