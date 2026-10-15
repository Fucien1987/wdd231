import { setupNavigation } from "./navigation.js";
setupNavigation();

const lastModified = document.querySelector("#lastModified");
if (lastModified){
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}