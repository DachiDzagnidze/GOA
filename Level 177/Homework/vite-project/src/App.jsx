import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Profile from "./Profile";

function App() {
  return (
    <div>

      {/* always works */}
      <Navbar />

      {/* isolated error section 1 */}
      <ErrorBoundary>
        <Posts crash={true} />
      </ErrorBoundary>

      {/* isolated error section 2 */}
      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>

    </div>
  );
}

export default App;