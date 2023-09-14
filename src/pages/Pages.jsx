/* eslint-disable react/prop-types */
import TopCategory from '../components/top/TopCategory'
import FlashDeal from './flashdeals/FlashDeal'
import Home from './homepage/Home'

const Pages = ({ productItems, cartItem, addToCart }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeal productItems={productItems} addToCart={addToCart} />
            <TopCategory />
        </>
    )
}

export default Pages
