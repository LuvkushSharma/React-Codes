// These functions on components returns something called JSX which is a syntax that looks like HTML. Which basically describes what we can see on the screen.

// Code written on the CodeSandbox.io

/*

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button>Get Started</button>
    </div>
  );
}

*/

import {useEffect , useState} from "react";

export default function App() {

    const [advice, setAdvice] = useState("");

    // Initial value is 0
    const [count, setCount] = useState(0);

    async function getAdvice() {

         const res = await fetch('https://api.adviceslip.com/advice');

         const data = await res.json();
         // console.log(data.slip.advice);
         setAdvice (data.slip.advice);
         setCount ((c) => c + 1);
    }
    
    // So, anything which we need to change dynamically will be created using state.

    // So, on clicking the button we are getting different advices and this is only possible because of state.
    
    useEffect (function () {

        getAdvice ();

    },[]);

    return (
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>

         {/* We need dynamic count kii kitni baar maine Get Advice par click kiya hain and for that i need to create a state. 
         
         Since , at the starting we didn't get any advice. So, to greet at the starting we use useEffect

          */}
        {/* <p>You have read <strong>{count}</strong> pieces of advice</p> */}

        <Message count={count}></Message>
      </div>
    );
  }

  

//   New Component

// Props is an object.
function Message (props) {

    return <p>You have read <strong>{props.count}</strong> pieces of advice</p>
}

// So, we get to know about 👍
// 1. State
// 2. Effect
// 3. Components
// 4. Props