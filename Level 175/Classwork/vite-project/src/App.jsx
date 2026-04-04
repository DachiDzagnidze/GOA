import React, { Suspense } from "react";


const Message = React.lazy(() => import("./component/Message"));
// suspence used for to before compoinent will load it will show the ui 
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Joke of Day</h1>
      <Suspense fallback={<p>Loading joke...</p>}>
        <Message />
      </Suspense>
    </div>
  );
}

export default App;