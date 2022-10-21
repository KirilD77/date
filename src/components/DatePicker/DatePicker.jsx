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
          <option selected={stepState.day === 'monday'} value="monday">понеділок</option>
          <option selected={stepState.day === 'tuesday'} value="tuesday">вівторок</option>
          <option selected={stepState.day === 'wednesday'} value="wednesday">середа</option>
          <option selected={stepState.day === 'thursday'} value="thursday">четвер</option>
          <option selected={stepState.day === 'friday'} value="friday">пятниця</option>
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