//-------------- Lec_1 ----------------

import { useState } from "react";

// Building a Reusable Star Rating Component.

// Array.from() converts any iterable object to an array.
// First arg : Iterable Object or {length}

// Function like map which can be applied to each element. This function will give curr_val and i (index).

// Note : 'i' starts from 0.

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

// Note : User will pass the Number of stars it wants weather 5 stars or 10 stars

/*

// ------------ Applying Static Styling Objects ------------

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

// export default function StarRating({maxRating}) {

// Setting default value for stars as 5 so, that if someone didn't specify the number of stars then it will assume by default.

export default function StarRating({ maxRating = 5 }) {

  return (

    <div style={containerStyle}>

      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}

      </div>

      <p style={textStyle}> {maxRating} </p>

    </div>
  );
}

*/

// **********************************

//-------------- Lec_2 ----------------

// Creating the Stars

/*

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};


export default function StarRating({ maxRating = 5 }) {


  // Whenever we click on one of the stars then we need to dynamically display the current rating. So, w need the help of state.
  
  // We cannot start the rating from '0' as it is not ideal. It should start from '1'

  // So, what we do is that we'll start the rating from '0' but at '0' it will print nothing.

  const [rating, setRating] = useState (1);
  
  // onRate={() => handleRating(i+1)} --> We are sending onRate function to each of the stars. Here 'i+1" means if the star position is 0 then rating becomes '1' because Array.from creates array by '0' base indexing.
  function handleRating (rating) {

     setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i+1)}/>
        ))}

      </div>

      <p style={textStyle}> {rating || ""} </p>
    </div>
  );
}

// By default : Full Stars svg donot have any height
// So, we need to define a style object.

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};

// Whenever i click on star-1 then rating becomes 1
// Whenever i click on star-2 then rating becomes 2
// So, we need to listen for the click event on each of the stars.

function Star({onRate}) {
  return (
    <span role="button" style={starStyle} onClick={onRate}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
        stroke="#000"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}

*/

// **********************************

// ------------- Lec_3 --------------

// Now , what we want is that : if a user clicks on th third star then stars from 1 to 3 becomes fully colored and left stars i.e. from 4 to 10 remains empty in case of 10 as the maxRating.

/*

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};


// full is a boolean value.
// full = {rating >= i+1} --> is the current rating is greater then the index of the star.

// Let's say i clicked on the 3rd star then rating = 3. Now , for star at index 0 the below condn is true. Same with the star at index : 1 and star at index : 2

// full = {rating >= i+1} 

// But this condn is false for the star at index : 3 i.e. 4th star hence in place of full star svg we are displaying empty star svg there.

export default function StarRating({ maxRating = 5 }) {

  const [rating, setRating] = useState(1);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} 
            full = {rating >= i+1}
          />
        ))}

      </div>

      <p style={textStyle}> {rating || ""} </p>

    </div>
  );
}

// So, if the star is full then render the svg after ? else render the empty star.
function Star({ onRate, full }) {
  return (
    <span role="button" style={starStyle} onClick={onRate}>

      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

*/


// ************************************

// ----------- Lec_4 -------------

// Handling Hover Events

// Now , we add a new functionality i.e. whenever we hover over stars then we get a temporary rating. Exactly with the number of stars that are currentlybeing hovered. But it is completely independent  from the rating that is actually set right now.

// So , we'll create a state which is storing the temporary hover rating as we know that temporary rating is independent from the rating.

/*

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};


export default function StarRating({ maxRating = 5 }) {
 
  const [rating, setRating] = useState(0);
  
  // This state stores the temprating of the stars whenever we hoversIn on hoversOut.
  const [tempRating , setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  //  full = {tempRating ? tempRating >= i+1 : rating >= i+1} ---> This , means if tempRating exists i.e. not '0' then check wheather tempRating >= i+1 condn is true for current star or not. Else we will check the previous condn as usual i.e. rating >= i+1

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} 

            full = {tempRating ? tempRating >= i+1 : rating >= i+1}
            onHoverIn = {() => setTempRating(i+1)}
            onHoverOut = {() => setTempRating(0)}
          />
        ))}

      </div>

      <p style={textStyle}> {tempRating || rating || ""} </p>

    </div>
  );
}

// onMouseEnter={onHoverIn}
// onMouseLeave={onHoverOut}

// So, whenever the user hovers on the stars then onHoverIn function will be called and whenever we leave the mouse then onHoverOut function will be called.

function Star({ onRate, full , onHoverIn , onHoverOut}) {
  return (

    <span role="button" style={starStyle} onClick={onRate}
    
     onMouseEnter={onHoverIn}
     onMouseLeave={onHoverOut}
    >

      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#000"
          stroke="#000"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}


*/

// ***********************************

// -------------- Lec_5 --------------

// Improving Reusability with Props.

/*


So, if we imagine that we want to reuse this component in many other applications, or maybe even publish it to NPM to share it with all React developers around the world,then they will probably not find this component very useful right now. So those developers, or in other words, those consumers, they will probably want to define things like the colors of these stars or maybe the sizes of the stars and the text in order to basically make this component fit into their own applications

So, previously we are declaring the styles object out of the function as all the objects renders each time stars are renders i.e. we had declared them out of the function.

but , now we should declare them inside the function as their properties will change dynamically.

--> We can also pass the className that the user wants to apply on the stars.


--> User can also pass some messages like with 5 stars user wnats to display some message and on 1 star user wants to display some other messages.

*/

/*

const containerStyle = {

  display: "flex",
  alignItems: "center",
  gap: "16px",
  
};

const starContainerStyle = {
  display: "flex",
};


// Never forget to give the default values.

// As , we had passed the 5 messages then it should be displayed in case of 5 stars only not in case of 10 stars.
export default function StarRating({ maxRating = 5 , color = '#fcc419', size =  48 , className="", messages = [] , defaultRating = 0 , onSetRating}) {

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  
 // So, user let's say sended defaultRating as 3
  const [rating, setRating] = useState(defaultRating);
  const [tempRating , setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating (rating); // ----> Setting the external rating
  }

  // messages[tempRating ? tempRating - 1 : rating-1]
  // if messages.length === maxRating then display the messages[tempRating-1] i.e. getting messages according to '0' base indexing.

 
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} 

            full = {tempRating ? tempRating >= i+1 : rating >= i+1}
            onHoverIn = {() => setTempRating(i+1)}
            onHoverOut = {() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}

      </div>

      <p style={textStyle}> {messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating-1] : tempRating || rating || ""} </p>

    </div>
  );
}


function Star({ onRate, full , onHoverIn , onHoverOut , color , size}) {


  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  

  return (

    <span role="button" style={starStyle} onClick={onRate}
    
     onMouseEnter={onHoverIn}
     onMouseLeave={onHoverOut}
    >

      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill= {color}
          stroke= {color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke= {color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

*/


// ******************* ⭐ Final Rating API Component ⭐ ****************************

const containerStyle = {

  display: "flex",
  alignItems: "center",
  gap: "16px",
  
};

const starContainerStyle = {
  display: "flex",
};


export default function StarRating({ maxRating = 5 , color = '#fcc419', size =  48 , className="", messages = [] , defaultRating = 0 , onSetRating}) {

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  
  const [rating, setRating] = useState(defaultRating);
  const [tempRating , setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating (rating); // ----> Setting the external rating
  }

  
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>

        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} onRate={() => handleRating(i + 1)} 

            full = {tempRating ? tempRating >= i+1 : rating >= i+1}
            onHoverIn = {() => setTempRating(i+1)}
            onHoverOut = {() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}

      </div>

      <p style={textStyle}> {messages.length === maxRating ? messages[tempRating ? tempRating - 1 : rating-1] : tempRating || rating || ""} </p>

    </div>
  );
}


function Star({ onRate, full , onHoverIn , onHoverOut , color , size}) {


  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };
  

  return (

    <span role="button" style={starStyle} onClick={onRate}
    
     onMouseEnter={onHoverIn}
     onMouseLeave={onHoverOut}
    >

      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill= {color}
          stroke= {color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke= {color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
