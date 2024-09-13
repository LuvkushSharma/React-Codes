// Previously before Lec_1

/*

const {useEffect, useState } = require("react");

import { BrowserRouter, Routes, Route } from "react-router-dom";


const BASE_URL = "http://localhost:9000";


import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form"
import City from "./components/City";

function App() {
  
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();

        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);


  return (

    <div>
      <BrowserRouter>
        <Routes>

          <Route path="product" element={<Product />} />

          <Route index element={<Homepage />} />

          <Route path="pricing" element={<Pricing />} />

          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>

            <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />

            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />

            <Route path='cities/:id' element={<City/>}/>

            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />

            <Route path="form" element={<Form/>} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

*/

// ---------------------- Lec_1 -------------------------

/*

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  // Taking all the states and effects from there to it's custom provider.

  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />

          <Route index element={<Homepage />} />

          <Route path="pricing" element={<Pricing />} />

          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />

            <Route path="cities" element={<CityList />} />

            <Route path="cities/:id" element={<City />} />

            <Route path="countries" element={<CountryList />} />

            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

*/

// --------------------- Lec_2 ---------------------------

/*

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";

import { CitiesProvider} from "./contexts/CitiesContext";

function App() {
  
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />} />

          <Route index element={<Homepage />} />

          <Route path="pricing" element={<Pricing />} />

          <Route path="login" element={<Login />} />

          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />

            <Route path="cities" element={<CityList />} />

            <Route path="cities/:id" element={<City />} />

            <Route path="countries" element={<CountryList />} />

            <Route path="form" element={<Form />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;

*/

// ------------------ Lec_13 -------------------

/*

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";

import { CitiesProvider } from "./contexts/CitiesContext";

import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />

            <Route index element={<Homepage />} />

            <Route path="pricing" element={<Pricing />} />

            <Route path="login" element={<Login />} />

            <Route path="app" element={<AppLayout />}>
              <Route index element={<CityList />} />

              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />

              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;

*/

// -------------------- Lec_14 ------------------

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CountryList from "./components/CountryList";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";

import { CitiesProvider } from "./contexts/CitiesContext";

import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="product" element={<Product />} />

            <Route index element={<Homepage />} />

            <Route path="pricing" element={<Pricing />} />

            <Route path="login" element={<Login />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<CityList />} />

              <Route path="cities" element={<CityList />} />

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />

              <Route path="form" element={<Form />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
