import { useState } from "react";

export const useMultiStepForm = (config) => {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState([]);

  const goToNextStep = () => {
    if (step === config.length - 1) return;
    console.log('here');
    setStep(prevStep => prevStep + 1);
  };

  const goToPrevStep = () => {
    if (step === 0) return;
    setStep(prevStep => prevStep - 1);
  };

  const setState = (idx, newState) => {
    setFormState((prevFormState) => {
      prevFormState[idx] = newState;

      return [...prevFormState];
    });
  };

  const isFirstStep = step === 0;
  const isLastStep = step === config.length - 1;

  return { formState, setState, step, goToNextStep, goToPrevStep, isFirstStep, isLastStep, currentComponent: config[step].component };
};