const form = document.getElementById("registroForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const fecha = document.getElementById("fecha").value;


    if (nombre !== "" && apellido !== "" && email !== "" && pass !== "" && fecha !== "") {
        localStorage.setItem("logged", "true");
        window.location.href = "../index.html"; 
    } else {
        alert("Complete todos los campos");
    }
});