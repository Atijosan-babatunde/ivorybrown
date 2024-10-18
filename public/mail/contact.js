
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

        // Send data to the backend
        axios.post('/mail', {
            name,
            email,
            subject,
            message
        })
            .then(response => {
                const successMessage = document.getElementById('success');
                if (response.data.success) {
                    successMessage.innerHTML = "<div class='alert alert-success'><strong>Your message has been sent. </strong></div>";
                    contactForm.reset();
                } else {
                    successMessage.innerHTML = `<div class='alert alert-danger'><strong>Sorry ${name}, there was an error sending your message. Please try again later!</strong></div>`;
                }
                sendMessageButton.disabled = false;
            })
            .catch(error => {
                console.log(error);
                const successMessage = document.getElementById('success');
                successMessage.innerHTML = `<div class='alert alert-danger'><strong>Sorry ${name}, something went wrong. Please try again later!</strong></div>`;
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


