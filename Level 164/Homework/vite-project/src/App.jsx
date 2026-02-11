import React, { createContext, useContext } from "react";

// 1
const ColorContext = createContext("red");
const FontSizeContext = createContext(16);
const RoleContext = createContext("user");
const AppTitleContext = createContext("My App");

// 2
function Header() {
  const title = useContext(AppTitleContext);
  return <h1>{title}</h1>;
}

// 3
function TextComponent() {
  const color = useContext(ColorContext);
  const fontSize = useContext(FontSizeContext);

  return (
    <p style={{ color: color, fontSize: fontSize }}>
      ეს ტექსტი მოდის Context-იდან
    </p>
  );
}

// 4
function RoleComponent() {
  const role = useContext(RoleContext);

  return (
    <div>
      {role === "admin"
        ? "ადმინ პანელი ხელმისაწვდომია"
        : "წვდომა შეზღუდულია"}
    </div>
  );
}

// 5
export default function App() {
  return (
    <AppTitleContext.Provider value="My App">
      <ColorContext.Provider value="blue">
        <FontSizeContext.Provider value={22}>
          <RoleContext.Provider value="admin">
            
            <Header />
            <TextComponent />
            <RoleComponent />

          </RoleContext.Provider>
        </FontSizeContext.Provider>
      </ColorContext.Provider>
    </AppTitleContext.Provider>
  );
}
