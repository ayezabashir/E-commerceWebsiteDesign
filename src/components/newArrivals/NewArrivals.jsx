import { AiFillCaretRight } from 'react-icons/ai'
import Cart from './Cart'

const NewArrivals = () => {
    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="heading">
                    <div className="heading-left">
                        <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="heading-right">
                        <span>View All</span>
                        <AiFillCaretRight className='icon' />
                    </div>
                </div>
                <Cart />
            </div>
        </section>
    )
}

export default NewArrivals
