import { AiFillCaretRight } from 'react-icons/ai'
import DiscountCard from './DiscountCard'
const Discount = () => {
    return (
        <div className="discount new-arrivals">
            <div className="container">
                <div className="heading">
                    <div className="heading-left">
                        <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2>Big Discounts</h2>
                    </div>
                    <div className="heading-right">
                        <span>View All</span>
                        <AiFillCaretRight className='icon' />
                    </div>
                </div>
                <DiscountCard />
            </div>
        </div>
    )
}

export default Discount
