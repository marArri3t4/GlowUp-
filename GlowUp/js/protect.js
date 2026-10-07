const logged = localStorage.getItem("logged");


if (!window.location.pathname.includes("registro.html")) {

    if (logged !== "true") {

        if (window.location.pathname.includes("/pages/")) {
            window.location.href = "../pages/registro.html";
        } else {
            window.location.href = "./pages/registro.html";
        }
    }
}
