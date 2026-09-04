const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date() .getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;