import { PiGridFour } from 'react-icons/pi'
import { AiFillCaretRight } from 'react-icons/ai'
const TopCategory = () => {
    return (
        <section className="topCat ">
            <div className="container">
                <div className="heading">
                    <div className="heading-left">
                        <PiGridFour className='icon' />
                        <h2>Top Categories</h2>
                    </div>
                    <div className="heading-right">
                        <span>View All</span>
                        <AiFillCaretRight className='icon' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TopCategory
