import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Hello from './App.js';
import reportWebVitals from './reportWebVitals';

var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
    animals={person.favorites}
  />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
