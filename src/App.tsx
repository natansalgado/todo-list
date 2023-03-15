import { useState } from 'react'
import { render } from 'react-dom'

import { Board } from './components/Board'
import { Footer } from './components/Footer'

import GlobalStyle from './styles/global'

const App = () => {
  const [newItemScreen, setNewItemScreen] = useState(false)

  const handleNewItemScreen = () => {
    setNewItemScreen(!newItemScreen)
  }

  return (
    <div className='App'>
      <Board newItemScreen={newItemScreen} handleNewItemScreen={handleNewItemScreen} />
      {!newItemScreen &&
        <Footer openNewItemScreen={handleNewItemScreen} />
      }

      <GlobalStyle />
    </div>
  )
}

export default App
