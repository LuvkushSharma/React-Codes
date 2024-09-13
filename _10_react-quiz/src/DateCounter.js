import { useReducer, useState } from "react";

// ------------------- Initially -------------

/*

function DateCounter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    setCount((count) => count + step);
  };

  const defineCount = function (e) {
    setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

*/

// -----------------------  Lec_1 ---------------------

// Yet Another Hook: useReducer

/*

-----> useReducer() hook

The useReducer hook in React is a powerful alternative to useState that's especially useful for managing complex state logic in your components. It's typically used when the state logic involves multiple sub-values or when the next state depends on the previous one.


  const [state, dispatch] = useReducer(reducer, { count: 0 });

'reducer' is a function that takes the current state and an action, and returns the new state based on that action.

'dispatch' is used to send actions to the reducer. When a button is clicked, it dispatches an action object that includes a type property indicating the action to be performed.

*/

// So, initially currState is '0' and action is '1' --> dispatch (1)

// Dispatcher is a function which calls the Reducer function which has the access of currState and the action that we want to perform.

// Step-3️⃣

// useReducer takes a previous state and a action and intern it returns a new state.

/*

function reducer (currState , action) {

     console.log(currState , action);

     // So, whatever we returns will now becomes a new state.
     // return (currState + action);

     if (action.type === 'inc') return currState + action.payload;

     if (action.type === 'dec') return currState + action.payload;

     if (action.type === 'setCount') return action.payload;
}

function DateCounter() {

    // const [count, setCount] = useState(0);
     
    // Step-1️⃣
    // useReducer intially takes the reducer function and the initial currState value.
    const [count , dispatch] = useReducer (reducer , 0);

    const [step, setStep] = useState(1);
  
    // This mutates the date object.
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);
    
    // Step-2️⃣
    const dec = function () {
        // setCount((count) => count - 1);
        //   setCount((count) => count - step);

        // dispatch(-1);

        // Passing Action
        // Note : this payload property is optional as we can specify payload in the reducer function itself.
        dispatch ({type : 'dec' , payload : -1})
    
    };
  
    const inc = function () {
      // setCount((count) => count + 1);
      //   setCount((count) => count + step);

      // dispatch(1);
      dispatch ({type : 'inc' , payload : 1})
    };
  
    const defineCount = function (e) {
       //   setCount(Number(e.target.value));
       dispatch ({type : 'setCount' , payload : Number(e.target.value)})
    };
  
    const defineStep = function (e) {
      setStep(Number(e.target.value));
    };
  
    const reset = function () {
    //   setCount(0);
      setStep(1);
    };
  
    return (
      <div className="counter">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={defineStep}
          />
          <span>{step}</span>
        </div>
  
        <div>
          <button onClick={dec}>-</button>
          <input value={count} onChange={defineCount} />
          <button onClick={inc}>+</button>
        </div>
  
        <p>{date.toDateString()}</p>
  
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    );
  }
  export default DateCounter;

  */

// ----------------- Lec_2 -------------------

// Managing Related Pieces of State.

// Now replacing step state by useReducer();
// Usually we use state to manage more complex state values i.e. here we are passing 0 as the intial state of count but inplace of this we can also pass an object. And these complex states are mostly handled by useReducer()

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// useReducer() hook to centralize all the state updating logic in one central place, which is the reducer function.

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// Step-5️⃣ : Taking initialState outside of the function so, that we can use it while resetting the state.

/*

const initalState = {count: 0 , step: 1};

// Step-3️⃣ : This function should return a object as state type is object.

// We usually use Switch statement in the reducer function.
function reducer(currState, action) {
   
    switch(action.type) {

        case 'dec':
          // M-1
          // return {count: currState.count - 1 , step : currState.step}

          // M-2 : In this we are just modifying the count (key) and rest remains same.
          // return {...currState , count: currState.count - 1};

          // When we need to increament the count according to the step scale.
          return {...currState , count: currState.count - currState.step};
        
        case 'inc':
          // return {...currState , count: currState.count + 1} 
          return {...currState , count: currState.count + currState.step};
          
        case 'setCount':
          return {...currState , count: action.payload}  
        
        case 'setStep':
          return {...currState , step: action.payload}  

        case 'reset':
          // return {count: 0 , step : 1};  
          return initalState;

        default : 
          throw new Error("Unknown action")

    }
}

function DateCounter() {
   
  // const [count , setCount] = useState (0);
  // const [step, setStep] = useState(1);

  // Step-1️⃣
  // const initalState = {count: 0 , step: 1};

  const [state , dispatch] = useReducer(reducer, initalState);

  // Step-2️⃣ : Destructuring state object
  const {count , step} = state;

  
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {

    // No need of payload in this case as we can directly specify action as +1 or -1
    // dispatch({ type: "dec", payload: -1 });
    dispatch ({type: "dec"});
  };

  const inc = function () {
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc"});
  };

  const defineCount = function (e) {

    dispatch({ type: "setCount", payload: Number(e.target.value) });

  };

  const defineStep = function (e) {

    // setStep(Number(e.target.value));
    dispatch ({type: "setStep" , payload: Number(e.target.value)});
  };

  // Step-4️⃣
  const reset = function () {
    // setCount(0)
    // setStep(1);
    
    // We donot need the payload as we can specify that in the reducer function iteself.
    dispatch({type: "reset"});

  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

*/

// ------------------- Lec_3 ----------------------


const initalState = {count: 0 , step: 1};

function reducer(currState, action) {
   
    switch(action.type) {

        case 'dec':
          return {...currState , count: currState.count - currState.step};
        
        case 'inc':
          return {...currState , count: currState.count + currState.step};
          
        case 'setCount':
          return {...currState , count: action.payload}  
        
        case 'setStep':
          return {...currState , step: action.payload}  

        case 'reset':
          return initalState;

        default : 
          throw new Error("Unknown action")

    }
}

function DateCounter() {
   
  const [state , dispatch] = useReducer(reducer, initalState);

  const {count , step} = state;

  
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {

     dispatch ({type: "dec"});
  };

  const inc = function () {
    
     dispatch({ type: "inc"});
  };

  const defineCount = function (e) {

    dispatch({ type: "setCount", payload: Number(e.target.value) });

  };

  const defineStep = function (e) {

    dispatch ({type: "setStep" , payload: Number(e.target.value)});
  };

  const reset = function () {
  
    dispatch({type: "reset"});

  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
