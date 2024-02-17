import { FC } from 'react'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'

interface IMemberProps {
  name: string
  description: string
  count: number
}

const Member: FC<IMemberProps> = ({ name, description, count }) => {
  return (
    <div className="flex justify-between pt-3 mt-3 border-t">
      <div>
        <h4 className="text-sm font-medium" style={{ color: '#1C2024' }}>
          {name}
        </h4>
        <p className="font-normal text-xs" style={{ color: '#60646C' }}>
          {description}
        </p>
      </div>
      <div className="flex">
        <button
          className="h-8 w-8 rounded-md flex justify-center items-center"
          style={{ backgroundColor: '#F2F2F5' }}
        >
          <img src={minus} alt="Plus Icon" />
        </button>
        <p
          className="font-semibold text-base w-9 flex justify-center items-center"
          style={{ color: '#1F2327' }}
        >
          {count}
        </p>
        <button
          className="h-8 w-8 rounded-md flex justify-center items-center"
          style={{ backgroundColor: '#F2F2F5' }}
        >
          <img src={plus} alt="Plus Icon" />
        </button>
      </div>
    </div>
  )
}

export default Member
