import { useState } from 'react'
import appLogo from '../../assets/logo.svg'
import Stepper from '../stepper/Stepper'

const Header = () => {
  const [currentStep, setCurrentStep] = useState(2)

  return (
    <header className="p-5 flex">
      <img src={appLogo} alt="Citizen Remote" />
      <div className="flex flex-1 justify-center">
        <Stepper steps={4} current={currentStep} onChange={setCurrentStep} />
      </div>
    </header>
  )
}

export default Header
