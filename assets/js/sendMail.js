// Function created in order to send emails via the contact form on submit
// Note: The template for sending emails was created using EmailJS

function sendMail(form) {
    emailjs.send("gmail", "rosie", {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
        "project_request": form.enquiry.value
    })
    .then (
        function(response) {
            console.log("SUCCES", response);
        },
        function (error) {
            console.log("FAILED", error);
        },
        function(redirect) {
            window.location="index.html";
        });
}