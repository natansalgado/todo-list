import { FaRegTrashAlt } from 'react-icons/fa'

interface EItems {
  id: string,
  content: string
}

interface ECardProps {
  title: string,
  items?: EItems[],
  deleteItem: (id: string, title: string) => void
}

export const Card = ({ title, items, deleteItem }: ECardProps) => {

  return (
    <ul className='list snap-end last-of-type:mb-1 w-full mx-2 max-w-sm h-[89vh] rounded-xl bg-[#00000060] personal-shadow flex flex-col justify-between'>
      <div className="py-2 px-6 font-sans text-2xl font-bold uppercase flex justify-between gap-2 rounded-t-xl gradient-bg text-white">
        <h1>{title}</h1>
      </div>
      <div className="scroll h-full overflow-y-auto">
        {items &&
          items.map(({ id, content }) =>
            <li key={id} className='flex items-center justify-between border-b-[1px] border-b-[#fff5] last-of-type:border-none'>
              <p className="text-xl font-bold text-[#fff] p-4">
                {content}
              </p>
              <div className='mx-4'>
                <button onClick={() => deleteItem(id, title)}>
                  <FaRegTrashAlt color='white' size={20} />
                </button>
              </div>
            </li>
          )
        }
      </div>
      <div className="h-2 rounded-b-xl gradient-bg" />
    </ul>
  )
}