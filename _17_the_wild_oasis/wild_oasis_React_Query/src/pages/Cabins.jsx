/*

// --------------- Previous Section Work -----------

// So, we had fetched the cabin's data manually through useEffect() 

import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {

  useEffect (function () {

    getCabins().then(data => console.log(data));

  } , [])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading> 
      <p>TEST</p>
      <img src="https://dhivkdjmprcoeimnxpuu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" alt="cabin_image"/>
    </Row>
  );
}

export default Cabins;


*/

// ------------- Lec_2 --------------

/*

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

// Now here we will want to display a table of all our cabins .

// Step-2️⃣ : Include <CabinTable/> component
function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;

*/


// -------------------- Lec_5 --------------------

import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";


function Cabins() {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm(!showForm)}>Add new Cabin</Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
