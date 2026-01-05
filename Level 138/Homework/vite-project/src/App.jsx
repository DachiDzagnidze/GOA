import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    const newItems = items.slice(); 
    newItems.push("New Item");
    setItems(newItems);
  }

  return (
    <div>

      <header>
        <h1>My React Website</h1>
      </header>

      <main>
        <p>This is the main section</p>

        <img
          src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
          alt="example"
        />

        <br /><br />

        <button onClick={addItem}>Add Item</button>

        <div>
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <br />

        <div className="outer">
          <div className="middle">
            <div className="inner">
              Triple Nested Div
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026</p>
      </footer>

    </div>
  );
}

export default App;
