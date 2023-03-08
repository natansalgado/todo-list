import { useState } from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'

interface NewItemProps {
  close: () => void,
  addNewItem: (value: string, title: string) => void
}

export const NewItemScreen = ({ close, addNewItem }: NewItemProps) => {
  const [newItem, setNewItem] = useState('')

  const handleNewItem = (e: any) => {
    setNewItem(e.target.value)
  }

  const handleAddNewItem = (title: string) => {
    newItem && addNewItem(newItem, title)
  }

  return (
    <div className="z-10 fixed top-0 left-0 w-screen h-screen gradient-bg center flex">
      <div className="mx-2 mt-[-100px] h-max w-full max-w-sm bg-[#00000060] rounded-xl personal-shadow">
        <div className='py-4 px-6 gradient-bg rounded-t-xl flex justify-between items-center'>
          <button onClick={close}>
            <FaArrowLeft color='white' size={20} />
          </button>
          <h1 className="text-center mx-6 text-2xl text-white font-bold uppercase">
            add a new item
          </h1>
          <FaPlus color='white' size={20} />
        </div>
        <div className='mt-10 mb-6 px-4'>
          <input type="text" value={newItem} onChange={handleNewItem} className="p-4 w-full text-white gradient-bg rounded-xl personal-shadow" />
        </div>
        <div className='pb-10 justify-around font-semibold text-white flex flex-wrap'>
          <button onClick={() => handleAddNewItem('todo')} className='py-2 px-4 rounded-xl uppercase gradient-bg personal-shadow'>
            todo
          </button>
          <button onClick={() => handleAddNewItem('doing')} className='py-2 px-4 rounded-xl uppercase gradient-bg personal-shadow'>
            doing
          </button>
          <button onClick={() => handleAddNewItem('done')} className='py-2 px-4 rounded-xl uppercase gradient-bg personal-shadow'>
            done
          </button>
        </div>

      </div>
    </div>
  )
}