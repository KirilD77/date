import React from 'react';

const DatePicker = ({ goToNextStep, goToPrevStep, step, stepState = {}, setStepState }) => {
  return (
    <div>
      <h2>Люба Соломійка😍, оберіть день тижня</h2>
      <div>
        <select onChange={(event) => {
          setStepState(step, {
            ...stepState,
            day: event.target.value
          })
        }} name="" id="">
          <option selected={stepState.day === 'saturday'} value="saturday">Субота</option>
          <option selected={stepState.day === 'sunday'} value="sunday">Неділя</option>
        </select>
      </div>
      <label htmlFor="">Введіть час який вам найбільше підходить </label>
      <input value={stepState.time} onChange={(e) => setStepState(step, {
        ...stepState,
        time: e.target.value
      })} type="text" />
      <div>
        <button onClick={goToPrevStep}>Назад</button>
        <button onClick={goToNextStep}>Далі</button>
      </div>
    </div>
  );
};

export default DatePicker;