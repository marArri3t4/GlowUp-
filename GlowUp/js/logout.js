const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("logged");

        if (window.location.pathname.includes("/pages/")) {
            window.location.href = "../pages/registro.html";
        } else {
            window.location.href = "./pages/registro.html";
        }
    });
}