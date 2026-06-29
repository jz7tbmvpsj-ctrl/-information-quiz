let currentQuestion = 0;
let score = 0;

questions.sort(() => Math.random() - 0.5);

const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextBtn");

showQuestion();

function showQuestion() {
    questionElement.textContent =
        `${currentQuestion + 1}. ${questions[currentQuestion].question}`;

    resultElement.textContent = "";
    nextButton.style.display = "none";
}

function answer(userAnswer) {

    const correctAnswer =
        questions[currentQuestion].answer;

    if(userAnswer === correctAnswer){
        resultElement.textContent = "⭕ 정답!";
        score++;
    }else{
        resultElement.textContent = "❌ 오답!";
    }

    nextButton.style.display = "inline-block";
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        finishQuiz();
    }

}

function finishQuiz(){

    document.getElementById("quizBox").style.display = "none";

    document.getElementById("finish").style.display = "block";

    document.getElementById("score").textContent =
        `점수 : ${score} / ${questions.length}`;

}

function restartQuiz(){
    location.reload();
}
