import styled from "styled-components";
import CabinRow from "./CabinRow";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "./../../services/apiCabins";
import Spinner from "../../ui/Spinner";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

//------------------ Lec_2 ------------------

// Step-1️⃣
function CabinTable() {
  // Step-3️⃣ : queryFn will fetch the data from the database and this will return a promise and we didn't do fetch('...url') instead we will use the already created function in the apiCabin.js i.e. getCabin()

  // Now , this will return an object containing many features like isLoading , status , data , error and many more so, we'll destructure that object.
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner/>
  
  // Step-4️⃣ : Creating a table
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>

      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
      
    </Table>
  );
}

export default CabinTable;
