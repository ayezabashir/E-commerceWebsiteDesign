/* eslint-disable react/prop-types */
import Discount from '../components/discount/Discount'
import NewArrivals from '../components/newArrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCategory from '../components/top/TopCategory'
import FlashDeal from './flashdeals/FlashDeal'
import Home from './homepage/Home'

const Pages = ({ productItems, cartItem, addToCart, shopsItem }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeal productItems={productItems} addToCart={addToCart} />
            <TopCategory />
            <NewArrivals />
            <Discount />
            <Shop shopsItem={shopsItem} addToCart={addToCart} />
        </>
    )
}

export default Pages
