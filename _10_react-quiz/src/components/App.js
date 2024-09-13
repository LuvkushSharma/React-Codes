/*

// ----------- Lec_1 ------------

import DateCounter from "./DateCounter";

function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

export default App;

*/

// ------------- Lec_3 ------------

/*

import Header from "./Header";
import Main from "./Main";

function App() {

  return (
    <div className="app">
      <Header/>
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;

*/

// -------------- Lec_4 --------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

// status can be : -
// 'loading' , 'error' , 'ready' , 'active' , 'finished'
// loading when quiz is loading and not started yet.
// 'ready' status is when questions has arrived and we are ready to start the quiz.
// 'active' status when quiz in the active state
// 'finished' status when quiz is just finished.

// So, instead of 'isLoading' , 'isError' , 'isActive' ,....
// we'll introduce a property in the initialState object.

const initialState = {
  questions: [],
  status: "loading",
};

// payload contains the data here
function reducer(currState, action) {

  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }

}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {

    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      //.catch((err) => console.error("Error"));
      .catch((err) => dispatch ({type: "dataFailed"}));

  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;

*/

// --------------- Lec_5 --------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error"
import StartScreen from "./StartScreen";


const initialState = {
  questions: [],
  status: "loading",
};


function reducer(currState, action) {

  switch (action.type) {

    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }

}

function App() {
  
  // Step-1️⃣ :  Destructuring the state 
  const [{questions , status} , dispatch] = useReducer(reducer, initialState);

  // Step-3️⃣ : Number of questions and pass this into the <StartScreen/> Component
  const numQuestions = questions.length;

  useEffect(function () {

    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch ({type: "dataFailed"}));

  }, []);
  
  // Step-2️⃣ : Since , these status are mutually exclusive i.e. we don't need any ternaries.
  return (
    <div className="app">
      <Header />
      <Main>
        {
          status === 'loading' && <Loader/>
        }

        {
          status === 'error' && <Error/>
        }

        {
          status === 'ready' && <StartScreen numQuestions={numQuestions}/>
        }
      </Main>
    </div>
  );
}

export default App;

*/

// ------------ Lec_6 ------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error"
import StartScreen from "./StartScreen";
import Question from "./Question";


const initialState = {
  questions: [],
  status: "loading",
};


// Step-1️⃣ : Create new action type in the switch statement.
function reducer(currState, action) {

  switch (action.type) {

    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case 'start':
      return {...currState, status: "active"};

    default:
      throw new Error("Action unknown");
  }

}

function App() {
  

  const [{questions , status} , dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {

    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch ({type: "dataFailed"}));

  }, []);
  

  return (
    <div className="app">
      <Header />
      <Main>
        {
          status === 'loading' && <Loader/>
        }

        {
          status === 'error' && <Error/>
        }

        {
          status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>
        }

        {
          status === 'active' && <Question/>
        }
      </Main>
    </div>
  );
}

export default App;

*/

// ------------ Lec_7 --------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

// Step-1️⃣ : index state
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};

function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  
  // Step-3️⃣ : Get the index after destructuring.
  const [{ questions, status , index}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  
  // Step-2️⃣ : send a prop to the Question component.
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && <Question currQuestion={questions[index]}/>}
      </Main>
    </div>
  );
}

export default App;

*/

// ------------ Lec_8 ------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

// Step-1️⃣ : Initially no answer will be there and we'll update it as soon as we'll get the question

// Step-5️⃣ : Create new state i.e. points 
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

// Step-2️⃣ : Updating the answer state.

// Step-6️⃣ : update points
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    case 'newAnswer':
      
     const question = currState.questions.at(currState.index);

      return {...currState , answer: action.payload , points: action.payload === question.correctOption ? currState.points + question.points : currState.points}  

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  
  // Step-4️⃣ : Get answer after destructuring.
  const [{ questions, status , index , answer}, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  
  // Step-3️⃣ : Pass the dispatch() to the Question component so, that later we can send it to the Options component.
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && <Question currQuestion={questions[index]} dispatch={dispatch} answer={answer}/>}
      </Main>
    </div>
  );
}

export default App;


*/

// --------------------- Lec_9 ------------------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton"

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

// Step-1️⃣ : Creating new action in the reducer.

// Step-3️⃣ : answer: null
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    case "newAnswer":
      const question = currState.questions.at(currState.index);

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1 , answer: null};

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  // Step-2️⃣ : Creating nextButton
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Question
              currQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton dispatch={dispatch} answer={answer}/>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;


*/

// ------------------ Lec_10 ----------------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};


function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    case "newAnswer":
      const question = currState.questions.at(currState.index);

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1 , answer: null};

    default:
      throw new Error("Action unknown");
  }
}

function App() {

  // Step-2️⃣ : Getting points destructured
  const [{ questions, status, index, answer , points}, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  // Step-3️⃣ : Max amount of points
  const maxPossiblePoints = questions.reduce((prevVal , currVal) => prevVal + currVal.points , 0)

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  // Step-1️⃣ : Add progress component when status is active
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>

            <Question
              currQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton dispatch={dispatch} answer={answer}/>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;

*/

// ---------------- Lec_11 --------------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

// Step-3️⃣ : new state i.e. highscore
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

// Step-2️⃣ : new action i.e. finish
// Step-4️⃣ : update the highScore in the finished status.
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    case "newAnswer":
      const question = currState.questions.at(currState.index);

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1 , answer: null};

    case "finish":
      return {...currState , status: "finished" , highscore: currState.points > currState.highscore ? currState.points : currState.highscore}  

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  
  // Step-5️⃣ : Getting highscore destructured
  const [{ questions, status, index, answer , points , highscore}, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;


  const maxPossiblePoints = questions.reduce((prevVal , currVal) => prevVal + currVal.points , 0)

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  // Step-1️⃣ : status = "finished"
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>

            <Question
              currQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>
          </>
        )}

        {
          status === "finished" && <FinishScreen dispatch={dispatch} points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore}/> 
        }
      </Main>
    </div>
  );
}

export default App;


*/

// -------------------- Lec_12 --------------------------

/*

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

// Step-1️⃣ : creating new action i.e. restart
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" };

    case "newAnswer":
      const question = currState.questions.at(currState.index);

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1, answer: null };

    case "finish":
      return {
        ...currState,
        status: "finished",
        highscore:
          currState.points > currState.highscore
            ? currState.points
            : currState.highscore,
      };

    case "restart":
      // M-1
      // return {
      //   ...currState,
      //   points: 0,
      //   highscore: 0,
      //   index: 0,
      //   answer: null,
      //   status: "ready",
      // };

    // M-2
       return {...initialState , questions: currState.questions, status: "ready"};

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prevVal, currVal) => prevVal + currVal.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />

            <Question
              currQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton
              dispatch={dispatch}
              answer={answer}
              numQuestions={numQuestions}
              index={index}
            />
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;


*/

// -------------------- Lec_13 ------------------------

import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer"

const SECS_PER_QUESTION = 30;

// Step-2️⃣
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

// Step-4️⃣ 
function reducer(currState, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...currState,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...currState,
        status: "error",
      };

    case "start":
      return { ...currState, status: "active" , secondsRemaining: currState.questions.length * SECS_PER_QUESTION};

    case "newAnswer":
      const question = currState.questions.at(currState.index);

      return {
        ...currState,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? currState.points + question.points
            : currState.points,
      };

    case "nextQuestion":
      return { ...currState, index: currState.index + 1, answer: null };

    case "finish":
      return {
        ...currState,
        status: "finished",
        highscore:
          currState.points > currState.highscore
            ? currState.points
            : currState.highscore,
      };

    case "restart":
      return {
        ...initialState,
        questions: currState.questions,
        status: "ready",
      };

    case "tick":
      return {...currState , secondsRemaining: currState.secondsRemaining - 1, status: currState.secondsRemaining === 0 ? 'finished' : currState.status}


    default:
      throw new Error("Action unknown");
  }
}

function App() {
  
  // Step-3️⃣
  const [{ questions, status, index, answer, points, highscore , secondsRemaining}, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prevVal, currVal) => prevVal + currVal.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  
  // Step-1️⃣
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />

            <Question
              currQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            dispatch={dispatch}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
