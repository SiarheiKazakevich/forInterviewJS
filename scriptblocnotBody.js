function createBlocnotBody() {
  try {
    let blocnotContainer = document.createElement("div");
    blocnotContainer.classList.add("blocnotBody");
    blocnotContainer.style.display = "flex";
    blocnotContainer.style.justifyContent = "center";
    blocnotContainer.style.alignItems = "center";
    blocnotContainer.style.flexDirection = "column";

    let qaPairs = [
      {
        question: "Вопрос 1.1: Что такое JavaScript?",
        answer: `JavaScript - это высокоуровневый, интерпретируемый язык программирования, который используется для создания интерактивных и динамических веб-страниц. Он позволяет разработчикам добавлять функциональность на сайты,
           такие как анимации, формы обратной связи, валидацию данных, обновление контента без перезагрузки страницы и многое другое.
          Основные характеристики JavaScript:
          1)Динамический: JavaScript является динамически типизированным языком, что означает, что типы переменных определяются во время выполнения.
          2)Объектно-ориентированный: Поддерживает объектно-ориентированное программирование, что позволяет создавать объекты и классы.
          3)Прототипное наследование: В JavaScript используется прототипное наследование, которое отличается от классического наследования, используемого в таких языках, как Java или C++.
          4)Интерпретируемый: JavaScript не требует компиляции, он интерпретируется браузером во время выполнения.
          5)Кросс-платформенный: Работает на разных платформах и устройствах, включая настольные компьютеры, мобильные устройства и серверы.`,
      },
      {
        question: "Вопрос 1.2: Что такое примитивные типы данных в JavaScript?",
        answer: `-Это данные, которые не являются объектом и не имеют методов
                 -Примитивные: string, number, boolean, null, undefined, bigint, symbol
                 -Остальные типы: object, function`,
      },
      {
        question:
          "Вопрос 1.3: Что нового привнес в JS стандарт ES6 или ECMAScript2015?",
        answer: `
        Стрелочные функции, 
        Классы, 
        Шаблонные строки,
        Расширенные объектные литералы,
        Деструктуризация,
        Промисы,
        Генераторы,
        Модули,
        Symbol,
        Прокси,
        Множества,
        Параметры по умолчанию,
        Операторы rest и spread,
        Блочная область видимости, ключевые слова «let» и «const»`,
      },
      {
        question: "Вопрос 1.4: Какие значения в JS являются ложными?",
        answer: `Пустая строка, 0, null, undefined, NaN, false`,
      },
      {
        question: "Вопрос 1.5: Чем отличается var, let и const в JavaScript?",
        answer: `Переменные, объявленные с помощью ключевого слова «var», являются глобальными. 
        Это означает, что они доступны из любого места в коде.Переменные, объявленные с помощью
         ключевых слов «let» и «const» имеют блочную область видимости.Разница между «let» и 
         «const» состоит в том, что в первом случае мы может менять значение переменной, а во 
         втором — нет.`,
      },
    ];
    qaPairs.forEach((pair) => {
      let question = document.createElement("div");
      question.textContent = pair.question;
      question.classList.add("question");
      question.style.cursor = "pointer";
      question.style.fontWeight = "bold";
      question.style.border = "1px solid black";
      question.style.margin = "2px 0px 2px 0px";
      blocnotContainer.appendChild(question);

      let answer = document.createElement("div");
      answer.textContent = pair.answer;
      answer.classList.add("answer");
      answer.style.display = "none";
      answer.style.marginLeft = "20px";
      blocnotContainer.appendChild(answer);

      question.addEventListener("click", () => {
        answer.style.display =
          answer.style.display === "none" ? "block" : "none";
      });
    });
    document.body.appendChild(blocnotContainer);
  } catch (error) {
    console.error("произошла ошибка menu: ", error);
  }
}
export { createBlocnotBody };
