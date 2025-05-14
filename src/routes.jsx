import React from "react";
import { Routes, Route } from "react-router-dom";
import RectStart from "./components/content/reactStart/index";
import Home from "./components/content/home/index";
import ReactInstall from "./components/content/reactInstall";
import Components from "./components/content/components";
import Props from "./components/content/props";
import State from "./components/content/state";
import LifeCycle from "./components/content/lifeCycle";
import Events from "./components/content/events";
import Refs from "./components/content/refs";
import Fragment from "./components/content/fragment";
import Key from "./components/content/key";
import ReactMemo from "./components/content/reactMemo";
import UseMemo from "./components/content/useMemo";
import UseCallback from "./components/content/useCallback";
function RoutesMap() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="reactStart" element={<RectStart />}></Route>
      <Route path="reactInstall" element={<ReactInstall />}></Route>
      <Route path="components" element={<Components />}></Route>
      <Route path="props" element={<Props />}></Route>
      <Route path="state" element={<State />}></Route>
      <Route path="lifeCycle" element={<LifeCycle />}></Route>
      <Route path="events" element={<Events />}></Route>
      <Route path="refs" element={<Refs />}></Route>
      <Route path="Fragment" element={<Fragment />}></Route>
      <Route path="Key" element={<Key />}></Route>
      <Route path="reactMemo" element={<ReactMemo />}></Route>
      <Route path="useMemo" element={<UseMemo />}></Route>
      <Route path="useCallback" element={<UseCallback />}></Route>
    </Routes>
  );
}

export default RoutesMap;
