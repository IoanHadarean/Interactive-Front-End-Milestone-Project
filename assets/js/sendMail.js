/* global emailjs */


// Function created in order to send emails via the contact form on submit
// Note: The template for sending emails was created using EmailJS

function sendMail(form) {
    emailjs.send("gmail", "rosie", {
            "from_name": form.name.value,
            "from_email": form.emailaddress.value,
            "project_request": form.enquiry.value
        })
    .then(
        function(response) {
            console.log("SUCCES", response);
            alert("Your message has been sent successfully");
            document.getElementById('form').reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert("Message was not sent");
            document.getElementById('form').reset();
        });
    return false;
}


async function init() {
    await sendMail();
}

init();






