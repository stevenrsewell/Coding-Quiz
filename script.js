var quizContent = document.getElementById("question-content");
var score = 0;
var highscore = localStorage.getItem(".high-scores");
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
var quizContainer = document.getElementById("quiz-container")
var questionNum = 0
var timer
var quizTime = 60
var timerEl = document.getElementById("timeClock")

var questions = [
    {
        question: "What does CSS stand for?",
        potential_answers: ["Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
        correct_answer: "Cascading Style Sheets"
    },

    {
      question: "Where in an HTML document is the correct place to refer to an external style sheet?",
      potential_answers: ["<head>", "<body>", "<h1>", "At the end of the document"],
      correct_answer: "<head>"
  },

  {
      question: "What is the default value of the position property in CSS?",
      potential_answers: ["Relative", "Fixed", "Absolute", "Static"],
      correct_answer: "Static"
  },

  {
      question:
          "Inside which HTML element do we put the JavaScript?",
      potential_answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
      answer: "<script>"
  },

  {
      question: "Which event occurs when the user clicks on an HTML element?",
      potential_answers: ["onchange", "onclick", "onmouseover", "onmouseclick"],
      correct_answer: "onclick"
  }
]


function startQuiz() {

  renderQuestion()
  startTimer()
}

function startTimer() {
  timer = setInterval(()=>{
    quizTime --
    timerEl.innerText = quizTime
  },1000)
}

function renderQuestion() {
  var buttons = questions[questionNum].potential_answers.map(function (answer) {
    return `<button onclick="answerQuestion('${answer}')" >${answer}</button>`
  })

  quizContainer.innerHTML = `
    <h1>${questions[questionNum].question}</h1>
    ${buttons.join("")}
  `
}

function answerQuestion(answer) {
  if (answer === questions[questionNum].correct_answer) {
    score ++
  } else {
    score --
    quizTime -= 10
  }

  questionNum ++
  console.log(questionNum)
  console.log(score)
  if (questionNum === questions.length) {
    endQuiz()
  } else {
    renderQuestion()
  }
}

function endQuiz() {
  quizContainer.innerHTML = `
    Your score is ${score}
  `
  clearInterval(timer)

};