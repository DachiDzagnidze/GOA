import React from "react";
import { SimpleCounter } from "./SimpleCounter";
import { CounterWithReset } from "./CounterWithReset";
import { CustomCounter } from "./CustomCounter";
import { TodoAdd } from "./TodoAdd";
import { TodoDelete } from "./TodoDelete";
import { TodoFull } from "./TodoFull";

export default function App() {
  return (
    <div className="container">
      <section id="counters">
        <h1>Counter Components</h1>
        <SimpleCounter />
        <CounterWithReset />
        <CustomCounter />
      </section>

      <hr />

      <section id="todos">
        <h1>Todo Components</h1>
        <TodoAdd />
        <TodoDelete />
        <TodoFull />
      </section>
    </div>
  );
}

