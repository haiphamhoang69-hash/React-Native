
import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Home from './components/Home';

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <Home />
  ) : (
    <Welcome onStart={() => setStarted(true)} />
  );
}
