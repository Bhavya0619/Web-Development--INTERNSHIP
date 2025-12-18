const quizData = [
    { q: "HTML is a programming language.", a: false },
    { q: "CSS is used for styling.", a: true },
    { q: "JavaScript runs in the browser.", a: true }
];

let index = 0;

function loadQuestion() {
    document.getElementById("question").innerText = quizData[index].q;
    document.getElementById("result").innerText = "";
}

function checkAnswer(ans) {
    if (ans === quizData[index].a) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    index = (index + 1) % quizData.length;
    setTimeout(loadQuestion, 1000);
}

loadQuestion();

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " - " + data.punchline;
        })
        .catch(() => {
            document.getElementById("joke").innerText = "Error fetching joke.";
        });
}
