
const quizData = [
  {
    question:`'Bir kalbiniz vardı,onu hatırlayınız…' dizeleri kime aittir?' `,
    a: 'Nazım Hikmet Ran',
    b: 'Cahit Sıtkı Tarancı',
    c: 'Faruk Nafız Çamlıbel',
    d: 'Cahit Zarifoğlu',
    e: 'Can Yücel',
    correct: 'd',
  },
  {
    question: `'Ölümdür yaşanan tek başına, aşk iki kişiliktir.' dizeleri kime aittir?`,
    a: 'Can Yücel',
    b: 'Ataol Behramoğlu',
    c: 'Didem Madak',
    d: 'Edip Cansever',
    e: 'Özdemir Asaf',
    correct: 'b',
  },
  {
    question: `'Öyle yıkma kendini, Öyle mahzun, öyle garip…' dizeleri kime aittir?`,
    a: 'Mehmet Akif Ersoy',
    b: 'Ahmed Arif',
    c: 'Cemal Süreyya',
    d: 'Turgut Uyar',
    e: 'Can Yücel',
    correct: 'b',
  },
  {
    question: `'Sayısız penceren vardı bir bir kapattım. Bana dönesin diye bir bir kapattım…' dizeleri kime aittir?`,
    a: 'Atilla İlhan',
    b: 'Ahmet Haşim',
    c: 'Turgut Uyar',
    d: 'Nilgün Marmara',
    e: 'Ahmet Erhan',
    correct: 'c',
  },
  {
    question: `'Hepimiz ölecek yaştayız.' sözü kime aittir?`,
    a: 'Ece Ayhan',
    b: 'Küçük İskender',
    c: 'Oktay Rıfat',
    d: 'Bülent Parlak',
    e: 'Gülten Akın',
    correct: 'd',
  },
  
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
      
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene   </button>
    `
    }
  }
})
