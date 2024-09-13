/*

// ----------- Lec_1 ------------

function Homepage() {
    return (
        <div>
            Homepage : Worldwise
        </div>
    )
}

export default Homepage

*/

/////////////////////////////////////

// ------------  Lec_2 ------------

/*

By typing <a href=""/> for moving to th next page will reload the whole page. So, how we can make it a single page if moving to different paths will reload the whole website.



      return
        <div>
            Homepage : Worldwise

            <a href="/pricing">Pricing</a>
        </div>

To prevent this we'll use 🤙

<Link> element provided by React-Router

*/

// Now create a new folder named as component and there just create a new file named as PageNav.jsx

// And include <PageNav/> component in all the components that are available in the pages folder.

/*

import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";


function Homepage() {
  return (
    <div>

      <PageNav/> 
      <h1>Homepage : Worldwise</h1>

      <Link to="/product">Product</Link>

    </div>
  );
}

export default Homepage;

*/


//////////////////////////////////////

// ------------ Lec_4 --------------

import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from './../components/PageNav'

// cta is a global className which resides in index.css file.

export default function Homepage() {
  return (
    <main className={styles.homepage}>
    
      <PageNav/> 
      

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to='/app' className='cta'>Start tracking now</Link>
      </section>
    </main>
  );
}