
// ----------- Lec_2 ------------

// -----------> Navbar


// Now , instead of <Link/> we can also use <NavLink/>

// As , if we click on one of the link then using <NavLink/> will add a class of "active" to that particular Link.

// Let's say i had clicked on /product then if i see it's structure while "inspect" then i can see that class="active" will added by default to the Product component div

/*

import { Link } from "react-router-dom";


function PageNav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>

                <li><Link to='/product'>Product</Link></li>

                <li><Link to='/pricing'>Pricing</Link></li>
            </ul>
        </nav>
    )
}

*/

/*

import { NavLink } from "react-router-dom";

function PageNav() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>

                <li><NavLink to='/product'>Product</NavLink></li>

                <li><NavLink to='/pricing'>Pricing</NavLink></li>
            </ul>
        </nav>
    )
}

export default PageNav;

*/

// ------------ Lec_4 --------------

import { NavLink } from "react-router-dom";

import styles from './PageNav.module.css'
import Logo from './Logo'

function PageNav() {
    return (
        <nav className={styles.nav}>
            
            <Logo/>

            <ul>
                
                <li><NavLink to='/product'>Product</NavLink></li>

                <li><NavLink to='/pricing'>Pricing</NavLink></li>

                <li><NavLink to='/login' className={styles.ctaLink}>Login</NavLink></li>

            </ul>
        </nav>
    )
}

export default PageNav;

