/*

// ----------- Lec_2 ----------------

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </div>
  );
}

export default CartOverview;


*/

import { Link } from "react-router-dom";

// ---------- Lec_4 ----------------

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
