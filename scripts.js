document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("correo").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        alert("¡Formulario enviado correctamente!");
        form.reset();
    });
});