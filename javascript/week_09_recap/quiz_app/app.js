const questionContainer = document.querySelector("#question");
const questionButton = document.querySelector("#question-button");
const form = document.querySelector("#player-guess");
const resultContainer = document.querySelector("#result-container");
const scoreContainer = document.querySelector("#score-container");

let currentQuestion;
let hasGuessed = false;

const loadQuestion = () => {
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
        .then(response => response.json())
        .then(data => {
            resultContainer.innerHTML = "";
            questionContainer.innerText = data.results[0].question;
            currentQuestion = data.results[0];
            hasGuessed = false;
        })
}

const handlePlayerGuess = (event) => {
    event.preventDefault();

    if (!hasGuessed){

        const resultText = document.createElement("p");
        
        if (event.target.guess.value === currentQuestion.correct_answer) {
            resultText.innerText = "Congratulations!"
            let currentScore = parseInt(scoreContainer.innerText);
            // debugger
            currentScore += 1;
            scoreContainer.innerText = currentScore;
        }
        else {
            resultText.innerText = "Incorrect!"
        }
        
        resultContainer.appendChild(resultText);
        
        hasGuessed = true;
    }
}

questionButton.addEventListener("click", loadQuestion);
form.addEventListener("submit", handlePlayerGuess);