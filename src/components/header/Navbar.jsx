import { PiGridFour } from 'react-icons/pi'
import { AiFillCaretDown } from 'react-icons/ai'
const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <div className="categories">
                    <PiGridFour className='icon' />
                    <h4>Categories</h4>
                    <AiFillCaretDown className='icon' />
                </div>
                <div className="navlink">
                    <ul className="nav">
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/'>home</Link>

                        </li>
                        <li>
                            <Link to='/'>home</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
