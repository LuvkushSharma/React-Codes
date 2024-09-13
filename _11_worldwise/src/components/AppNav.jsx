/*

// ------------ Lec_3 -----------

import styles from "./AppNav.module.css"

function AppNav() {
    return (
        <nav className={styles.nav}>
            App navigation
        </nav>
    )
}

export default AppNav




*/

// *********************************

// ----------- Lec_4 --------------

/*

import styles from "./AppNav.module.css"

function AppNav() {
    return (
        <nav className={styles.nav}>
            App navigation
        </nav>
    )
}

export default AppNav

*/

// ------------ Lec_6 --------------

import styles from "./AppNav.module.css"
import { NavLink } from "react-router-dom"

function AppNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="cities">Cities</NavLink>
                </li>
                <li>
                    <NavLink to="countries">Countries</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppNav
