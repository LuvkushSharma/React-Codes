// ------------------ Lec_9 ----------------

/*

function NextButton({ dispatch, answer }) {
  // If current question is not answered then button will not be displayed.
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;


*/

// --------------- Lec_11 ---------------

function NextButton({ dispatch, answer , index , numQuestions}) {
    
    if (answer === null) return null;
  
    if (index < numQuestions - 1) return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
    
    // In this a action is happen in the reducer function.
    if (index === numQuestions - 1) return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  }
  
  export default NextButton;
  