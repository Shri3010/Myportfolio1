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

    const response = await fetch('https://muoggfpsda4xcj4i6fzsjmy7ie0bhknq.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message })
    });

    if (response.ok) {
        console.log('Message sent successfully!');
    } else {
        console.log('Failed to send message.');
    }
});
