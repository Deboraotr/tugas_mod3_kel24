import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      document.title = "Counter mencapai 10!";
    } else {
      document.title = "Counter";
    }
  }, [count]);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Counter Punya Kelompok 24</h1>
      {count === 10 && <h2>Udah 10 !!</h2>}

      <button onClick={Increment}>Tambah</button>
      <br />
      <p>Counter: {count}</p>

      <button onClick={Decrement}>Kurang</button>
    </div>
  );
}

export default App;
