import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/content/home/index"));
const RectStart = lazy(() => import("./components/content/reactStart/index"));
const ReactInstall = lazy(() => import("./components/content/reactInstall"));
const Components = lazy(() => import("./components/content/components"));
const Props = lazy(() => import("./components/content/props"));
const State = lazy(() => import("./components/content/state"));
const LifeCycle = lazy(() => import("./components/content/lifeCycle"));
const Events = lazy(() => import("./components/content/events"));
const Refs = lazy(() => import("./components/content/refs"));
const Fragment = lazy(() => import("./components/content/fragment"));
const Key = lazy(() => import("./components/content/key"));
const ReactMemo = lazy(() => import("./components/content/reactMemo"));
const UseMemo = lazy(() => import("./components/content/useMemo"));
const UseCallback = lazy(() => import("./components/content/useCallback"));
const NotFound = lazy(() => import("./components/pages/notFound"));
function RoutesMap() {
  return (
    <div>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reactStart" element={<RectStart />}></Route>
          <Route path="/reactInstall" element={<ReactInstall />}></Route>
          <Route path="/components" element={<Components />}></Route>
          <Route path="/props" element={<Props />}></Route>
          <Route path="/state" element={<State />}></Route>
          <Route path="/lifeCycle" element={<LifeCycle />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/refs" element={<Refs />}></Route>
          <Route path="/Fragment" element={<Fragment />}></Route>
          <Route path="/Key" element={<Key />}></Route>
          <Route path="/reactMemo" element={<ReactMemo />}></Route>
          <Route path="/useMemo" element={<UseMemo />}></Route>
          <Route path="/useCallback" element={<UseCallback />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default RoutesMap;
