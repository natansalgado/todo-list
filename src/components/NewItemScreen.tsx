import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

interface NewItemProps {
  close: () => void,
  addToTodo: (value: string) => void,
  addToDoing: (value: string) => void,
  addToDone: (value: string) => void
}

export const NewItemScreen = ({ close, addToTodo, addToDoing, addToDone }: NewItemProps) => {
  const [newItem, setNewItem] = useState('')

  const handleNewItem = (e: any) => {
    setNewItem(e.target.value)
  }

  const handleAddToTodo = () => {
    addToTodo(newItem)
  }

  const handleAddToDoing = () => {
    addToDoing(newItem)
  }

  const handleAddToDone = () => {
    addToDone(newItem)
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000af] center flex">
      <div className="mx-2 mt-[-100px] h-max w-full max-w-sm gradient rounded-md  border-[1px] border-[#ffffff70] shadow-lg shadow-black/30">
        <button className='mt-10 ml-4' onClick={close}>
          <FaArrowLeft color='white' size={20} />
        </button>
        <h1 className="text-center mx-6 text-2xl text-white font-bold uppercase">
          add a new item
        </h1>
        <div className='mt-4 px-5'>
          <input type="text" value={newItem} onChange={handleNewItem} className="p-4 w-full text-white gradient-header rounded-md  border-[1px] border-[#ffffff70] shadow-lg shadow-black/30 focus:outline-none focus:bg-[#00000050]" />
        </div>

        <div className='px-2 mt-10 mb-20 justify-around font-semibold text-white flex flex-wrap'>
          <button onClick={handleAddToTodo} className='py-2 px-2 rounded-md  border-[1px] border-[#ffffff70] shadow-lg shadow-black/30 uppercase gradient-header'>
            to do
          </button>
          <button onClick={handleAddToDoing} className='py-2 px-2 rounded-md  border-[1px] border-[#ffffff70] shadow-lg shadow-black/30 uppercase gradient-header'>
            doing
          </button>
          <button onClick={handleAddToDone} className='py-2 px-2 rounded-md  border-[1px] border-[#ffffff70] shadow-lg shadow-black/30 uppercase gradient-header'>
            done
          </button>
        </div>

      </div>
    </div>
  )
}