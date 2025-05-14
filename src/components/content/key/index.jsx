import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function Fragment() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">Key</h2>

            <p>
              Ключи помогают React определять, какие элементы были изменены,
              добавлены или удалены. Их необходимо указывать, чтобы React мог
              сопоставлять элементы массива c течением времени:
            </p>
            <div className="code-block">
              <pre>
                <code>
                  {`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);`}
                </code>
              </pre>
            </div>
            <p>
              Лучший способ выбрать ключ — это использовать строку, которая
              будет явно отличать элемент списка от его соседей. Чаще всего ты
              будешь использовать ID из твоих данных как ключи. Если нет ID
              используй библиотеку uuid:
            </p>

            <div className="code-block">
              <pre>
                <code>
                  {`const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);`}
                </code>
              </pre>
            </div>
            <p>
              Ключи нужно определять непосредственно внутри массивов. Если не
              указать ключи, в консоли увидим сообщение:
            </p>
            <b>
              Warning: Each child in an array or iterator should have a unique
              “key” prop.
            </b>
            <p>
              Ключи оптимизируют работу c элементами массивов, уменьшают
              количество ненужных удалений и созданий элементов.
            </p>
            <b>
              Без key механизм reconciliation сверяет компоненты попарно между
              текущим и новым VDOM. Из-за этого может происходить большое
              количество лишних перерисовок интерфейса, что замедляет работу
              приложения.
            </b>
            <p>
              Добавляя key, мы помогаем механизму reconciliation тем, что с key
              он сверяет не попарно, а ищет компоненты с тем же key (тег / имя
              компонента при этом учитывается) — это уменьшает количество
              перерисовок интерфейса. Обновлены/добавлены будут только те
              элементы, которые были изменены/не встречались в предыдущем
              дереве.
            </p>
          </div>
        </section>
      }
    />
  );
}

export default Fragment;
