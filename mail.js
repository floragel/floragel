function sendMail() {
    console.log("sendMail() appelé");

    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("message").value;

    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Message :", message);

    let parms = { name, email, message };
    console.log("Paramètres envoyés :", parms);

    emailjs.send("service_lds4jxo", "template_dpd7x2s", parms)
        .then(() => {
            alert("Message envoyé avec succès !");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Erreur :", error);
            alert("Une erreur s'est produite. Veuillez réessayer.");
        });
}
