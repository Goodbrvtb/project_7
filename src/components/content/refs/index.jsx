import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function Refs() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">Refs</h2>

            <p>
              Refs(далее просто “ссылки”) предоставляет способ доступа к
              DOM-узлам или React-элементам, созданным в методе render().
            </p>
            <p>Есть несколько хороших примеров использования ссылок:</p>
            <ol>
              <li>Управление фокусом, выделение текста.</li>

              <li>Выполнение анимаций.</li>

              <li>
                Интеграция со сторонними библиотеками, взаимодействующие с DOM.
              </li>
              <p>Управление фокусом - лучший из них:</p>
              <div className="code-block">
                <pre>
                  <code>
                    {`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}
                  </code>
                </pre>
              </div>
            </ol>
          </div>
        </section>
      }
    />
  );
}

export default Refs;
