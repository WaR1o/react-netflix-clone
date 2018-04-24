import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import Search from "./Search";

const App = () => {
  return (
    <ErrorBoundary>
      <h1>TV Shows Scout</h1>
      <Search />
    </ErrorBoundary>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
