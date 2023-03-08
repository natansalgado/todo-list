import { FaPlus } from "react-icons/fa";

interface EItems {
  id: number,
  content: string
}

interface ECardProps {
  title: string,
  items?: EItems[],
  addNewItem: () => void
}

export const Card = ({ title, items, addNewItem }: ECardProps) => {

  return (
    <div className='w-full mx-2 max-w-sm h-full max-h-[700px] rounded-md bg-[#00000060] border-[1px] border-[#ffffff70] shadow-lg shadow-black/30 flex flex-col justify-between'>
      <div className="h-[600px]">
        <div className="py-2 px-6 font-sans text-2xl font-bold text-[#fff] border-b-[1px] border-b-[#ffffff70] uppercase flex justify-between gap-2 gradient-header">
          <h1>{title}</h1>
        </div>
        <div className="h-full overflow-y-auto">
          {items &&
            items.map(item =>
              <p
                key={item.id}
                className="text-xl font-bold text-[#fff] p-2 border-b-[1px] border-b-[#ffffff70] last-of-type:border-none"
              >
                {item.content}
              </p>
            )
          }
        </div>
      </div>
      <button onClick={addNewItem} className='py-2 w-full flex justify-center items-center gap-2 gradient-header border-t-[1px] border-t-[#ffffff70]'>
        <p className='text-2xl text-white font-bold uppercase'>
          new item
        </p>
      </button>

    </div>
  )
}