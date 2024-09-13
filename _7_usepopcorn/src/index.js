import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StarRating from './StarRating';

// <StarRating/> ----> In this case we didn't pass the maxRating so, it will not print the stars. So, we need to set the default value of maxRating.


// Let's say user wants the access of the state variable of the StarRating as the user wants to display the rating that he has done.

// i.e. in place of X he wants to display the rating.
// function Test () {

//     return <div>
//        <StarRating color="pink" maxRating={10}/>
//        <p>This movie was rated X stars</p>
//     </div>
// }

// We want the consumer of this component the ability to pass in a set function 

function Test () {

  const [movieRating , setMovieRating] = useState(0);

  return <div>
     <StarRating color="pink" maxRating={10} onSetRating = {setMovieRating}/>
     
     <p>This movie was rated {movieRating} stars</p>
  </div>
}

/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5}/>
    <StarRating maxRating={10}/>
    <StarRating size={24} color={"red"}/>
    <StarRating size={54} color={"green"}/>
    <StarRating size={54} color={"blue"}/>

    messages={[]} --> passing array of messages. 
    <StarRating size={54} color={"blue"} 
    className="test" messages={['Terrible' , 'Bad' , 'Okay' , 'Good' , 'Amazing']} 
      defaultRating={3}
    />

    <Test/>
  </React.StrictMode>
);

*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
