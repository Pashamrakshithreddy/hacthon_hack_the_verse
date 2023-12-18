const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const myQuestions = [
  {
    question: 'What is the capital of France?',
    answers: {
      a: 'Paris',
      b: 'Madrid',
      c: 'Rome'
    },
    correctAnswer: 'a'
  },

  {
    question: 'which is the biggest planet in solar system',
    answers: {
      a: 'earth',
      b: 'Jupiter',
      c: 'Saturn'
    },
    correctAnswer: 'b'
  },
  
  {
    question: 'Which planet is known as the Red Planet?',
    answers: {
      a: 'venus',
      b: 'Jupiter',
      c: 'mars'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Number of planets in our solar system?',
    answers: {
      a: '9',
      b: '8',
      c: '7'
    },
    correctAnswer: 'b'
  },
  // Add more questions here in the same format
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter}: ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
    }
  });

  resultContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} correct!`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
