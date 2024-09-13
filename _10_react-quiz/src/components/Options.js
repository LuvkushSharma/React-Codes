// ------------- Lec_7 --------------

/*

function Options({currQuestion}) {
    return (
        <div className="options">

        {currQuestion.options.map((option) => (
          <button className="btn btn-option" key={option}>{option}</button>
        ))}

      </div>
    )
}

export default Options


*/

// ----------- Lec_8 ----------

// After accepting the props just write onClick function.

// As , a payload we'll pass the index of the option that we had clicked.

// Let's i had clicked the 2nd option i.e. index = 1 i.e. dispatch will set the answer state to 2.

/*

function Options({ currQuestion, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {currQuestion.options.map((option, currIndex) => (
        <button
          className={`btn btn-option ${currIndex === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? (currIndex === currQuestion.correctOption
                ? "correct"
                : "wrong")
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: currIndex })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

*/


// ---------------- Lec_9 -----------------------

/*

function Options({ currQuestion, dispatch, answer }) {
    const hasAnswered = answer !== null;
  
    return (
      <div className="options">
        {currQuestion.options.map((option, currIndex) => (
          <button
            className={`btn btn-option ${currIndex === answer ? "answer" : ""} 
            ${
              hasAnswered
                ? (currIndex === currQuestion.correctOption
                  ? "correct"
                  : "wrong")
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: currIndex })}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
  
  export default Options;
  


*/

// --------------------- Lec_10 -----------------------

function Options({ currQuestion, dispatch, answer }) {
    const hasAnswered = answer !== null;
  
    return (
      <div className="options">
        {currQuestion.options.map((option, currIndex) => (
          <button
            className={`btn btn-option ${currIndex === answer ? "answer" : ""} 
            ${
              hasAnswered
                ? (currIndex === currQuestion.correctOption
                  ? "correct"
                  : "wrong")
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: currIndex })}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
  
  export default Options;
  