/* eslint-disable react/prop-types */
import FlashDeal from './flashdeals/FlashDeal'
import Home from './homepage/Home'

const Pages = ({ productItems, cartItem, addToCart }) => {
    return (
        <>
            <Home cartItem={cartItem} />
            <FlashDeal productItems={productItems} addToCart={addToCart} />
        </>
    )
}

export default Pages
