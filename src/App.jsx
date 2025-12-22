import React from "react";

export default function App() {
  const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Props Drilling Demo</h2>

      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component2({ a, b, c, d, e, f }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
      <h3>Component2</h3>
      <p>
        I don't use any props, but I still receive and forward them (props
        drilling).
      </p>

      <Component3 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component3({ a, b, c, d, e, f }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
      <h3>Component3</h3>

      <h4>This is prop a: {a}</h4>
      <h4>This is prop b: {b}</h4>

      <Component4 c={c} d={d} e={e} f={f} />
    </div>
  );
}

function Component4({ c, d, e, f }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
      <h3>Component4</h3>

      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>

      <Component5 e={e} f={f} />
    </div>
  );
}
function Component5({ e, f }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
      <h3>Component5</h3>

      <h4>This is prop f: {f}</h4>

      <p>
        I don't use prop <b>e</b>, but I still receive and pass it to Component6
        (props drilling).
      </p>

      <Component6 e={e} />
    </div>
  );
}

function Component6({ e }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
      <h3>Component6</h3>

      <h4>This is prop e: {e}</h4>
    </div>
  );
}

