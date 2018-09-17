import React from 'react';
import ReactDOM from 'react-dom';

import AddColorForm from './components/AddColorForm';
import registerServiceWorker from './registerServiceWorker';
import StarRating from './components/StartRating[ES6]';
import App from './components/App'

const logColor = (title, color) => {
  // important for string templates use ` instead of ' or "
  console.log(`New Color: ${title} | ${color}`)
  console.log(`TODO: add new ${title} and ${color} to list`)
  console.log(`TODO: render UI with new Color`)
} 

ReactDOM.render(
  //<AddColorForm onNewColor={logColor}/>,
  //<StarRating totalStars={7} starsSelected={3} />,
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
