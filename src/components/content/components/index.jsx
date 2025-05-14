import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function Components() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">Компоненты</h2>
            <p>
              Компоненты React — это многократно иcпользуемые фрагменты
              JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
            </p>
            <p>Компоненты бывают функциональные и классовые.</p>
            <p>Проще всего объявить React-компонент как функцию:</p>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {` function Welcome() {
                return <h1>Привет, мир! </h1>;
            }`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              Эта функция — компонент, потому что она получает данные в одном
              объекте («пропсы») в качестве параметра и возвращает
              React-элемент. Мы будем называть такие компоненты
              «функциональными», так как они буквально являются функциями.
            </p>
            <p>Ещё компоненты можно определять как классы ES6:</p>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {`  class Welcome extends React.Component {
                render() {
                    return <h1>Привет, мир!</h1>;
                }
            }
            `}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>Компонента должна себя вести как чистая функция.</p>

            <p>«Чистой» называется функция, которая:</p>
            <ul>
              <li>
                Для одинаковых входных данных всегда возвращает один результат.
              </li>
              <li> Не имеет побочных эффектов (то есть не изменяет внешние</li>
              <li> состояния). Не зависит от внешних состояний.</li>
            </ul>
          </div>
        </section>
      }
    />
  );
}

export default Components;
