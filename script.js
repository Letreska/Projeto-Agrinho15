// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// QUIZ
const questions = [
  {
    q: "O que é agricultura sustentável?",
    options: ["Uso excessivo de recursos", "Produção com equilíbrio ambiental", "Desmatamento"],
    answer: 1
  },
  {
    q: "Qual tecnologia ajuda no campo?",
    options: ["Drones", "Fumaça", "Plástico"],
    answer: 0
  },
  {
    q: "O agro consome mais água em qual setor?",
    options: ["Indústria", "Agricultura", "Tecnologia"],
    answer: 1
  },
  {
    q: "O que reduz impacto ambiental?",
    options: ["Desmatamento", "Energia solar", "Queima de carvão"],
    answer: 1
  },
  {
    q: "Qual prática ajuda o solo?",
    options: ["Rotação de culturas", "Queimadas", "Monocultura excessiva"],
    answer: 0
  }
];

let current = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("score");

function loadQuestion() {
  const q = questions[current];

  quizContainer.innerHTML = `
    <h3>${q.q}</h3>
    ${q.options.map((opt, i) => `
      <label>
        <input type="radio" name="q" value="${i}">
        ${opt}
      </label><br/>
    `).join("")}
  `;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="q"]:checked');

  if (!selected) return alert("Selecione uma resposta!");

  if (parseInt(selected.value) === questions[current].answer) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = "<h3>Quiz finalizado!</h3>";
    scoreText.textContent = `Você acertou ${score} de ${questions.length}`;
    nextBtn.textContent = "Reiniciar";

    nextBtn.onclick = () => location.reload();
  }
});

loadQuestion();
