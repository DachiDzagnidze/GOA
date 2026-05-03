import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Stack:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: "#ffe6e6" }}>
          <h2>⚠️ Something went wrong</h2>
          <p>The page could not be loaded.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;