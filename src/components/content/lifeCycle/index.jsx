import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function LifeCycle() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">LifeCycle (useEffect)</h2>
            <b>LifeCycle === Жизненный цикл</b>

            <p>
              Методы жизненного цикла в React можно разделить на следующие
              группы:
            </p>
            <ol>
              <li>Методы монтирования (Mounting Methods):</li>
              <ul>
                <li>constructor()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
              </ul>
              <li>Методы обновления (Updating Methods):</li>
              <ul>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>componentDidUpdate()</li>
              </ul>
              <li>Методы размонтирования (Unmounting Methods):</li>
              <ul>
                <li>componentWillUnmount()</li>
              </ul>
              <li>Методы обработки ошибок (Error Handling Methods):</li>
              <ul>
                <li>componentDidCatch()</li>
              </ul>
            </ol>
          </div>
          <div className="text-block">
            <h2>Жизненный цикл функциональных компонентов:</h2>
            <p>
              <b>useEffect</b> - это хук в React, предназначенный для работы с
              методами жизненного цикла в функциональных компонентах. По сути
              вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла.
            </p>
            <ul>
              <li>
                <b>Первый параметр</b>: Функция, которая должна выполниться при
                монтировании компонента и при каждом обновлении.
              </li>
              <li>
                <b>Второй параметр: Массив зависимостей</b>определяет, на что
                конкретно должен реагировать useEffect. Если массив пуст,
                useEffect выполняется только при монтировании и размонтировании.
                Если в массиве указаны определенные значения, то useEffect будет
                выполняться только тогда, когда эти значения изменяются.
              </li>
            </ul>
          </div>
          <div className="code-block">
            <pre>
              <code>
                {`// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate (но есть прикол. Покажу ниже)
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <h2>Жизненный цикл классовых компонентов:</h2>
            <ol>
              <li>Mounting (Монтирование):</li>
              <ul>
                <li>
                  constructor(): Вызывается при создании экземпляра компонента.
                  Используется для инициализации состояния и привязки методов.
                </li>
                <li>
                  render(): Отрисовывает компонент и возвращает React элементы.
                </li>
                <li>
                  componentDidMount(): Вызывается после рендеринга компонента и
                  его добавления в DOM. Используется для выполнения запросов к
                  серверу, подписки на события и других побочных эффектов.
                </li>
              </ul>
              <li>Updating (Обновление):</li>
              <ul>
                <li>
                  shouldComponentUpdate(nextProps, nextState): Вызывается перед
                  обновлением компонента. Используется для оптимизации
                  перерисовки компонента путем возврата false, если обновление
                  не требуется.
                </li>
                <li>
                  render(): Отрисовывает компонент и возвращает React элементы.
                </li>
                <li>
                  componentDidUpdate(prevProps, prevState): Вызывается после
                  обновления компонента и его рендеринга. Используется для
                  выполнения дополнительных действий после обновления
                  компонента, например, для выполнения запросов к серверу на
                  основе новых пропсов
                </li>
              </ul>
              <li>Unmounting (Размонтирование):</li>
              <ul>
                <li>
                  componentWillUnmount(): Вызывается перед удалением компонента
                  из DOM. Используется для выполнения необходимых очисток,
                  отписки от событий и освобождения ресурсов.
                </li>
              </ul>
              <li>Error Handling (Обработка ошибок):</li>
              <ul>
                <li>
                  componentDidCatch(error, info): Вызывается при возникновении
                  ошибки в дочерних компонентах. Используется для отлавливания и
                  обработки ошибок.
                </li>
              </ul>
            </ol>
          </div>
        </section>
      }
    />
  );
}

export default LifeCycle;
