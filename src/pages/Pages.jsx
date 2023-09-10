/* eslint-disable react/prop-types */
import FlashDeal from './flashdeals/FlashDeal'
import Home from './homepage/Home'

const Pages = ({ productItems }) => {
    return (
        <>
            <Home />
            <FlashDeal productItems={productItems} />
        </>
    )
}

export default Pages
