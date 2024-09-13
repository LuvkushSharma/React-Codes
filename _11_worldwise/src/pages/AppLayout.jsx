
/*

// ------------- Lec_3 -----------

import AppNav from "../components/AppNav"

function AppLayout() {
    return (
        <div>
            <AppNav/>
        </div>
    )
}

export default AppLayout



*/



// *********************************

// ----------- Lec_4 --------------

import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'
import Map from "../components/Map"

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <Map/>
        </div>
    )
}

export default AppLayout
