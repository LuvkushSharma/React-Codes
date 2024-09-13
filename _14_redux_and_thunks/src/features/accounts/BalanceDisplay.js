// ------------ Previously -----------

/*

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(123456)}</div>;
}

export default BalanceDisplay;



*/

// -------------- Lec_8 ------------

import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// It receives the state object from the store.
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// connect(mapStateToProps) ---> This will return a function and intern we call that function and passes <BalanceDisplay/> as the argument in that function.

// Now , after this we will receive balance as a prop in our <BalanceDisplay/> component. It seems weird that how we are receiving the prop but actually Redux connects in this way.

export default connect(mapStateToProps)(BalanceDisplay);
