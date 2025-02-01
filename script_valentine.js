document.getElementById('envelope').addEventListener('click', function() {
    // Move the letter up slightly to reveal just the top 10%
    document.getElementById('letter').style.transform = 'translateX(-50%) translateY(10px)';
    
    // Delay to make the letter move up first
    setTimeout(function() {
        document.getElementById('letter').classList.add('revealed'); // Letter stays in place after moving up slightly
        document.getElementById('envelope').classList.add('opened'); // Envelope moves down and fades out to reveal the letter
    }, 100); // Small delay to allow the letter to move up first

    // Hide the envelope after it's moved and faded out
    setTimeout(function() {
        document.getElementById('envelope').style.display = 'none'; // Envelope disappears after animation
    }, 1200); // Wait for the envelope to finish moving and fading out
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Fade out the letter and show the "YAY!" message
    document.getElementById('letter').style.opacity = 0;
    setTimeout(function() {
        document.getElementById('letter').style.display = 'none'; // Hide the letter
        document.getElementById('yayMessage').classList.add('show'); // Show the "YAY!" message
    }, 500); // Wait for the letter to fade out before showing "YAY!"

    // Add hearts to the screen
    for (let i = 0; i < 70; i++) { // Adjust the number of hearts as needed
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(function() {
            heart.remove();
        }, 10000); // Hearts disappear after animation ends
    }
});

document.getElementById('noBtn').addEventListener('click', function() {
    const noButton = document.getElementById('noBtn');

    // Trigger the shake effect by adding the shake class to the "NO" button
    noButton.classList.add('shake');

    // Remove the shake class after the animation ends to allow it to be triggered again
    setTimeout(function() {
        noButton.classList.remove('shake');
    }, 500); // The duration of the shake animation (0.5s)

    // Move the envelope to a random position on the screen (optional)
    const envelope = document.getElementById('envelope');
    envelope.style.position = 'absolute';
    envelope.style.left = Math.random() * window.innerWidth + 'px';
    envelope.style.top = Math.random() * window.innerHeight + 'px';
});


