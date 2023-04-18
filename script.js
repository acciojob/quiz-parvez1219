//your JS code here. If required.
const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }
];

const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;

// Function to load the question and options
function loadQuestion() {
  const currentQuiz = questions[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  aText.textContent = currentQuiz.a;
  bText.textContent = currentQuiz.b;
  cText.textContent = currentQuiz.c;
  dText.textContent = currentQuiz.d;
}

// Function to get selected answer and check if it's correct
function getSelectedOption() {
  const options = document.getElementsByName('option');
  let selectedOption = null;
  options.forEach((option) => {
    if (option.checked) {
      selectedOption = option.value;
    }
  });
  return selectedOption;
}


// Function to submit the answer and move to the next question
function submitAnswer() {
  const selectedOption = getSelectedOption();
  if (selectedOption === null) {
    alert('Please select an option');
    return;
  }
  if (selectedOption === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

// Function to show the quiz result
function showResult() {
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

// Function to restart the quiz
function restartQuiz() {
  quizContainer.style.display = 'block';
  resultContainer.style.display = 'none';
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();

submitBtn.addEventListener('click', submitAnswer);
restartBtn.addEventListener('click', restartQuiz);
