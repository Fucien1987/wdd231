const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

const details = document.querySelector("#application-details");

details.innerHTML = `
     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
     <p><strong>Email:</strong> ${email}</p>
     <p><strong>Phone:</strong> ${phone}</p>
     <p><strong>Organisation:</strong> ${organization}</p>
     <p><strong>Application Date:</strong> ${timestamp}</p>
`;

const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;