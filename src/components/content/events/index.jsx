import React, { useState } from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function Events() {
  const [value, setValue] = useState(true);
  const [text, setText] = useState("");

  const handleClick = () => {
    setValue((value) => (value ? false : true));
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">Events и как работать с ними</h2>
            <b>
              В React события (events) являются важной частью взаимодействия с
              пользователем. Они позволяют обрабатывать действия пользователя,
              такие как клики, наведение, отправка формы и другие.{" "}
            </b>

            <p>
              Вот пять наиболее часто используемых событий в React и примеры их
              применения:
            </p>
            <ol>
              <li>onClick (Клик):</li>
              <p>
                Событие onClick возникает при клике на элементе. Это одно из
                наиболее распространенных событий в React.
              </p>
              <div className="code-block">
                <pre>
                  <code>
                    {`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`}
                  </code>
                </pre>
              </div>
              <div>
                <button onClick={handleClick}>Показать или скрыть текст</button>
                {value && (
                  <p>"Этот текст будет спрятан по нажатию на кнопку"</p>
                )}
              </div>
              <li>onChange (Изменение):</li>
              <p>
                Событие onChange возникает при изменении значения элемента
                формы, такого как текстовое поле (input), флажок (checkbox) или
                выбор элемента списка (radio).
              </p>
              <div className="code-block">
                <pre>
                  <code>
                    {`const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}`}
                  </code>
                </pre>
              </div>
              <div>
                <h3>Введенный текст отобразиться рядом</h3>
                <input type="text" value={text} onChange={handleChange} />
                <p>{text}</p>
              </div>
              <b>
                В React, параметр event в callback-функции представляет объект
                события, который генерируется при изменении значения элемента
                формы или компонента. event.target.value содержит текущее
                значение input элемента.
              </b>
              <li>onSubmit (Отправка формы):</li>
              <p>
                Событие onSubmit возникает при отправке формы. Оно позволяет
                выполнить действия, связанные с отправкой данных формы на
                сервер.
              </p>
              <div className="code-block">
                <pre>
                  <code>
                    {`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );`}
                  </code>
                </pre>
              </div>
              <li>onMouseOver (Наведение курсора):</li>
              <p>
                Событие onMouseOver возникает, когда курсор наводится на
                элемент. Оно может использоваться для отображения дополнительной
                информации или изменения состояния компонента при наведении.
              </p>
              <div className="code-block">
                <pre>
                  <code>
                    {`const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}`}
                  </code>
                </pre>
              </div>
              <li>onKeyDown (Нажатие клавиши):</li>
              <p>
                Событие onKeyDown возникает при нажатии клавиши на клавиатуре.
                Оно позволяет реагировать на определенные комбинации клавиш или
                выполнять действия на основе нажатых клавиш.
              </p>
              <div className="code-block">
                <pre>
                  <code>
                    {`const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`}
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

export default Events;
