import { Card } from './components/List'
import { NewItemScreen } from './components/NewItemScreen'
import { useState } from 'react'

interface EItem {
  id: string,
  content: string
}

const App = () => {
  const [todo, setTodo] = useState<EItem[]>([])
  const [doing, setDoing] = useState<EItem[]>([])
  const [done, setDone] = useState<EItem[]>([])

  const [newItemScreen, setNewItemScreen] = useState(false)

  const idGenerator = () => {
    var randomString = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }

  const openNewItemScreen = () => {
    setNewItemScreen(true)
  }

  const closeNewItemScreen = () => {
    setNewItemScreen(false)
  }

  const addNewItem = (value: string, title: string) => {
    closeNewItemScreen()
    switch (title) {
      case 'todo':
        return setTodo(prev => [...prev, { id: idGenerator(), content: value }])
      case 'doing':
        return setDoing(prev => [...prev, { id: idGenerator(), content: value }])
      case 'done':
        return setDone(prev => [...prev, { id: idGenerator(), content: value }])
    }
  }

  const deleteItem = (id: string, title: string) => {
    switch (title) {
      case 'todo':
        const filteredTodo = todo.filter(item => item.id !== id)
        return setTodo(filteredTodo)
      case 'doing':
        const filteredDoing = doing.filter(item => item.id !== id)
        return setDoing(filteredDoing)
      case 'done':
        const filteredDone = done.filter(item => item.id !== id)
        return setDone(filteredDone)
    }
  }

  return (
    <div className='overflow-hidden h-full w-full flex flex-col justify-between items-center'>
      <div className='personal-container scroll snap-y h-full w-full flex justify-center items-center gap-2 flex-wrap overflow-auto'>
        <Card title="todo" items={todo} deleteItem={deleteItem} />
        <Card title="doing" items={doing} deleteItem={deleteItem} />
        <Card title="done" items={done} deleteItem={deleteItem} />
      </div>
      <div className='w-full gradient-bg personal-shadow'>
        <div className='py-2 px-2 text-center bg-[#00000030]'>
          <button onClick={openNewItemScreen} className='max-w-sm py-2 w-full gradient-bg rounded-xl personal-shadow'>
            <p className='text-2xl text-white font-bold uppercase'>
              new item
            </p>
          </button>
        </div>
      </div>
      {newItemScreen &&
        <NewItemScreen
          close={closeNewItemScreen}
          addNewItem={addNewItem}
        />
      }
    </div>
  )
}

export default App
