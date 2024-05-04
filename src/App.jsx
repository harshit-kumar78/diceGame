import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styled from 'styled-components'
import GamePage from './components/GamePage/GamePage'
import GamePlay from './components/GamePlay/GamePlay'
//first styled component
const Button = styled.button`
  color:red;
  padding:10px;
  background-color: black;

`

function App() {
  //is game started state

  const [isStarted, setIsStarted] = useState(true);

  const toggleGame = () => {
    debugger;
    setIsStarted(prev => !prev);
  }
  return (
    <div>
      {isStarted ? <GamePlay /> : <GamePage toggleGame={toggleGame} />}
    </div>
  )
}

export default App
