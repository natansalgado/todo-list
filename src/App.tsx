import { Lists } from './components/Lists'
import { NewItemScreen } from './components/NewItemScreen'
import { useState } from 'react'

interface EList {
  title: string;
  items: {
    id: string,
    content: string
  }[]
}

const listsEx = [{ title: 'todo', items: [] }, { title: 'doing', items: [] }, { title: 'done', items: [] }]

const App = () => {
  const [lists, setLists] = useState<EList[]>(listsEx)
  const [newItemScreen, setNewItemScreen] = useState(false)

  const todo = lists[0]
  const doing = lists[1]
  const done = lists[2]


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
    switch (title) {
      case 'todo':
        todo.items.push({ id: idGenerator(), content: value })
        break
      case 'doing':
        doing.items.push({ id: idGenerator(), content: value })
        break
      case 'done':
        done.items.push({ id: idGenerator(), content: value })
        break
    }
    setLists([todo, doing, done])
    closeNewItemScreen()
  }

  const deleteItem = (id: string, title: string) => {
    switch (title) {
      case 'todo':
        todo.items = todo.items.filter(item => item.id !== id)
      case 'doing':
        doing.items = doing.items.filter(item => item.id !== id)
      case 'done':
        done.items = done.items.filter(item => item.id !== id)
    }
    setLists([todo, doing, done])
  }

  return (
    <div className='h-full w-full flex flex-col justify-between items-center'>
      {newItemScreen ?
        <NewItemScreen
          close={closeNewItemScreen}
          addNewItem={addNewItem}
        />
        :
        <>
          <div className='scroll overflow-auto personal-container snap-y snap-mandatory h-full w-full flex justify-center items-center gap-2 flex-wrap over'>
            <Lists lists={lists} deleteItem={deleteItem} />
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
        </>
      }
    </div>
  )
}

export default App
