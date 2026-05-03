import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <div>

      <ErrorBoundary>
        
        <ErrorBoundary>
          <BuggyComponent type="type" />
        </ErrorBoundary>

      </ErrorBoundary>

    </div>
  );
}

export default App;