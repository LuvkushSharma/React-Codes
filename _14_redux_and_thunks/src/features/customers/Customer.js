// --------------- Lec_6 -----------------

import { useSelector } from "react-redux";


function Customer() {

  // Step-1️⃣ : Use the useSelector() hook
  // Now, this useSelector hook takes a callback function and this function takes as the single argument, the entire Redux store.

  // const customer = useSelector(store => store.customer);
  // console.log(customer)

  const customer = useSelector(store => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
