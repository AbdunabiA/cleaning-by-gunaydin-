import Home from 'pages/home'
import { Suspense } from 'react'

function App() {
  
  return (
    <Suspense fallback='Loading...'>
      <Home />
    </Suspense>
  );
}

export default App
