// ------------- Lec_4 -------------

// Version-1

/*

import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview"

function AppLayout() {
    return (
        <div>
            <Header/>

            <main>
                <h1>Content</h1>
            </main>

            <CartOverview/>

        </div>
    )
}

export default AppLayout;

*/

// Version-2

/*

import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview"
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <Header/>

            <main>
                <Outlet/>
            </main>

            <CartOverview/>

        </div>
    )
}

export default AppLayout;

*/

// ----------------- Lec_6 ------------------

import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview"
import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";

function AppLayout() {

    const navigation = useNavigation();
    // console.log(navigation)
    const isLoading = navigation.state === "loading";

    return (
        <div className="layout">

            {isLoading && <Loader/>}  

            <Header/>

            <main>
                <Outlet/>
            </main>

            <CartOverview/>

        </div>
    )
}

export default AppLayout;