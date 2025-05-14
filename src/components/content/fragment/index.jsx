import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function Key() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">Fragment</h2>

            <p>
              C помощью фрагментов можно сгруппировать список дочерних элементов
              без добавления дополнительных узлов в DOM.
            </p>
            <p>
              Используем React.Fragment или выполняем импорт, чтобы использовать
              Fragment:
            </p>

            <div className="code-block">
              <pre>
                <code>
                  {`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}
                </code>
              </pre>
            </div>
            <p>
              Существует сокращенная запись (импортировать не нужно) -
              недостаток сокращенной записи: нельзя использовать атрибуты,
              например className или key:
            </p>
            <div className="code-block">
              <pre>
                <code>
                  {`import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      }
    />
  );
}

export default Key;
