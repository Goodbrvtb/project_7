import React from "react";
import HomeTitle from "../../homeTitle";
import "./style.css";

function UseMemo() {
  return (
    <HomeTitle
      title={
        <section className="content-block">
          <div className="text-block">
            <h2 className="content-title">React.memo</h2>

            <p>
              React хук useMemo предназначен для мемоизации вычислений в
              функциональных компонентах. Он позволяет сохранять результат
              вычислений и повторно использовать его, если входные значения
              (зависимости) не изменились. Это может существенно повысить
              производительность, особенно в случаях, когда сложные вычисления
              выполняются при каждом рендеринге компонента.
            </p>
          </div>
          <h2>Примеры использования</h2>
          <p>Вычисление производительной функции:</p>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    // Например, фильтрация или сортировка массива данных
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"

  return (
    <div>
      {processedData}
    </div>
  );
};`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              В этом примере результат вычисления processData будет сохраняться
              и пересчитываться только при изменении значения пропса data. При
              последующих рендерах, если data не изменилось, будет использован
              сохраненный результат.
            </p>
          </div>
          <p>Кэширование компонента:</p>
          <div className="code-block">
            <pre>
              <code>
                {`import React, { useMemo } from 'react';

const ExpensiveComponent = ({ propA, propB }) => {
  // Сложный компонент, требующий много ресурсов
  return (
    // ...
  );
};

const MyComponent = ({ data }) => {
  const cachedComponent = useMemo(() => {
    // Компонент будет кэширован при каждом изменении propA или propB
    return <ExpensiveComponent propA={propA} propB={propB} />;
  }, [propA, propB]);

  return (
    <div>
      {cachedComponent}
    </div>
  );
};`}
              </code>
            </pre>
          </div>
          <div className="text-block">
            <p>
              В этом примере компонент ExpensiveComponent будет пересоздаваться
              только при изменении пропсов propA или propB. При остальных
              рендерах будет использоваться кэшированный компонент, что помогает
              снизить нагрузку на рендеринг сложных компонентов.
            </p>
          </div>
        </section>
      }
    />
  );
}

export default UseMemo;
