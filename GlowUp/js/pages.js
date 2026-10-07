const inPagesFolder = window.location.pathname.includes("/pages/");

export const pages = inPagesFolder
    ? [
        { title: "Home", url: "../index.html" },
        { title: "Rostro", url: "rostro.html" },
        { title: "Ojos", url: "ojos.html" },
        { title: "Labios", url: "labios.html" },
        { title: "Brochas y accesorios", url: "brochas.html" }
    ]
    : [
        { title: "Home", url: "./index.html" },
        { title: "Rostro", url: "./pages/rostro.html" },
        { title: "Ojos", url: "./pages/ojos.html" },
        { title: "Labios", url: "./pages/labios.html" },
        { title: "Brochas y accesorios", url: "./pages/brochas.html" }
    ];