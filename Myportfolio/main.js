var typed = new Typed(".text", {
    strings: ["Cloud Engineer", "DevOps Engineer", "Cloud Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(email + message);

    try {
        const response = await fetch('https://eykrj28u10.execute-api.us-east-1.amazonaws.com/prod', {
        

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });

        if (response.ok) {
            console.log('Message sent successfully!');
        } else {
            console.log('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});