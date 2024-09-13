// ------------------ Lec_5 -----------------

/*

import styles from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <p>List of cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
            </footer>
        </div>
    )
}

export default Sidebar


*/


// ------------------- Lec_6 -----------------

import styles from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'
import { Outlet } from 'react-router-dom'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <Outlet/>

            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
            </footer>
        </div>
    )
}

export default Sidebar
