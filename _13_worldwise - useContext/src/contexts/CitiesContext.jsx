// ----------------- Lec_1 -------------------

/*

import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

// Step-1 : Create a Context
const CitiesContext = createContext();

function CitiesProvider({ children }) {

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
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };


*/

// ----------------------- Lec_2 -------------------------

/*

import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

// Step-1 : Create a Context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
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
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// Creating a Custom hooks
function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider , useCities};

*/

// ------------------ Lec_3 ---------------------

/*

import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

// Step-1 : Create a Context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity , setCurrentCity] = useState({});


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


  async function getCity (id) {

      try {
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities/${id}`);

        const data = await res.json();
        setCurrentCity(data);

      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }

  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// Creating a Custom hooks
function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider , useCities};

*/


// ------------------ Lec_9 ---------------------


/*

import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

// Step-1 : Create a Context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity , setCurrentCity] = useState({});


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


  async function getCity (id) {

      try {
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities/${id}`);

        const data = await res.json();
        setCurrentCity(data);

      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }

  }

  async function createCity(newCity) {

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCities (cities => [...cities , data]);

    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// Creating a Custom hooks
function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider , useCities};

*/

// --------------- Lec_10 -------------------

/*

import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

// Step-1 : Create a Context
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity , setCurrentCity] = useState({});


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


  async function getCity (id) {

      try {
        
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities/${id}`);

        const data = await res.json();
        setCurrentCity(data);

      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }

  }

  async function createCity(newCity) {

    try {

      setIsLoading (true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCities (cities => [...cities , data]);

    } catch {
      alert("There was an error creating city...");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {

   
    try {
      
      setIsLoading (true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities ((cities) => cities.filter((city) => city.id !== id));


    } catch {
      alert("There was an error deleting city...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// Creating a Custom hooks
function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider , useCities};

*/

// ---------------- Lec_11 ---------------------

import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

// Reducer must be a real function i.e. we cannot use async function here i.e. fetch logic must not be included here.
function reducer(state, action) {

  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {

  // Using reducer hook.
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {

    async function fetchCities() {

      dispatch({ type: "loading" });

      try {

        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        dispatch({ type: "cities/loaded", payload: data });

      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();

  }, []);

 
  async function getCity(id) {

    if (Number(id) === currentCity.id) return;

    dispatch({ type: "loading" });

    try {

      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });

    } catch {

      dispatch({
        type: "rejected",
        payload: "There was an error loading the city...",
      });
    }
  }

  async function createCity(newCity) {

    dispatch({ type: "loading" });

    try {

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({ type: "city/created", payload: data });

    } catch {

      dispatch({
        type: "rejected",
        payload: "There was an error creating the city...",
      });

    }
  }

  async function deleteCity(id) {

    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });

    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };