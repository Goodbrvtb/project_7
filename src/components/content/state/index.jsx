import React, { useState } from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function State() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">State (useState)</h2>
            <p>
              При разработке приложений состояние (state) играет важную роль.
              Оно представляет собой данные, которые используются внутри
              компонента для отслеживания и обновления информации. Состояние
              позволяет компонентам быть динамичными и реагировать на изменения
              данных или взаимодействие пользователя. Простыми словами, это то,
              что ИЗМЕНЯЕТСЯ в компоненте, нежели props-ы которые неизменны.
            </p>
            <b>
              Хук (hook) в контексте React — это специальная функция, которая
              позволяет "подключаться" к возможностям React из функциональных
              компонентов. Хуки были введены в React в версии 16.8 и позволяют
              использовать функциональные компоненты вместо классовых для
              большинства задач, для которых раньше требовались классы.
            </b>
            <p>
              В React есть возможность использовать state в функциональных
              компонентах, путем использования хука useState.
            </p>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useState } from 'react';

const [state, setState] = useState(initialState);`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              При вызове функции обновления, React перерисует компонент с новым
              значением состояния.
            </p>
            <ul>
              <li>state: текущее значение состояния.</li>
              <li>setState: функция для обновления значения состояния.</li>
            </ul>
          </div>
          <div className="text-block">
            <b>Параметры</b>
            <p>
              <ul>
                <li>
                  initialState (необязательный): начальное значение состояния.
                  Может быть примитивным типом данных, объектом или функцией.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-block">
            <h2 className="content-title">Создание state</h2>
            <p>
              Например, можно создать состояние для отслеживания текущего
              счетчика:
            </p>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useState } from 'react';

  const Counter = () => {
  const [count, setCount] = useState(0);

  // Остальной код компонента
};`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <h2 className="content-title">Обновление состояния</h2>
            <p>
              Для обновления состояния в функциональных компонентах используется
              функция setCount, которая является вторым элементом массива,
              возвращаемого useState. При вызове setCount передается новое
              значение состояния или функция. Когда новое состояние зависит от
              предыдущего, то лучше использовать функциональное обновление.
            </p>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {`const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count => count + 1);
  };

  // Остальной код компонента
};
            `}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              React автоматически обновит компонент и перерисует его с новым
              значением состояния:
            </p>
          </div>
          <div className="text-block">
            <h2 className="content-title">
              Примеры использования state в компонентах
            </h2>
            <p>
              Примером работы со state является счётчик, который изменяется при
              нажатии на кнопку.
            </p>
            <div className="count">
              <button onClick={increment}>Увеличить</button>
              <p>Счетчик: {count}</p>
              <button onClick={decrement}>Уменьшить</button>
            </div>
            <p>
              Состояние позволяет компонентам отображать и обновлять данные.
              Чаще всего используется для временного хранения каких-то данных.
              Состояние также позволяет реагировать на события и обновлять
              компонент в соответствии с новыми данными.
            </p>
            <p>
              Пример использования состояния для отслеживания текущего счетчика
              и его отображения:
            </p>
          </div>

          <div className="code-block">
            <pre>
              <code>
                {`const Counter = () => {
  const [count, setCount] = useState(0);

    const increment = () => {
    setCount((count) => count + 1);
  };
    const decrement = () => {
    setCount((count) => count + 1);
  };
  };

  return (
    <div className="count">
              <button onClick={increment}>Увеличить</button>
              <p>Счетчик: {count}</p>
              <button onClick={decrement}>Уменьшить</button>
            </div>
  );
};
            `}
              </code>
            </pre>
          </div>
        </section>
      }
    />
  );
}

export default State;
