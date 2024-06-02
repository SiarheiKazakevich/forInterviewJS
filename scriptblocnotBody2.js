function createBlocnotBody2() {
  try {
    let blocnotContainer = document.createElement("div");
    blocnotContainer.classList.add("blocnotBody");
    blocnotContainer.style.display = "flex";
    blocnotContainer.style.justifyContent = "center";
    blocnotContainer.style.alignItems = "center";
    blocnotContainer.style.flexDirection = "column";

    let qaPairs = [
      {
        question:
          "Вопрос 2.1: Если бы вы присоединились к проекту и команда разработчиков использовала табы, а вы пробелы, что бы вы сделали в таком случае?",
        answer: `[Вопрос с подвохом] — Наиболее правильный ответ будет заключаться в том, чтобы использовать стандартный инструмент форматирования, вроде Prettier, чтобы код любого члена команды выглядел одинаково при отправке в репозиторий. Таким образом, вы сможете продолжать использовать пробелы, а команда сможет свободно использовать табы.

        Если вы будете навязывать свое мнение остальным разработчикам, то вас вряд ли будут считать командным игроком, а если вы начнете использовать табы без особого желания, то вы не будете так мотивированы, как все остальные, и с большой вероятностью уйдете.`,
      },
      {
        question:
          "Вопрос 2.2: Что вдохновляет или интересует вас в программировании?",
        answer: ``,
      },
      {
        question: "Вопрос 2.3: Что нового вы узнали вчера/на этой неделе?",
        answer: ``,
      },
      {
        question: "Вопрос 2.4: Расскажите о предпочитаемой среде разработки. ",
        answer: ``,
      },
      {
        question:
          "Вопрос 2.5: Если бы вы могли освоить одну технологию в этом году, что бы это было?",
        answer: ``,
      },
      {
        question:
          "Вопрос 2.6: Как на предыдущей работе вы решили последнее разногласие с вашим начальником? Чем все закончилось? Не могли бы вы дать номер вашего начальника, чтобы я мог проверить его версию?",
        answer: `[Последний вопрос — блеф, ни у кого нет времени звонить вашему бывшему начальнику]`,
      },
      {
        question:
          "Вопрос 2.7: Какие ресурсы, форумы или инструменты вы используете, чтобы узнавать о последних тенденциях во фронтенд-разработке и дизайне? Есть ли среди них фавориты, какие и почему?",
        answer: ``,
      },
      {
        question:
          "Вопрос 2.8: Можете ли вы описать свой рабочий процесс при создании веб-страницы? Какие первые пять шагов вы проделываете при создании нового проекта?",
        answer: ``,
      },

      {
        question:
          "Вопрос 2.9: С какой технической проблемой вы столкнулись в последний раз и как вы ее решили?",
        answer: ``,
      },
      {
        question:
          "Вопрос 2.10: Какие действия вы предприняли в отношении последних проектов, чтобы повысить удобство поддержки кода? Какие-либо конкретные парадигмы программирования, вроде функционального программирования или разработки через тестирование?",
        answer: ``,
      },
      {
        question:
          "Вопрос 2.11: С какими системами контроля версий вы знакомы? Как вы делитесь кодом между проектами без потерь?",
        answer: `Я знаком с несколькими системами контроля версий, включая:

1.Git: Наиболее популярная и широко используемая система контроля версий. Git предоставляет распределенную систему контроля версий и позволяет каждому разработчику иметь полную копию истории разработки. Популярные платформы, использующие Git, включают GitHub, GitLab и Bitbucket.

2.Subversion (SVN): Централизованная система контроля версий, которая была популярна до появления Git. SVN использует централизованное хранилище, и все изменения кода сохраняются на одном сервере.

3.Mercurial: Еще одна распределенная система контроля версий, похожая на Git. Mercurial стремится к простоте и высокой производительности.

4.Perforce: Коммерческая централизованная система контроля версий, известная своей производительностью при работе с большими кодовыми базами и файлами.

5.CVS (Concurrent Versions System): Одна из старейших систем контроля версий. На данный момент CVS менее популярен по сравнению с более современными системами, такими как Git и SVN.`,
      },
      {
        question:
          "Вопрос 2.12: Назовите четыре способа уменьшить время загрузки страницы.",
        answer: `
        Уменьшение времени загрузки страницы является важным аспектом оптимизации веб-сайта, который может значительно улучшить пользовательский опыт. Вот четыре способа достичь этого:
        
        1.Минимизация и сжатие ресурсов:
        Минификация: Удаление лишних пробелов, комментариев и сокращение имен переменных в CSS, JavaScript и HTML файлах.
        Сжатие: Использование таких алгоритмов сжатия, как Gzip или Brotli, для уменьшения размера передаваемых файлов.
        
        2.Оптимизация изображений:
        Сжатие изображений: Использование инструментов для сжатия изображений без потери качества, таких как ImageOptim, TinyPNG или Squoosh.
        Использование современных форматов: Применение современных форматов изображений, таких как WebP, которые имеют меньший размер по сравнению с традиционными JPEG и PNG.
        
        3.Использование кэширования:
        Кэширование в браузере: Настройка заголовков кэширования, чтобы браузеры могли хранить статические ресурсы на клиентской стороне и загружать их повторно при последующих визитах.
        Кэширование на стороне сервера: Использование механизмов кэширования на сервере для уменьшения нагрузки и ускорения времени отклика.
        Асинхронная загрузка и задержка загрузки (lazy loading):
        
        4.Асинхронная загрузка JavaScript: Использование атрибутов async и defer для загрузки скриптов без блокировки рендеринга страницы.
        Lazy loading для изображений и видео: Отложенная загрузка медиафайлов до тех пор, пока они не понадобятся (например, пока пользователь не прокрутит до них).
        
        Эти методы помогут значительно сократить время загрузки страницы и улучшить производительность вашего веб-сайта.`,
      },
      {
        question:
          "Вопрос 2.13: Как расшифровывается CORS и к какой проблеме это относится?",
        answer: `CORS расшифровывается как Cross-Origin Resource Sharing (совместное использование ресурсов между различными источниками).

        CORS относится к проблеме безопасности в веб-разработке, связанной с ограничениями, накладываемыми браузерами для защиты от атак типа "Cross-Site Scripting" (XSS) и "Cross-Site Request Forgery" (CSRF). Эти ограничения называются "политикой одинакового происхождения" (same-origin policy), которая запрещает веб-странице делать запросы на ресурсы с другого домена, если они не находятся в том же происхождении (протокол, домен и порт должны совпадать).
        
        CORS позволяет веб-сайтам явно разрешать доступ к своим ресурсам из других источников, изменяя заголовки HTTP. Это позволяет безопасно обходить политику одинакового происхождения, предоставляя разработчикам возможность загружать ресурсы с других доменов, но только в том случае, если сервер разрешает такие запросы через соответствующие заголовки.`,
      },
      {
        question:
          "Вопрос 2.14: Объясните, что такое ARIA и экранные считывающие устройства, а также как сделать веб-сайт доступным для людей с ограниченными возможностями.",
        answer: `ARIA (Accessible Rich Internet Applications) - это набор атрибутов, предназначенных для улучшения доступности веб-контента и веб-приложений для людей с ограниченными возможностями. ARIA помогает разработчикам сделать веб-контент более доступным для пользователей, которые используют вспомогательные технологии, такие как экранные считывающие устройства.

        Экранные считывающие устройства (screen readers) - это программы, которые преобразуют текст и другие элементы интерфейса в аудио или выводят их на дисплеи Брайля. Они помогают людям с нарушениями зрения взаимодействовать с компьютерами и мобильными устройствами, предоставляя аудиоописания содержимого и функциональности веб-страниц.
        
        Как сделать веб-сайт доступным для людей с ограниченными возможностями
        1.Использование ARIA-атрибутов:
        
        Атрибуты ARIA (например, aria-label, aria-labelledby, aria-describedby, aria-live, role и т.д.) добавляются к HTML-элементам для предоставления дополнительной информации экранным считывающим устройствам.
        Пример: <button aria-label="Submit form">Submit</button>
        2.Семантический HTML:
        
        Используйте правильные семантические элементы HTML (<header>, <nav>, <main>, <article>, <section>, <footer> и т.д.) для структурирования контента.
        Пример: <nav>, <article>, <header>
        3.Текстовые альтернативы:
        
        Добавляйте текстовые альтернативы для изображений с использованием атрибута alt.
        Пример: <img src="logo.png" alt="Company Logo">
        4.Фокус и навигация:
        
        Убедитесь, что пользователи могут легко перемещаться по веб-сайту с клавиатуры. Все интерактивные элементы должны быть доступны с помощью клавиши Tab.
        Используйте атрибуты tabindex для управления порядком фокусировки.
        Пример: <button tabindex="0">Click me</button>
        5.Цвета и контраст:
        
        Используйте достаточный контраст между текстом и фоном для улучшения читаемости.
        Пример: Проверьте контрастность с помощью инструментов, таких как WebAIM.
        6.Респонсивный дизайн:
        
        Убедитесь, что веб-сайт адаптируется к различным размерам экрана и устройствам.
        Используйте гибкие макеты и медиа-запросы в CSS.
        7.Заголовки и структуру:
        
        Используйте заголовки (<h1>, <h2>, <h3> и т.д.) для логической структуры контента.
        Пример: <h1>Main Title</h1>, <h2>Section Title</h2>
        8.ARIA Live Regions:
        
        Используйте атрибуты aria-live для динамического контента, чтобы экранные считывающие устройства уведомляли пользователей о новых или измененных элементах.
        Пример: <div aria-live="polite">New content loaded</div>
        9.Формы:
        
        Убедитесь, что формы имеют метки (<label>) для всех элементов ввода.
        Пример: <label for="username">Username</label><input id="username" type="text">
        Соблюдение этих рекомендаций поможет создать веб-сайт, который будет доступен и удобен для всех пользователей, включая людей с ограниченными возможностями.`,
      },
      {
        question: "Вопрос 2.15: Для чего используется doctype?",
        answer: `<!DOCTYPE> используется в HTML для указания типа документа и версии HTML, которую использует страница. Он сообщает браузеру, как следует интерпретировать и рендерить содержимое веб-страницы. Правильное использование <!DOCTYPE> позволяет браузеру работать в стандартахом режиме, избегая квиркс-режима (quirks mode), который может вызывать несовместимости и непредсказуемое поведение при рендеринге страниц.

        Примеры использования <!DOCTYPE>
        1.HTML5:
        <!DOCTYPE html>
        -Это наиболее часто используемый и рекомендуемый DOCTYPE для современных веб-страниц. Он минимален и говорит браузерам, что страница использует HTML5.
        
        2.HTML 4.01 Strict:
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
        -Указывает, что страница соответствует строгому режиму HTML 4.01, где запрещены устаревшие теги и атрибуты.
        
        3.HTML 4.01 Transitional:
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        -Указывает на использование переходного режима HTML 4.01, который допускает устаревшие теги и атрибуты.
        
        4.XHTML 1.0 Strict:
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        Указывает, что страница использует строгий режим XHTML 1.0, где синтаксис HTML должен соответствовать стандартам XML.
        
        5.XHTML 1.0 Transitional:
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        -Указывает на использование переходного режима XHTML 1.0, который допускает использование устаревших тегов и атрибутов.
        
        --Зачем нужен <!DOCTYPE>:
        
        1.Режим совместимости:
        Браузеры используют <!DOCTYPE> для определения режима рендеринга. Без него некоторые браузеры могут работать в режиме совместимости (quirks mode), что может привести к неправильному отображению страниц.
        
        2.Поддержка стандартов:
        <!DOCTYPE> помогает браузерам рендерить страницы в соответствии с веб-стандартами, что обеспечивает более предсказуемое и совместимое поведение между различными браузерами.
        
        3.Разработка и отладка:
        Наличие <!DOCTYPE> облегчает отладку и разработку веб-страниц, так как оно заставляет браузеры рендерить страницы в режиме стандартов, где ошибки и некорректное поведение проще обнаружить и исправить.
        
        Использование правильного <!DOCTYPE> важно для обеспечения корректного отображения и функционирования веб-страниц в различных браузерах и устройствах.`,
      },
      {
        question: "Вопрос 2.16: Перечислите структурные блоки в HTML5.",
        answer: `В HTML5 были введены новые семантические элементы, которые помогают улучшить структуру и понятность веб-страниц как для разработчиков, так и для поисковых систем и вспомогательных технологий. Вот некоторые из основных структурных блоков в HTML5:

        1.<header> - используется для определения заголовка документа или секции. Он может содержать заголовочные элементы, логотипы, навигационные элементы и другие вводные элементы.
       2.<nav> - предназначен для определения навигационных ссылок. Обычно используется для основного меню сайта.
       3.<section> - используется для разделения контента на тематические блоки. Каждый <section> должен содержать заголовок.
       4.<article> - представляет собой независимый фрагмент контента, который может быть отдельно от остального сайта, например, статью, пост в блоге или новость.
       5.<aside> - используется для контента, который связан с основным содержимым, но не является его частью, например, боковые панели, блоки с дополнительной информацией или ссылки.
       6.<footer> - представляет нижнюю часть документа или секции. Обычно содержит информацию об авторских правах, ссылки на политику конфиденциальности, контактную информацию и т.д.
       7.<main> - определяет основной контент документа, уникальный для данной страницы. Должен содержать центральное содержание страницы, исключая повторяющиеся элементы, такие как навигационные ссылки и боковые панели.
       8.<figure> и <figcaption> - используются для обозначения самостоятельного содержимого, такого как изображение или диаграмма, с пояснением или подписью.

       Эти элементы помогают создать более логичную и легко читаемую структуру веб-страницы, улучшая доступность и SEO-оптимизацию.
        `,
      },
      /*
      {
        question: "Вопрос 2.17: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.18: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.19: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.20: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.21: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.22: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.23: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.24: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.25: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.26: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.27: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.28: ",
        answer: ``,
      },
      {
        question: "Вопрос 2.29: ",
        answer: ``,
      },
      /*
       {
         question: "Вопрос 2.30: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.31: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.32: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.33: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.34: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.35: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.36: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.37: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.38: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.39: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.40: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.41: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.42: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.43: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.44: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.45: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.46: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.47: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.48: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.49: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.50: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
       {
         question: "Вопрос 2.2: ",
         answer: ``,
       },
      */
      // {question: "",  answer: ``,},
      //{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
      //{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
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
export { createBlocnotBody2 };
