import { Card } from './components/List'
import { NewItemScreen } from './components/NewItemScreen'
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState([{ id: 0, content: 'Wash the dishes' }])
  const [doing, setDoing] = useState([{ id: 0, content: 'Wash the dishes' }])
  const [done, setDone] = useState([{ id: 0, content: 'Wash the dishes' }])

  const [newItemScreen, setNewItemScreen] = useState(false)

  const openNewItemScreen = () => {
    setNewItemScreen(true)
  }

  const closeNewItemScreen = () => {
    setNewItemScreen(false)
  }

  const addToTodo = (value: string) => {
    setTodo(prev => [...prev, { id: todo.length, content: value }])
    closeNewItemScreen()
  }

  const addToDoing = (value: string) => {
    setDoing(prev => [...prev, { id: doing.length, content: value }])
    closeNewItemScreen()
  }

  const addToDone = (value: string) => {
    setDone(prev => [...prev, { id: done.length, content: value }])
    closeNewItemScreen()
  }

  return (
    <div className='w-full h-full py-2 center gap-5 relative flex-wrap'>
      <Card title="to do" items={todo} addNewItem={openNewItemScreen} />
      <Card title="doing" items={doing} addNewItem={openNewItemScreen} />
      <Card title="done" items={done} addNewItem={openNewItemScreen} />
      {newItemScreen &&
        <NewItemScreen
          close={closeNewItemScreen}
          addToTodo={addToTodo}
          addToDoing={addToDoing}
          addToDone={addToDone}
        />
      }
    </div>
  )
}

export default App
