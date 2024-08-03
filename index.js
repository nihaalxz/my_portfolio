
emailjs.init("YOUR_USER_ID");

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all fields.");
        return;
    }

    const serviceID = "service_dlueb2c";
    const templateID = "template_j4rwnae";

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(response);
            alert("Your message was sent successfully!");
        })
        .catch(error => {
            console.error(error);
            alert("There was an error sending your message. Please try again.");
        });
}
