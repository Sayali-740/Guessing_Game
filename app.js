let random;
let gameStarted = false;

document.getElementById('start-game').addEventListener('click', function() {
    const max = document.getElementById('max-number').value;
    const message = document.getElementById('message');

    if (max && max > 0) {
        random = Math.floor(Math.random() * max) + 1;
        message.textContent = 'Game started! Enter your guess.';
        gameStarted = true;

        // Show the guess section and hide the start button
        document.getElementById('guess-section').classList.remove('hidden');
        document.getElementById('game-setup').classList.add('hidden');
    } else {
        message.textContent = 'Please enter a valid maximum number.';
    }
});

document.getElementById('submit-guess').addEventListener('click', function() {
    if (gameStarted) {
        const guess = Number(document.getElementById('guess-number').value);
        const message = document.getElementById('message');

        if (guess === random) {
            message.textContent = `Congrats!! You are right! The random number was ${random}.`;
            gameStarted = false;
            document.getElementById('guess-section').classList.add('hidden'); // Hide guess input after winning
            createBalloon(); // Call function to create balloon

            // Show and animate the win image
            const winImage = document.getElementById('win-image');
            winImage.style.display = 'block'; // Show the image
            winImage.classList.remove('hidden'); // Remove hidden class
        } else if (guess < random) {
            message.textContent = 'Your guess is smaller. Try again!';
        } else {
            message.textContent = 'Your guess is larger. Try again!';
        }

        document.getElementById('guess-number').value = '';  // Clear the input after each guess
    }
});

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    document.querySelector('.game-container').appendChild(balloon);

    // Remove balloon after animation
    setTimeout(() => {
        balloon.remove();
    }, 3500); // Adjust time to match the animation duration
}