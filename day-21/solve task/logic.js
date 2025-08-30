const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correct: 1,
  },
  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()",
    ],
    correct: 0,
  },
  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const startBtn = document.getElementById("start");

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
let outOf = 3;
startBtn.addEventListener("click", loadQuestion);
nextBtn.addEventListener("click", handleNextBtn);

function handleNextBtn() {
  nextBtn.disabled = true;
  currentQuestion++;
  updateTimer();
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function loadQuestion() {
  startBtn.style.display = "none";
  updateTimer();
  countdown();
  getQuestion();
  getOptions();
}

function countdown() {
  clearInterval(timer);
  timer = setInterval(() => {
    timerEl.textContent -= 1;
    if (+timerEl.textContent === 0) {
      selectAnswer(-1);
      clearInterval(timer);
      setTimeout(() => {
        nextBtn.dispatchEvent(new Event("click"));
      }, 2000);
    }
  }, 1000);
}

function getQuestion() {
  const q = questions[currentQuestion].question;
  questionEl.textContent = "";
  questionEl.textContent = q;
}

function getOptions() {
  optionsEl.textContent = "";
  const options = questions[currentQuestion].options;
  options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("btn-option");
    btn.addEventListener("click", () => selectAnswer(index));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  clearInterval(timer);
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".btn-option");
  buttons.forEach((b) => (b.disabled = true));
  if (index === q.correct) {
    score++;
    buttons[index].classList.add("correct");
  } else if (index !== -1) {
    buttons[q.correct].classList.add("correct");
    buttons[index].classList.add("wrong");
  } else {
    buttons[q.correct].classList.add("correct");
  }

  nextBtn.style.display = "block";
  nextBtn.disabled = false;
}

function showResult() {
  resultEl.textContent = "";
  resultEl.textContent = `you get ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
}

function updateTimer() {
  timerEl.textContent = "15";
}
