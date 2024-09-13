/*

-------------- Introduction to Styled Components ----------

// npm i styled-components

import styled from "styled-components";

// styled.h1 will return a component which we are saving in the H1

// And , to make below CSS looks like actual CSS we need to install a extension named : ""
const H1 = styled.h1`

  font-size: 30px;
  font-weight:600;
  background-color: yellow;

`

const Button = styled.button`
   
   font-size: 1.4rem;
   padding: 1.2rem 1.6rem;
   font-weight: 500;
   border: none;
   border-radius: 7px;
   background-color: purple;
   color: white;
   cursor: pointer;
   margin: 20px;

   &:hover {

      background-color: var(--color-brand-700);
   }

`;

const Input = styled.input`

   border: 1px solid #ddd;
   border-radius: 5px;
   padding: 0.8rem 1.2rem;
`

const StyledApp = styled.div`

   background-color: orangered;
   padding: 20px;
`


function App () {

 return <StyledApp>
    <H1>The Wild Oasis</H1>
    <Button onClick={() => alert("Check in")}>Check in</Button>
    <Button onClick={() => alert("Check out")}>Check out</Button>

    <Input type='number' placeholder="Number of guests"></Input>
 </StyledApp>

}

export default App;

*/



import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


