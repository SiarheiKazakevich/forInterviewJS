function createBlocnotBody() {
  let blocnotContainer = document.createElement("div");
  blocnotContainer.classList.add("blocnotBody");
  blocnotBody.style.display = "flex";
  blocnotBody.style.justifyContent = "center";
  blocnotBody.style.alignItems = "center";

  let qaPairs = [
    {
      question: "Вопрос 1: Что такое JavaScript?",
      answer:
        "JavaScript - это язык программирования, который широко используется для создания интерактивных веб-сайтов. Он поддерживает как клиентское, так и серверное программирование.",
    },
    {
      question: "Вопрос 2: Чем отличается var, let и const в JavaScript?",
      answer:
        "var - это ключевое слово для объявления переменных в старом стиле. let и const были добавлены в стандарт ECMAScript 6. let позволяет объявлять переменные с ограниченной областью видимости, а const создает неизменяемые переменные.",
    },
  ];
  qaPairs.forEach((pair) => {
    let question = document.createElement("div");
    question.textContent = pair.question;
    question.classList.add("question");
    question.style.cursor = "pointer";
    question.style.fontWeight = "bold";
    question.style.display = "flex";
    question.style.justifyContent = "center";
    question.style.alignItems = "center";
    blocnotContainer.appendChild(question);

    let answer = document.createElement("div");
    answer.textContent = pair.answer;
    answer.classList.add("answer");
    answer.style.display = "none";
    answer.style.marginLeft = "20px";
    blocnotContainer.appendChild(answer);

    question.addEventListener("click", () => {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
  });
  document.body.appendChild(blocnotContainer);
}
createBlocnotBody();
