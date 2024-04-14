const quizData = [
  {
    question: 'Qual é a principal causa do aquecimento global?',
    options: [
      'Queima de combustíveis fósseis',
      'Desmatamento',
      'Erupções vulcânicas',
      'Emissões de gases de efeito estufa',
    ],
    answer: 'Emissões de gases de efeito estufa',
  },
  {
    question:
      'Qual é o principal gás de efeito estufa emitido pela atividade humana?',
    options: [
      'Dióxido de carbono (CO2)',
      'Metano (CH4)',
      'Óxido nitroso (N2O)',
      "Vapor d'água",
    ],
    answer: 'Dióxido de carbono (CO2)',
  },
  {
    question: 'Qual é o principal impacto da mudança climática nos oceanos?',
    options: [
      'Aumento da acidez',
      'Diminuição do nível do mar',
      'Redução das tempestades',
      'Congelamento das águas',
    ],
    answer: 'Aumento da acidez',
  },
  {
    question: 'Qual é a principal fonte de energia renovável?',
    options: ['Solar', 'Eólica', 'Hidrelétrica', 'Geotérmica'],
    answer: 'Solar',
  },
  {
    question:
      'Qual é o nome dado ao fenômeno de aumento da temperatura média da Terra?',
    options: [
      'Aquecimento global',
      'Resfriamento global',
      'Neutralização',
      'Degelo',
    ],
    answer: 'Aquecimento global',
  },
  {
    question: 'O que são os gases de efeito estufa?',
    options: [
      'Gases que esfriam a atmosfera',
      'Gases que bloqueiam a radiação solar',
      'Gases que aquecem a atmosfera',
      'Gases inertes',
    ],
    answer: 'Gases que aquecem a atmosfera',
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const resultMessage = document.getElementById('result-message');

function showQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = '';
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', checkAnswer);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(e) {
  const selectedOption = e.target.textContent;
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  nextButton.style.display = 'none';

  restartButton.style.display = 'block';

  if (score <= 4) {
    resultMessage.textContent = 'Estude mais através de nossa plataforma.';
  } else {
    resultMessage.textContent = 'Muito bem, você está bem informado.';
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionElement.style.display = 'block';
  optionsElement.style.display = 'block';
  nextButton.style.display = 'block';
  restartButton.style.display = 'none';
  resultMessage.textContent = '';

  showQuestion();
}

nextButton.addEventListener('click', checkAnswer);
restartButton.addEventListener('click', restartQuiz);

showQuestion();
