/* eslint-disable react/prop-types */
import Head from "./head"
import Search from "./Search"
import Navbar from "./Navbar"
const Header = ({ cartItem }) => {
    return (
        <>
            <Head />
            <Search cartItem={cartItem} />
            <Navbar />
        </>
    )
}

export default Header
