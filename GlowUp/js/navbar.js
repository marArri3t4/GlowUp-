import { pages } from "./pages.js";

export function renderNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    
    if (navbar.dataset.rendered === "true") return;

    navbar.innerHTML = `
        <nav>
            ${pages.map(p => `<a href="${p.url}">${p.title}</a>`).join("")}
            <a id="logoutBtn" href="#">Logout</a>
        </nav>
    `;

    navbar.dataset.rendered = "true";
}