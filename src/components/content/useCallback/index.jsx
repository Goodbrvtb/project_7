import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function UseCallback() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">useCallback</h2>

            <p>Хук useCallback принимает два параметра:</p>
            <ol>
              <li>
                Callback-функция: Это функция, которую мы хотим мемоизировать.
                Когда этот сallback вызывается, useCallback возвращает эту же
                функцию, если зависимости не изменились.
              </li>
              <li>
                Массив зависимостей: Это массив значений, от которых зависит
                сallback-функция. Если хотя бы одно из значений в массиве
                изменится, хук useCallback вернет новую мемоизированную версию
                колбэка. Если массив пустой, то колбэк будет создан только один
                раз, при первом рендере компонента.
              </li>
            </ol>
          </div>

          <p>Вот пример использования useCallback с обоими параметрами:</p>
          <div className="code-block">
            <pre>
              <code>
                {`const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b],
);`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              В этом примере useCallback создает мемоизированную версию функции
              doSomething, и эта версия будет обновляться только в случае
              изменения значений a или b. Если a и b не изменятся между
              рендерами компонента, то useCallback вернет ту же самую
              мемоизированную функцию.
            </p>
          </div>
        </section>
      }
    />
  );
}

export default UseCallback;
