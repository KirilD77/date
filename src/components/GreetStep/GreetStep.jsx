import React from 'react';

const GreetStep = ({ goToNextStep }) => {
  return (
    <div className='greet-step'>
      <h2>Привіт, Соломійка😍</h2>
      <p>Вас вітає опитник. заповнивши який, Ви гарантовано проеведете як мінімум 1 день ваших вихідних</p>
      <p>В супроводі одного, сімпотного молодика</p>
      <button onClick={goToNextStep}>Почати!!</button>
    </div>
  );
};

export default GreetStep;