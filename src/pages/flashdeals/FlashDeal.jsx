/* eslint-disable react/prop-types */
import FlashCard from "../../components/flashcard/FlashCard"
import { AiFillThunderbolt } from 'react-icons/ai'

const FlashDeal = ({ productItems, addToCart }) => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <div className="heading">
                        <AiFillThunderbolt className="icon" />
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard productItems={productItems} addToCart={addToCart} />
                </div>
            </section>
        </>
    )
}

export default FlashDeal
