// Lec_1
// Static Portion i.e. without Events

import { useState } from "react";

/*

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  
  // For , now we need to change the steps manually. 
  const step = 2;

  // className={`${step >= 1 ? "active" : ""}`  <---- Means if step is 1 then Circle with 1 will be active.

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>

        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}

*/

//--------------------------------------------------------

// Lec_2
// Handling Events

// -------> Inline Event Handlers

/*

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // For , now we need to change the steps manually.
  const step = 2;

  function handlePrevious () {

    alert("Hovering the Mouse");
  }

  function handleNext () {

    alert("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>

        <div className={`${step >= 2 ? "active" : ""}`}>2</div>

        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => alert("Previous")}
          onMouseEnter={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

*/

// ---------------------------------------------

// Lec_3

// -----> State in React

/*

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

   // useState() is a hook and it can only be called at the top level of the component and it cannot be called inside the "if" , other functions.
  
   // Step-1 : Create the State Variable
   // useState (default_value)
   // const arr = useState(1);
   // console.log(arr) // arr is an array
   const [step , setStep] = useState(1);

  function handlePrevious () {

     if (step > 1) {

        setStep(step - 1);
     }

  }

  function handleNext () {

     if (step < 3) {
      setStep(step + 1);
     }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>

        <div className={step >= 2 ? "active" : ""}>2</div>

        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

*/

// ----------------------------------------------

// Lec_4
// Adding another piece of state

/*

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // useState() is a hook and it can only be called at the top level of the component and it cannot be called inside the "if" , other functions.

  // Step-1 : Create the State Variable
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  
  // Step-3 : Change State
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  
  // So, when isOpen is true then next thing will be returned else false will be returned.
  // Step-2 : Using the State
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>

            <div className={step >= 2 ? "active" : ""}>2</div>

            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

*/

// ----------------------------------------------

// Lec_5
// Updating Based on Current State


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {

  // Step-1 : Create the State Variable
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {

      // Bad practise
      // if we want to update the state by two times then below won't work
      // setStep(step - 1);
      // setStep(step - 1);
      
      // Best Practise : below callback function receives current state variable and then we update that curr_state.
      setStep ((currStep) => currStep-1);

      // and now , if we call it twice then we can see the step variable decreamenting twice
      setStep ((currStep) => currStep-1);

    }
  }
  
  // Step-3 : Change State
  function handleNext() {
    if (step < 3) {
      setStep ((currStep) => currStep+1);
    }
  }
  
  // So, when isOpen is true then next thing will be returned else false will be returned.
  // Step-2 : Using the State
  return (
    <>
      <button className="close" onClick={() => setIsOpen(currIsOpen => !currIsOpen)}>&times;</button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>

            <div className={step >= 2 ? "active" : ""}>2</div>

            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
