import { Link } from 'react-router-dom'
import { PiGridFour } from 'react-icons/pi'
import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <header className="navbar">
            <div className="container">
                <div className="categories">
                    <PiGridFour className='icon big' />
                    <h4>Categories</h4>
                    <AiFillCaretDown className='icon' />
                </div>
                <div className="navlink">
                    <ul className='link'>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>pages</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>vendor account</Link>
                        </li>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </ul>
                    <button className='toggle' onClick={() => setMobileMenu(!mobileMenu)}>
                        {
                            mobileMenu ? <AiOutlineClose className='icon close' /> : <AiOutlineMenu className='icon open' />
                        }
                    </button>
                    <ul className={mobileMenu ? 'mobileMenulink' : 'd-none'}>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/pages'>pages</Link>
                        </li>
                        <li>
                            <Link to='/user'>user account</Link>
                        </li>
                        <li>
                            <Link to='/vendor'>vendor account</Link>
                        </li>
                        <li>
                            <Link to='/track'>track my order</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
