import React from 'react';


/* Functional Component - they are literally JS functions that return a react
  element. They are custom components.
*/
const Intro = (props) => (

  <p className="App-Intro">{props.message}</p>

);

export default Intro;
