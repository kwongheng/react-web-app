import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const test = "Testing";
  if (test === "Testing") {
    console.log("This is a test log.");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter App</h1>
        <p>Current count: <strong data-testid="count">{count}</strong></p>

        <div className="buttons">
          <button
            onClick={() => setCount(count + 1)}
            data-testid="increment-btn"
          >
            + Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            data-testid="decrement-btn"
          >
            - Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            data-testid="reset-btn"
          >
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;