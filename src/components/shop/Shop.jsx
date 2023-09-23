/* eslint-disable react/prop-types */
import ShopCart from "./ShopCart"
import ShopCategory from "./ShopCategory"
import { AiFillCaretRight } from 'react-icons/ai'

const Shop = ({ shopsItem, addToCart }) => {
    return (
        <div className="shop">
            <div className="container">
                <ShopCategory />
                <div className="content">
                    <div className="heading">
                        <div className="heading-left">
                            <h2>Mobile Phones</h2>
                        </div>
                        <div className="heading-right">
                            <span>View All</span>
                            <AiFillCaretRight className='icon' />
                        </div>
                    </div>
                    <div className="product-content">
                        <ShopCart shopsItem={shopsItem} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
