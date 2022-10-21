import { useState } from 'react'
import GreetStep from './components/GreetStep/GreetStep';
import DatePicker from './components/DatePicker/DatePicker';
import PlacePicker from './components/PlacePicker/PlacePicker';

import './App.css'
import { useMultiStepForm } from './useMulliStepForm';


const config = [{
  component: GreetStep
},
{
  component: DatePicker
},
{
  component: PlacePicker
}];

function App() {
  const { goToNextStep, goToPrevStep, currentComponent: CurrentComponent, formState, setState, step } = useMultiStepForm(config);

  return <div className='container'>
    {<CurrentComponent goToNextStep={goToNextStep} step={step} stepState={formState[ step ]} setStepState={setState} goToPrevStep={goToPrevStep} entireState={formState} />}
  </div>
}

export default App
