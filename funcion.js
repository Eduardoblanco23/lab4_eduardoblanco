document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let reason = document.getElementById("reason").value;

    if (name === "" || email === "" || reason === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Formulario enviado exitosamente.");
    }
});

//boton salir

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("thankYouBtn");

    button.addEventListener("click", function() {
        alert("¡Gracias por visitar mi pagina web!");
    });
});