import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 4) mock API error reporting
    console.log("Sending error to API...");
    console.log("Error:", error.message);
    console.log("Stack:", errorInfo.componentStack);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null
    });
  };

  getErrorMessage(error) {
    if (!error) return "Something went wrong";

    if (error instanceof TypeError) {
      return "TypeError occurred in component";
    }

    if (error instanceof ReferenceError) {
      return "ReferenceError occurred in component";
    }

    return "Unexpected error occurred";
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: "#ffe6e6" }}>
          <h2>⚠️ Error Boundary</h2>

          <p>{this.getErrorMessage(this.state.error)}</p>

          <button onClick={this.handleRetry}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;