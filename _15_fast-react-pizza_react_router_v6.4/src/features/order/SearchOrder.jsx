// ------------- Lec_8 -------------

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {

  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  
  // So, whatever we type in the input field will be saved to the query state and then we need to move to the /order/query route.
  function handleSubmit(e) {
    
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
