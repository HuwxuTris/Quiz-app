const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is 9 mod 4?',
    answers:[
      {text: '1', correct: true},
      {text: '5', correct: false},
      {text: '3', correct: false},
      {text: '4', correct: false},
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
        { text: 'Hypertext Markup Language', correct: true },
        { text: 'High-Level Textual Language', correct: false },
        { text: 'Hyperlink and Text Management Language', correct: false },
        { text: 'Hypertext Model Language', correct: false }
    ]
},
{
  question: 'Which HTML element is used for creating an ordered list?',
  answers: [
      { text: '<ol>', correct: true },
      { text: '<ul>', correct: false },
      { text: '<li>', correct: false },
      { text: '<dl>', correct: false }
  ]
},
{
  question: 'In HTML, what does the <a> element stand for?',
  answers: [
      { text: 'Anchor', correct: true },
      { text: 'Abbreviation', correct: false },
      { text: 'Article', correct: false },
      { text: 'Audio', correct: false }
  ]
},
{
  question: 'Which attribute is used to define inline styles in HTML?',
  answers: [
      { text: 'style', correct: true },
      { text: 'class', correct: false },
      { text: 'font', correct: false },
      { text: 'css', correct: false }
  ]
},
{
  question: 'What does the HTML <img> tag represent?',
  answers: [
      { text: 'Image', correct: true },
      { text: 'Input', correct: false },
      { text: 'Italic', correct: false },
      { text: 'Internet', correct: false }
  ]
},
{
  question: 'Which HTML tag is used for creating a hyperlink?',
  answers: [
      { text: '<a>', correct: true },
      { text: '<link>', correct: false },
      { text: '<hlink>', correct: false },
      { text: '<url>', correct: false }
  ]
},
{
  question: 'What is the purpose of the HTML <head> element?',
  answers: [
      { text: 'Contains meta-information about the document', correct: true },
      { text: 'Defines the main content of the document', correct: false },
      { text: 'Specifies a header for a document or section', correct: false },
      { text: 'Represents a navigation menu', correct: false }
  ]
},
{
  question: 'Which HTML element is used for creating a table?',
  answers: [
      { text: '<table>', correct: true },
      { text: '<tr>', correct: false },
      { text: '<td>', correct: false },
      { text: '<th>', correct: false }
  ]
},
{
  question: 'Which HTML element is used for creating a table?',
  answers: [
      { text: '<table>', correct: true },
      { text: '<tr>', correct: false },
      { text: '<td>', correct: false },
      { text: '<th>', correct: false }
  ]
},
{
  question: 'What does the HTML <form> element represent?',
  answers: [
      { text: 'A container for user input', correct: true },
      { text: 'A formatting element', correct: false },
      { text: 'A fragment identifier', correct: false },
      { text: 'A frame for content', correct: false }
  ]
}
,
{
  question: 'Which HTML attribute is used to define the character encoding for the document?',
  answers: [
      { text: 'charset', correct: true },
      { text: 'encoding', correct: false },
      { text: 'html-charset', correct: false },
      { text: 'document-encoding', correct: false }
  ]
},

]