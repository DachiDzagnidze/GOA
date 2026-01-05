// App.jsx
import React, { useState, useEffect } from "react";
import figlet from "figlet";

// ===============================
// 1) JSX ganmarteba:
// JSX chven gvadzlevs sashualebas rom davwerot HTMl-is msgavsi sytnaxi javascriptshi


// 2) gansxvaveba JS and JSX:
// JS: const element = React.createElement('h1', null, 'Hello');
// JSX: const element = <h1>Hello</h1>;
// JSX ufro martivia wasakitxad. da shegidzlia htmlis msgavsad sheqmna div-ebi

// 3) Component ganmartbea:
// componenti aris mravaljeradad gamoklenebuli UI s nawili is sheidzleba ikos funqcia an class-i

// ===============================
// 4) martivi mislameba
function Greeting() {
  return <h2>გამარჯობა, React!</h2>;
}

// ===============================
// 5) Header and Footer componentebi
function Header() {
  return <header><h1>headeri</h1></header>;
}

function Footer() {
  return <footer><p>footeri</p></footer>;
}

// ===============================
// 6) Product componenti
function Product({ name, price, image }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <img src={image} alt={name} width="180" />
      <h3>{name}</h3>
      <p>ფასი: {price}₾</p>
    </div>
  );
}

// ===============================
// 7) Hook explanation:
// Hook aris funqcia romelic gvexmareba ufro martivad vmartot reactis componenetebi.

// 8) Common hooks and usage:
// useState -> state მართვა
// useEffect -> side-effects (fetch, console.log, DOM updates)
// useContext -> context access
// useReducer -> complex state logic
// useRef -> DOM access / persist values
// useMemo -> optimize expensive calculations
// useCallback -> optimize functions
// useLayoutEffect -> runs before paint
// useDebugValue -> debug custom hooks

// ===============================
// 9) Figlet magaliti
function FigletExample() {
  const [figletText, setFigletText] = useState("");

  useEffect(() => {
    figlet.text("React Rocks!", function (err, data) {
      if (err) {
        console.log("Figlet error", err);
        return;
      }
      setFigletText(data);
    });
  }, []);

  return (
    <pre style={{ fontSize: "10px", whiteSpace: "pre-wrap" }}>{figletText}</pre>
  );
}

// ===============================
// Main App componenti
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <Greeting />

      <h2>productebi</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Product
          name="Laptop"
          price={2500}
          image="https://via.placeholder.com/150"
        />
        <Product
          name="Phone"
          price={1200}
          image="https://via.placeholder.com/150"
        />
      </div>

      <h2>Figlet magaliti:</h2>
      <FigletExample />

      <Footer />
    </div>
  );
}

export default App;
