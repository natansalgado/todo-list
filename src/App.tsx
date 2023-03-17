import { Board } from './components/Board'
import { NewItemModal } from './components/NewItemModal'
import { Footer } from './components/Footer'

import { useSelector } from 'react-redux'
import { state } from './Store/sliceLists'

import GlobalStyle from './styles/global'

const App = () => {
  const { newItemModal } = useSelector(state)

  return (
    <div className='App'>
      {newItemModal ?
        <NewItemModal />
        :
        <>
          <Board />
          <Footer />
        </>
      }
      <GlobalStyle />
    </div>
  )
}

export default App
