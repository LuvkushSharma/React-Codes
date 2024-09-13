// ------------------ Lec_1 --------------------

/*

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };
  

  function reducer(state = initialStateAccount, action) {

    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) return state;
        // LATER
        return {
          ...state,
          loan: action.payload,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
  
      default:
        return state;
    }
  }

*/

// -------------------- Lec_2 -----------------------

/*

import { createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};


function reducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

console.log("---------- Hey Redux ----------");


// Now , on the store we can dispatch actions.
store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState()); // Prints current state of our store.

store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 1000, purpose: "Buy a car" },
});

console.log(store.getState());

store.dispatch({type: "account/payLoan"});
console.log(store.getState());

*/

// ------------------- Lec_3 -----------------------

/*

import { createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);


// Creating action creators for each actions.
// These functions will just return actions and actions are just objects.
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(2000 , "Buy a cheap car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

*/

// --------------------- Lec_4 ----------------------

/*

import { combineReducers } from "redux";
import { createStore } from "redux";


// ---------------- Initial States -----------------

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};


// ------------------- Reducers ------------------
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);


// ---------------- Account Action Creators ---------------
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}


// --------------- Customer Action Creators --------------
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}


// --------- Dispatch Actions and Getting States ---------

store.dispatch(createCustomer("Luvkush Sharma", "24343434"));
console.log(store.getState());

store.dispatch(updateName ("Nikhil Sharma"));
console.log(store.getState());

store.dispatch(deposit(250));
console.log(store.getState());

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(2000, "Buy a cheap car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

*/

// ----------------- Lec_5 --------------

/*

import { combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;

*/

// ----------------- Lec_9 -------------------

/*

import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Passing our middleware in the applyMiddleware() function.
const store = createStore(rootReducer , applyMiddleware(thunk));

export default store;

*/

// ----------------- Lec_10 ------------------


// It will does all the things by itself i.e. handling thunks , devtools and much more i.e. remove above package imports.

import { configureStore } from "@reduxjs/toolkit"

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";


const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;