
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const sendMessageButton = document.getElementById('sendMessageButton');
        sendMessageButton.disabled = true;

        // Send email using SMTP.js
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "atijosanbabatunde@gmail.com",
            Password: "CD5F04DF742C42D209206C8D52402C4EC821",
            To: "atijosanbabatunde@gmail.com",
            From: "oluwateezzy03@gmail.com",
            Subject: subject,
            Body: `
                    <h4>You have a new message from ${name}</h4>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong><br>${message}</p>
                `
        }).then(function (response) {
            console.log(response)
            const successMessage = document.getElementById('success');
            if (response === "OK") {
                successMessage.innerHTML = "<div class='alert alert-success'><strong>Your message has been sent. </strong></div>";
                contactForm.reset();
            } else {
                successMessage.innerHTML = `<div class='alert alert-danger'><strong>Sorry ${name}, it seems that my mail server is not responding. Please try again later!</strong></div>`;
            }
            sendMessageButton.disabled = false;
        });
    });

    const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
    inputs.forEach(function (input) {
        input.addEventListener('focus', function () {
            document.getElementById('success').innerHTML = '';
        });
    });
});

