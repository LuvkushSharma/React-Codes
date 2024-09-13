// ----------- Lec_6 --------------

/*

function Question() {
 
    return (
      <div>
        Question
      </div>
    );
  }
  
  export default Question;

*/

// ------------ Lec_7 --------------

/*

import Options from "./Options";

function Question({ currQuestion }) {

  return (
    <div>
      <h4>{currQuestion.question}</h4>
      <Options currQuestion={currQuestion}/>
    </div>
  );
}

export default Question;

*/

// ------------ Lec_8 -------------

import Options from "./Options";

function Question({ currQuestion, dispatch, answer }) {
  return (
    <div>
      <h4>{currQuestion.question}</h4>
      <Options
        currQuestion={currQuestion}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;
