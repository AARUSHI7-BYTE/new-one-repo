import React, { createContext, useContext } from "react";

const AppContext = createContext();

function Component1() {

  const values = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={values}>
      <h3>Component 1</h3>
      <Component2 />
    </AppContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  const { a, b } = useContext(AppContext);

  return (
    <>
      <h3>Component 3</h3>
      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>
      <Component4 />
    </>
  );
}
function Component4() {
  const { c, d } = useContext(AppContext);

  return (
    <>
      <h3>Component 4</h3>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 />
    </>
  );
}
function Component5() {
  const { f } = useContext(AppContext);

  return (
    <>
      <h3>Component 5</h3>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </>
  );
}
function Component6() {
  const { e } = useContext(AppContext);

  return (
    <>
      <h3>Component 6</h3>
      <h4>This is prop e: {e}</h4>
    </>
  );
}
export default function App() {
  return <Component1 />;
}


