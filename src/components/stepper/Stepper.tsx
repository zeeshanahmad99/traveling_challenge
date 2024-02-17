import { FC } from 'react'

interface IStepperProps {
  steps: number
  current: number
  onChange: (selected: number) => void
}

const Stepper: FC<IStepperProps> = ({ steps, current, onChange }) => {
  return (
    <div className="flex">
      {Array(steps)
        .fill(1)
        .map((_, index) => (
          <button
            key={index}
            className="w-5 h-5 flex justify-center items-center"
            onClick={() => onChange(index)}
          >
            <div
              className={`w-2 h-2 rounded ${
                current === index ? 'w-4 h-2.5 bg-red rounded-full' : ''
              }`}
              style={{
                backgroundColor: current === index ? '#1F2327' : '#EBEBEF',
              }}
            />
          </button>
        ))}
    </div>
  )
}

export default Stepper
