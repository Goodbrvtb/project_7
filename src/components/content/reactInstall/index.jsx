import React from "react";

import "./style.css";
import HomeTitle from "../../homeTitle";
import reactConsole from "../../../assets/console.jpg";
import reactConsole_1 from "../../../assets/console-1.jpg";
import reactConsole_2 from "../../../assets/console-2.jpg";
import reactConsole_3 from "../../../assets/console-3.jpg";
import reactConsole_4 from "../../../assets/console-4.jpg";
function ReactInstall() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <h2 className="content-title">С чего начать?</h2>
          <div className="text-block">
            <p>
              Вот пошаговая инструкция для создания первого приложения на React:
            </p>
            <p>
              1.Установи Node.js на свой компьютер Ты можешь скачать
              установочный файл с официального сайта
              [Node.js](https://nodejs.org/en/download). (надо будет
              перезагрузить компьютер если это windows)
            </p>
            <p>
              2. Проверь установлен ли Node.js и NPM Открой консоль (терминал) и
              введи в консоли команду `node -v` и `npm -v`.
            </p>
            <img
              className="react-console"
              src={reactConsole}
              alt="React Console"
            />
            <p>
              Если в консоли вывелись текущие версии node и npm, то всё
              установилось!!! УРА!
            </p>
            <p>
              3. Следующий шаг это установить vite. Это современный способ
              начать писать на react.
            </p>
            <p>
              Выполни команду npm init vite@latest. Эта команда создаст новый
              проект на React в папке vite-project (или любой другой, которую ты
              введешь сам).
            </p>
            <img
              className="react-console"
              src={reactConsole_1}
              alt="React Console"
            />
            <p>
              4. После этой команды, в текущей директории (папке) появится
              проект (это тоже папка) с тем названием, что было задано.
            </p>
            <img
              className="react-console"
              src={reactConsole_2}
              alt="React Console"
            />
            <p>
              5. Теперь ты можешь запустить проект. Перейди в консоли в нужную
              директорию `cd vite-project`
            </p>
            <img
              className="react-console"
              src={reactConsole_3}
              alt="React Console"
            />
            <p>6. Установи нужные пакеты для работы в проекте npm i</p>
            <p>7. Запусти проект командой npm run dev</p>
            <img
              className="react-console"
              src={reactConsole_4}
              alt="React Console"
            />
            <p>
              8. Открой браузер и перейди по адресу http://localhost:5173/,
              чтобы увидеть приложение на React!
            </p>
            <p>
              9. Теперь ты можешь начать изменять приложение, редактируя файлы в
              папке src. Каждый раз, когда ты сохраняешь изменения, приложение
              автоматически перезагружается в браузере.
            </p>
          </div>
        </section>
      }
    />
  );
}

export default ReactInstall;
