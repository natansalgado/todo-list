import { useState } from 'react'

import { Board } from './components/Board'
import { Footer } from './components/Footer'
import { NewItemScreen } from './components/NewItemScreen'
import GlobalStyle from './styles/global'

const App = () => {
  const [newItemScreen, setNewItemScreen] = useState(false)

  const handleNewItemScreen = () => {
    setNewItemScreen(!newItemScreen)
  }

  const handleNewItem = () => {

  }

  return (
    <div className='App'>
      {newItemScreen ?
        <NewItemScreen close={handleNewItemScreen} addNewItem={handleNewItem} />
        :
        <>
          <Board />
          <Footer openNewItemScreen={handleNewItemScreen} />
        </>
      }
      <GlobalStyle />
    </div>
  )
}

export default App
