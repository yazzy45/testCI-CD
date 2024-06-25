import React from 'react';
import { Button } from './components/Button';
import { useCounter } from './hooks/useCounter';

function App() {
  const { count, addCount } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={addCount}>Increment</Button>
    </div>
  );
}

export default App;
