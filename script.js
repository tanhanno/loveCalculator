document.getElementById("loveScoreForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var him = document.getElementById("him").value.trim();
    var her = document.getElementById("her").value.trim();

    var loveScore = calculateLoveScore(him, her);
    displayLoveScore(loveScore);
});

function calculateLoveScore(him, her) {
    var randomScore = Math.floor(Math.random() * 101);
    return randomScore;
}

function displayLoveScore(score) {
    var resultElement = document.getElementById("result");
    var textElement = document.getElementById("text");
    resultElement.textContent = score + "%";
    if (score > 80) {
        textElement.textContent = "You are meant to be!";
    } if (score > 50 && score < 80) {
        textElement.textContent = "Maybe.";
    } if (score > 30 && score < 50) {
        textElement.textContent = "In another life.";
    } if (score < 30) {
        textElement.textContent = "Nope.";
    }
}