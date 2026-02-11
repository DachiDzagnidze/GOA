import React from "react";
import "./App.css";
import { NameLength } from "./components/NameLength";
import { ProductTotal } from "./components/ProductTotal";
import { TwoNumbersSum } from "./components/TwoNumbersSum";
import { TodoCount } from "./components/TodoCount";
import { TodoCompleted } from "./components/TodoCompleted";
import { StudentAverage } from "./components/StudentAverage";

export default function App() {
  return (
    <div className="app-container">
      <NameLength />
      <ProductTotal />
      <TwoNumbersSum />
      <TodoCount />
      <TodoCompleted />
      <StudentAverage />
    </div>
  );
}
