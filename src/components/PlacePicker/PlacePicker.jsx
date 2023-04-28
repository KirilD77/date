import React from 'react';
import emailjs from '@emailjs/browser';

const places = ['Просто гуляти (холодно)', 'Піца челентано'];

const construct = (array) => {
  const x = array.reduce((acc, curr) => {
    if(!curr) return acc;
    return { ...acc, ...curr };
  }, {});

  x.message = JSON.stringify(x);
  return x;
}

const PlacePicker = ({ goToPrevStep, step, setStepState, stepState = {}, entireState }) => {
  const sendEmail = () => {
    emailjs.send('service_dblr1oo', 'template_ezhokzd', construct(entireState), 'Hk4oJCYaS9U3pYH4L')
    .then((result) => {
        alert(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div>
      <p>Нa цьому кроці, <strong>Крихітко</strong>, тобі треба обрати куда ми підем</p>
      { places.map((place) => {
        return <div key={place}>
          <input checked={place === stepState.place} onChange={() => setStepState(step, { place })} id={place} type="radio" name='places' value={place} />
          <label htmlFor={place}>{place}</label>
        </div>
      }) }
      <button onClick={sendEmail}>Відправити це, сімпотному молодику. P.S єбу шикарно</button>
      <button onClick={goToPrevStep}>назад</button>
    </div>
  );
};

export default PlacePicker;
