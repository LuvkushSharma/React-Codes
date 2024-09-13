/*

------------------ Lec_1 ----------------

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// ----------- React v18 ----------

// Selecting the div having id as "root" and rendering the App in the root section.
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App/>);

// -----> In Strict Mode our components are usually rendered twice.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// #################  Lec_2  ################

import React from "react";
import ReactDOM from "react-dom/client";

/*

In React, there are two important rules when we write components as functions. First, the function name needs to start with an uppercase letter like this and second, the function needs to return some markup. So usually in the form of JSX, but we can't even return nothing, like returning null.

*/

// Now , Eslint is showing that we didn't use that component. So, we will include the pizza component in the App component.

// Gives error as each component can only return one value

// return <h2>Hello React!</h2><Pizza></Pizza>;

// So. we'll return it using div and by that we are just returning a single value. i.e. we are nesting the components.

// By nesting it doesnot means we are nesting the function declarations. i.e.

/*

      function App() {

        function Pizza() {

            ....
        }

        ....
      }

      It's a very bad idea to do. So, always declare all your components in the top level.

  */

// Created pizza component for 1 Pizza Type. If we want to render more pizzas then we'll reuse that particular component.

/*

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function App() {
 
  // Now , go to the Public folder and from there get the data of pizzas from data.js

  // Now , write some code in Pizza component.
  return (
    <div>
      <h2>Hello React!</h2>
      <Pizza></Pizza>
    </div>
  );
}

*/

/*

function Pizza() {
    return (
      <div>
        <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
        <h2>Focaccia</h2>
        <p>Bread with italian olive oil and rosemary</p>
      </div>
    );
  }

 // Calling each component multiple times   
  function App() {

    return (
      <div>
        <h2>Hello React!</h2>
        <Pizza></Pizza>
        <Pizza></Pizza>
        <Pizza></Pizza>
      </div>
    );
  }  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ################# Lec_3 ###############

// ---------> Creating More Components

// Calling each component multiple times
/*

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1> Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  // 2nd argument is for the props.
  // return React.createElement('footer', null , "We're currently open!")

  return (
    <footer>{new Date().toLocaleTimeString()}.We're currently open!</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ################# Lec_4 ################

// -------> JavaScript Logic in Components

/*

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1> Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (isOpen)
  //   alert("We're currently open!");
  // else 
  //   alert("Sorry we're closed");
  

  return (
    <footer>{new Date().toLocaleTimeString()}.</footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ################ Lec_5 #############

// ----------> Styling React Applications

/*

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {

  // In JSX We write CSS using JavaScript Object.

  const style = {color: "red", fontSize: "48px", textTransform: "uppercase" }

  return (
    // <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
    //   Fast React Pizza Co.
    // </h1>
    <h1 style={style}>
      Fast React Pizza Co.
    </h1>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer>{new Date().toLocaleTimeString()}.</footer>;
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// importing the css file and Webpack handles it.

/*

import "./index.css";

function App() {

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );

}

function Header() {

  return (
    <header className="header">
      <h1>
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer className="footer">{new Date().toLocaleTimeString()}.</footer>;
}

function Pizza() {

  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="Pizza"></img>
      <h3>Focaccia</h3>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ################ Lec_6 ##############

// --------> Passing and Receiving Props

/*

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {// Sending Props from the Component }
      <Pizza
        name="Pizza Spinaci"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        // price="6"
        price={6}
        soldOut="false"
      />

      {// Passing Arguments in different Order is also valid. }
      <Pizza
        name="Pizza Margherita"
        soldOut="false"
        photoName="pizzas/margherita.jpg"
        // price="10"
        price={10}
        ingredients="Tomato and mozarella"
      />

      <Pizza
        name="Pizza Spinaci"
        soldOut="false"
        photoName="pizzas/spinaci.jpg"
        // price="12"
        price={12}
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
    </main>
  );
}

// Receiving Props in this Component.
function Pizza(props) {
  
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>

         {// Since , we were passing the price as a string from the menu i.e. 3 will we appended at the end and will not be added. So, pass a number instead of string from the menu. }
      
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer className="footer">{new Date().toLocaleTimeString()}.</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


*/

// ################## Lec_7 ################

// ---------> Rendering Lists

/*

Basically rendering a list is when we have an array and we want to create one component for each element of the array.

Since , we are passing the Pizza data manually from the parent to the child (). So, when we have an array then we use Rendering Lists concept.

*/

/*

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

*/

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our menu</h2>

//       {/*So, we are taking each pizza and for each pizza we are creating a Pizza Component.  */}

//       <ul className="pizzas">
//         {/*  ----> M-1
//         {pizzaData.map((pizza) => (
//           <Pizza
//             name={pizza.name}
//             ingredients={pizza.ingredients}
//             photoName={pizza.photoName}
//             price={pizza.price}
//             soldOut={pizza.soldOut}
//           />
//         ))}

//         */}

//         {/*  M-2  */}
//         {pizzaData.map((pizza) => (
//           <Pizza pizzaObj={pizza} key={pizza.name}/>
//         ))}
//       </ul>
//     </main>
//   );
// }

// Receiving Props in this Component.
// M-1
/*

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>

        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

*/

// ----> M-2

/*

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer className="footer">{new Date().toLocaleTimeString()}.</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ############## Lec_8 , Lec_9 and Lec_10 ##############

// -------->  Conditional Rendering With &&
// --------> Conditional Rendering With Ternaries
// --------> Conditional Rendering With Multiple Returns

/*t

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

*/

// ------> Code in Footer and Menu

// ------> Lec_8

/*

function Menu() {

  // const pizzas = pizzaData;
  const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // So, isOpen is true then due to short circuiting <p>Open</p> will be returned.
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}


*/

// --------> Lec_9

// ---> Conditional Rendering with ternaries

/*

Now , the question arises that why we donot use if else statement. Since , we know that according to the rules of JSX , which is that inside this JavaScrit mode, we cannot write any JavaScript. What we need to do here is to write something that actually produces a value and an if-else statement does not produce a value.

*/

/*

function Menu() {

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : <p>We're still working on our menu. Please come back later</p>}
    </main>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // So, isOpen is true then due to short circuiting <p>Open</p> will be returned.
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
  );
}

*/

// ---------> Lec_10

/*

function Menu() {

  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : <p>We're still working on our menu. Please come back later</p>}
    </main>
  );
}




function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // But the footer is not added here.
  // In this early return we are returning the <p> only.

  // if (!isOpen) return <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
  );
}

function Pizza(props) {
  
  // So, pizza that is soldout will not appear.
  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


*/

// ############### Lec_11 and Lec_12 ###############

// ------> Extracting JSX Into a New Component.

// ------> Destructuring Props

/*

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour}/>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

*/

/*

function Order(props) {
  return (
    <div className="order">
      <p>We're open until {props.closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

*/

/*

// Lec_12 

// Destructuring Props
// But we need to write the exact name of the props that we had passed.

function Pizza({pizzaObj}) {
  // So, pizza that is soldout will not appear.
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order({closeHour , openHour}) {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/

// ############### Lec_13 ##############

// -----------> React Fragments

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

*/

// We want the paragraph to be rendered when pizzas.length != 0 so, we had putted the code in the below conditional i.e.

/*

{numPizzas > 0 ? (

        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>

      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

*/

// But above code gives us an error becoz according to JSX we can only return one root element. i.e. we will put the above code in the "div".

// But , we donot want the trace of DOM i.e. we will now use React Fragment. i.e. putting all the code inside the <> </>

// So, when you inspect then u can see that no extra div is created.

// Note : If you want the key to be there then use <React.fragments key="..."> </React.fragments>

/*

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>

      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  // So, pizza that is soldout will not appear.
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


*/

// ################ Lec_14 ############

// -------> Setting Classes and Text Conditionally.

/*

Instead of hiding the sold out pizza we will now show them with the greyish color with a tag of SOLD OUT.

Write code in function Pizza () 

*/

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  // So, pizza that is soldout will not appear.
  // if (pizzaObj.soldOut) return null;
  
  // Applying 'sold-out' class to soldOut pizza only so, that only those pizzas color will be changed which are soldOut.
  return (
    // <li className="pizza">
     
     <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>

      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        
        {/*  M-1 */}
        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : (
          <span>{pizzaObj.price}</span>
        )} */}

         {/*  M-2  */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>

      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
