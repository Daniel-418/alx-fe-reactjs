import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count <= 0 ? 0 : count - 1)}>Decrease Count</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
