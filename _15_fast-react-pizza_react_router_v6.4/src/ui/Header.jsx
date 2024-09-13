// ------------- Lec_4 --------------

/*

import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>

            <p>Luvkush</p>

        </header>
    )
}

export default Header

*/

// ------------ Lec_8 --------------

import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to='/'>Fast React Pizza Co.</Link>

            <SearchOrder/>

        </header>
    )
}

export default Header