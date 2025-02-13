let score = 0;
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const loveMessage = document.getElementById("love-message");

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️"; // Heart emoji
    heart.classList.add("heart");
    heart.style.left = Math.random() * (window.innerWidth - 50) + "px";
    heart.style.top = "-50px"; // Start position

    heart.addEventListener("click", function () {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        heart.remove();

        // Display love message when score reaches 10
        if (score >= 10) {
            loveMessage.style.display = "block";
            loveMessage.innerText = "💌 ജാബി എന്റെ ഹൃദയം കീഴടക്കി ! 💖"; 
        }
    });

    gameContainer.appendChild(heart);

    let fallInterval = setInterval(() => {
        let currentTop = parseInt(heart.style.top || 0);
        if (currentTop < window.innerHeight - 50) {
            heart.style.top = (currentTop + 5) + "px"; 
        } else {
            clearInterval(fallInterval);
            heart.remove();
        }
    }, 30);
}

// Generate a new heart every 800ms
setInterval(createHeart, 800);
