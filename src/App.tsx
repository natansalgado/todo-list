import { Board } from './components/Board'
import { NewItemModal } from './components/NewItemModal'
import { Footer } from './components/Footer'

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { useSelector } from 'react-redux'
import { state } from './Store/sliceLists'

import GlobalStyle from './styles/global'

const App = () => {
  const { newItemModal } = useSelector(state)

  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  )
}

export default App
