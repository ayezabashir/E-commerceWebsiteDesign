import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { BiSearchAlt2, BiSolidUser, BiCart } from 'react-icons/bi'
const Search = () => {
    return (
        <section className="search">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <div className="search-box">
                    <BiSearchAlt2 className='icon' />
                    <input type="text" placeholder='Search here...' />
                    <span>All Category</span>
                </div>
                <div className="icons">
                    <BiSolidUser className='icon' />
                    <div className="cart">
                        <Link to='/cart'>
                            <BiCart className='icon' />
                            <span>0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search
