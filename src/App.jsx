import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increment=()=>{
    setCount(count+1);
  }

  return (
    <>
      <div>
        <button onClick={increment}>Count</button>
       {count}
     </div>
    </>
  )
}

export default App
